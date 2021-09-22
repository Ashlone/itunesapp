// Imported component to test.
import getFirstAlbumTitle from "./test";
// Imported Axios.
import axios from "axios";

/**
 * Created a mock test to test the Axios GET function.
 * Utilizing "jest.mock("axios");" so that Jest replaces the function in the axios module with an empty "mock" function.
 * Eliminated the default behavior, and replaced it with data listed in JSON format using .mockResolvedValue() function.
 * Expecting the returned title value to be equal to "My First Album".
 */

jest.mock("axios");

it("Returns the title of the first album.", async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: "My First Album",
      },
      {
        userId: 1,
        id: 2,
        title: "Album: The Sequel",
      },
    ],
  });

  const title = await getFirstAlbumTitle();
  expect(title).toEqual("My First Album");
});
