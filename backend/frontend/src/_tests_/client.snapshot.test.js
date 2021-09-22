// Imported React libraries.
import React from "react";
// Imported App.js for testing.
import App from "../App";
// Imported react-test-renderer for rendering snapshots.
import renderer from "react-test-renderer";

/**
 * Created and described the test being performed. Constructed a tree variable, storing the JSON that (represents the
 * DOM tree that is created when the component we are testing is rendered). Created the App component via the create() method and serialized
 * into JSON objects.
 */

test("Renders without crashing?", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
