// Function to fetch and log the page links
const fetchPageLinks = async () => {
    try {
      // Send a GET request to the WordPress REST API
      const response = await fetch('https://delirium.hock.hu/wp-json/wp/v2/pages');
      
      // Check if the response is successful (status 200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the response JSON
      const data = await response.json();
  
      // Loop through the pages and log their links
      data.forEach(page => {
        console.log(page.link);  // Each page's link
      });
  
    } catch (error) {
      console.error('Error fetching pages:', error);
    }
  };
  
  // Export the function so it can be used elsewhere
  export default fetchPageLinks;
  