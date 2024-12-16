import RNFS from 'react-native-fs';
import { Alert } from 'react-native';

const apiEndpoint = 'https://delirium.hock.hu/wp-json/wp/v2/pages'; // WordPress API endpoint
const localDirectory = RNFS.DocumentDirectoryPath; // Directory where we will store the files locally

export const fetchAndSavePages = async () => {
  try {
    // Fetch the pages from the API
    const response = await fetch(apiEndpoint);
    const pages = await response.json();

    if (Array.isArray(pages)) {
      // Loop through each page and save them locally
      for (const page of pages) {
        const filePath = `${localDirectory}/${page.slug}.html`; // File path for each page
        let htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <title>${page.title.rendered}</title>
            </head>
            <body>
              ${page.content.rendered}
            </body>
          </html>
        `;

        // Replace internal links with local links (e.g., /about -> about.html)
        htmlContent = htmlContent.replace(/href="https:\/\/delirium\.hock\.hu\/([^"]+)"/g, (match, slug) => {
          return `href="${slug}.html"`;
        });

        // Save the HTML content to local storage
        await RNFS.writeFile(filePath, htmlContent, 'utf8');
        console.log(`Saved page: ${page.slug}`);
      }

      Alert.alert('Success', 'All pages have been saved for offline usage.');
    } else {
      Alert.alert('Error', 'Failed to fetch pages.');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'An error occurred while saving pages.');
  }
};
