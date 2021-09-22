// Imported Axios.
import axios from "axios";

/**
 * Created a mock function for testing to get the first album's title from the API using Axios.
 * @returns First album's title from the API.
 */

async function getFirstAlbumTitle() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return response.data[0].title;
}

// Exported test.js to client.axios.test.js.
export default getFirstAlbumTitle;
