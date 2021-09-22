// Imported react libraries and hooks.
import React from "react";
// Imported components from React Bootstrap.
import { Container, Row } from "react-bootstrap";
// Imported icons from FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

/**
 * Created a footer for the application that displays text in a header format and a "Scroll to Top" button.
 * Created a function that, once the "Scroll to Top" button is clicked on, will scroll the page smoothly to the top.
 * @returns Footer with header text and a "Scroll to Top" button.
 */

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="footer">
      <Container>
        <Row>
          <h6>
            PROUDLY DEVELOPED USING
            <a
              href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faApple} />
              iTunes
            </a>
            SEARCH API.
          </h6>
          <div id="scrollcontainer">
            <FontAwesomeIcon
              icon={faAngleDoubleUp}
              onClick={scrollToTop}
              title="Scroll to Top"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

// Exported footer.js to App.js.
export default Footer;
