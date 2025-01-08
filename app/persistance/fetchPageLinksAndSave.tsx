import axios from 'axios';
import RNFS from 'react-native-fs'; // Import react-native-fs

// Function to download pages based on the list of specific links
const fetchSpecificPagesAndSave = async (pageLinks) => {
  try {
    // Loop through the provided page links and download the content of each
    for (let pageUrl of pageLinks) {
      try {
        // Fetch the individual page content
        const pageResponse = await axios.get(pageUrl);
        console.log(`Downloaded content of page: ${pageUrl}`);

        // Check if the response is valid HTML
        if (!pageResponse.data || typeof pageResponse.data !== 'string') {
          console.error(`Invalid or empty response for page: ${pageUrl}`);
          continue; // Skip to the next page in case of an invalid response
        }

        // Extract the slug (part of URL after domain)
        let slug = pageUrl.split('/').filter(Boolean).pop(); // Get the last part of the URL (slug)

        // Special case for the homepage
        if (pageUrl === 'https://delirium.hock.hu/') {
          slug = 'home';  // Assign a custom name for the homepage
        }

        // Sanitize the slug to make it a valid filename (allowing dashes)
        const sanitizedSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '_'); 

        // Construct the local file path
        const fileName = `page_${sanitizedSlug}.html`; // Use slug for the filename
        const localFilePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

        // Save the page content to a file (no modification to internal links)
        await RNFS.writeFile(localFilePath, pageResponse.data, 'utf8');
        console.log(`Page content saved to: ${localFilePath}`);
      } catch (pageError) {
        console.error(`Failed to download page ${pageUrl}:`, pageError.message);
      }
    }
  } catch (error) {
    console.error('Error processing pages:', error);
  }
};

// Example of how to call the function with specific links
const pageLinks = [
  'https://delirium.hock.hu/symptomer/',
  'https://delirium.hock.hu/screeningsvaerktojer',
  'https://delirium.hock.hu/arsagen',
  'https://delirium.hock.hu/kommunikation', 
  'https://delirium.hock.hu/handlinger', 
  'https://delirium.hock.hu/laes-mere', 
  'https://delirium.hock.hu/parorende'
];

// Call the function with the list of links
fetchSpecificPagesAndSave(pageLinks);

// Export the function to be used elsewhere
export default fetchSpecificPagesAndSave;
