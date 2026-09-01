# Delirium

A Danish-language reference and screening app for delirium care, built for and with
nurses at VIA University College. It serves two audiences from one home screen:
healthcare professionals, who need the screening tools and clinical material, and
relatives, who need plain-language information about what delirium is and what to
expect.

The prototype was presented at the International Council of Nurses 2025 conference.

## How it is put together

The content lives in a WordPress site at **[delirium.hock.hu](https://delirium.hock.hu/)**,
which is not part of this repository — it is public, so the material this app presents
can be read there directly. This app is the mobile shell around it: native navigation
and native screens for the structure, and a `WebView` for the content pages themselves.
That split let the nurses edit their own material in WordPress without anyone shipping a
new build.

## Working without a connection

The app is meant to be used on hospital wards, where staff cannot rely on having
signal. Rather than failing when offline, it keeps a local copy of the content.

**On launch**, if the device is online, it downloads the eight content pages over HTTP
and writes each one to the app's document directory as `page_<slug>.html`, overwriting
whatever was there. The cache is always the most recent successful fetch.

**When a page is opened**, `webPage.tsx` asks `NetInfo` whether there is a connection.
If there is, the `WebView` loads the live URL. If there isn't, it derives the same
`page_<slug>.html` name from the URL it was asked for, checks whether that file exists,
and loads it from `file://` instead.

The two halves agree on the filename by applying the same transformation to the URL —
take the last path segment, replace anything outside `[a-zA-Z0-9-_]` with an underscore.
That shared rule is the entire contract between the writer and the reader.

If a page is requested offline and was never cached, the user gets an explicit message
and a retry button rather than a blank screen or a stalled spinner. `WebView` load
failures and HTTP errors are surfaced the same way, with the status code included.

The Android hardware back button is wired to the `WebView`'s own history first, so it
walks back through pages before it leaves the screen.

## Structure

```
app/
  index.tsx               Entry point; refreshes the cache on launch
  persistance/            checkConnectivity, fetchPageLinksAndSave
components/
  navigation/             Stack navigator
  screens/                main, about, webPage, and the topic screens
                          (symptomer, arsagen, handlinger, kommunikation,
                          screeningsvaerktojer, differentialdiagnoser,
                          deliriumvaerktojet, laesMere, parorende)
  Button.tsx              Shared button
constants/                Colours and theming
```

## Stack

Expo 51 with `expo-router` as the entry point, React Native 0.74 and TypeScript.
Navigation is React Navigation's native stack. Offline support uses
`@react-native-community/netinfo` for connectivity, `react-native-fs` for the document
directory, and `axios` to fetch the pages. Builds are configured for EAS.

## Running it

```bash
npm install
npx expo start
```

The app depends on native modules — `react-native-webview` and `react-native-fs` —
so it needs a development build rather than Expo Go. `expo-dev-client` is included for
that reason.

```bash
npx expo run:android
```
