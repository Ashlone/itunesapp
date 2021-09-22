// Imported react libraries.
import React from "react";
// Imported components from React Bootstrap.
import {
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  NavLink,
  NavItem,
} from "react-bootstrap";
// Imported useLocation from React Router Dom.
import { useLocation } from "react-router-dom";
// Imported icons from FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar } from "@fortawesome/free-solid-svg-icons";

/**
 * Created a navigation bar that is put together with the help of Bootstrap returning two navigation links.
 * Added a location variable using the useLocation() and created the isCurrentURL function to check whether the page is currently active and, if
 * so, to deactivate the navigation menu item from the dropdown, only showing the other page. Wrapped the dropdown items accordingly.
 * Added icons from Font Awesome.
 * @returns Navigation menu with two available paths.
 */

const Navigation = () => {
  const location = useLocation();

  const isCurrentURL = (url) => {
    return location.pathname.toLowerCase() === url.toLowerCase();
  };

  return (
    <div id="navcontainer">
      <Navbar>
        <Container>
          <Row>
            <Col>
              <Nav navbar>
                {!isCurrentURL("/") ? (
                  <NavItem>
                    <NavLink href="/">
                      <FontAwesomeIcon icon={faHome} title="Home" />
                      HOME
                    </NavLink>
                  </NavItem>
                ) : null}

                {!isCurrentURL("/favourites") ? (
                  <NavItem>
                    <NavLink href="/favourites">
                      <FontAwesomeIcon icon={faStar} title="Favourites" />
                      FAVOURITES
                    </NavLink>
                  </NavItem>
                ) : null}
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

// Exported navigation.js to header.js.
export default Navigation;
