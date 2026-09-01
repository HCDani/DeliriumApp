jest.mock('axios', () => ({
  __esModule: true,
  default: { get: jest.fn() },
}));

jest.mock('react-native-fs', () => ({
  __esModule: true,
  default: {
    DocumentDirectoryPath: '/mock/documents',
    writeFile: jest.fn(),
  },
}));

const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

// jest.resetModules() rebuilds the mock factories, so the mocks have to be
// required per test rather than captured once at module scope.
const freshMocks = () => {
  jest.resetModules();
  const axios = require('axios').default;
  const RNFS = require('react-native-fs').default;
  axios.get.mockResolvedValue({ data: '<html>page</html>' });
  RNFS.writeFile.mockResolvedValue(undefined);
  return { axios, RNFS };
};

let logSpy: jest.SpyInstance;

beforeEach(() => {
  logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  logSpy.mockRestore();
});

test('importing the module does not download anything', async () => {
  const { axios, RNFS } = freshMocks();

  require('../fetchPageLinksAndSave');
  await flush();

  expect(axios.get).not.toHaveBeenCalled();
  expect(RNFS.writeFile).not.toHaveBeenCalled();
});

test('calling it with no arguments caches the eight default pages', async () => {
  const { axios, RNFS } = freshMocks();
  const fetchPages = require('../fetchPageLinksAndSave').default;

  await fetchPages();

  expect(axios.get).toHaveBeenCalledTimes(8);
  expect(RNFS.writeFile).toHaveBeenCalledTimes(8);
  expect(RNFS.writeFile).toHaveBeenCalledWith(
    '/mock/documents/page_symptomer.html',
    '<html>page</html>',
    'utf8',
  );
  expect(RNFS.writeFile).toHaveBeenCalledWith(
    '/mock/documents/page_laes-mere.html',
    '<html>page</html>',
    'utf8',
  );
});

test('an explicit list overrides the defaults', async () => {
  const { axios, RNFS } = freshMocks();
  const fetchPages = require('../fetchPageLinksAndSave').default;

  await fetchPages(['https://delirium.hock.hu/symptomer']);

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(RNFS.writeFile).toHaveBeenCalledWith(
    '/mock/documents/page_symptomer.html',
    '<html>page</html>',
    'utf8',
  );
});

test('one failing page does not stop the others', async () => {
  const { axios, RNFS } = freshMocks();
  const fetchPages = require('../fetchPageLinksAndSave').default;

  axios.get
    .mockRejectedValueOnce(new Error('network down'))
    .mockResolvedValue({ data: '<html>page</html>' });

  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  await fetchPages();

  expect(axios.get).toHaveBeenCalledTimes(8);
  expect(RNFS.writeFile).toHaveBeenCalledTimes(7);

  errorSpy.mockRestore();
});
