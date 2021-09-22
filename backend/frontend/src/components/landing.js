// Imported react libraries.
import React from "react";
// Imported components from React Bootstrap.
import { Container } from "react-bootstrap";
// Imported components.
import Search from "./search";

/**
 * Created a landing page and included the Search component.
 * @returns A landing page with a search component.
 */

const Landing = () => {
  return (
    <Container>
      <Search />
    </Container>
  );
};

// Exported landing.js to App.js.
export default Landing;
