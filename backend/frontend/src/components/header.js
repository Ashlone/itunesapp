// Imported react libraries.
import React from "react";
// Imported components from React Bootstrap.
import { Container } from "react-bootstrap";
// Imported components.
import Navigation from "./navigation";

/**
 * Created a header for the application that includes a logo and also added the Navigation component.
 * @returns A header with a logo and navigation bar.
 */

const Header = () => {
  return (
    <div>
      <Container id="header" fluid>
        <div id="logocontainer">
          <img src="./images/logo.png" alt="Logo" id="logo" />
        </div>
        <Navigation id="navigation" />
      </Container>
    </div>
  );
};

// Exported header.js to App.js.
export default Header;
