// Imported react libraries and hooks.
import React, { useState, useEffect } from "react";
// Imported components from React Bootstrap.
import { Card, Col, Row, Button } from "react-bootstrap";
// Imported icons from FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// Imported Swal from sweetalert2.
import Swal from "sweetalert2";

/**
 * Created a function to display the added favourite items.
 * Created a function to remove favourite items. Parsing the data from local storage, filtering through the data via the id , stringifying the
 * data back to local storage and reloading the page. Added this to the onClick() function of the "Delete" button. A modal (Sweetalert2 -
 * Swal.fire) will appear to confirm deletion of a favourite.
 * Set the initial state of the favourites that will be displayed. Utiizing the useEffect() hook to parse the data from local storage and to
 * display the favourite items. Used the map() method to iterate over the data and to return the relevant items.
 * Returning the following: artworkUrl100 (image), trackName (media title), artistName (artist name), previewUrl (audio preview - added
 * controls), trackViewUrl (apple page - more info).
 * @styles Set for four columns of cards to display. Set the left, right and bottom margins of cards. Also set for the images to display at the
 * top of the cards.
 * @returns Added favourite content with props' requested data presented using React Bootstrap's Cards.
 */

const Favourites = () => {
  const removeItem = (id) => {
    const favourites = JSON.parse(localStorage.getItem("Favourites"));

    const filteredFavourites = favourites.filter((x) => x.trackId !== id);
    localStorage.setItem("Favourites", JSON.stringify(filteredFavourites));
    Swal.fire({
      background: "#252525",
      width: 400,
      icon: "error",
      iconColor: "#ff5e50",
      title: "Removed Successfully",
      confirmButtonColor: "#303030",
    }).then(function () {
      window.location.reload();
    });
  };

  const [showFavourites, setShowFavourites] = useState([]);

  useEffect(() => {
    setShowFavourites(JSON.parse(localStorage.getItem("Favourites")));
  }, []);

  return (
    <div id="favouritecontainer">
      <div>
        <header>
          <h3>Your Favourites:</h3>
        </header>
        <div id="favouritelist">
          <Row md={4}>
            {showFavourites.map((content) => (
              <Col>
                <Card className="mb-5 ml-2 mr-2">
                  <Card.Img
                    variant="top"
                    src={content.artworkUrl100.replace("100x100", "250x250")}
                  />
                  <Card.Body>
                    <Card.Title>{content.trackName}</Card.Title>
                    {content.artistName && (
                      <Card.Text>{content.artistName}</Card.Text>
                    )}
                  </Card.Body>
                  <Card.Footer>
                    {content.previewUrl && (
                      <button id="previewbutton">
                        {" "}
                        <audio
                          controls
                          src={content.previewUrl}
                          type="audio/mp4"
                        ></audio>
                      </button>
                    )}
                    <Button
                      id="deletebutton"
                      className="cardfuncbutton"
                      onClick={() => removeItem(content.trackId)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} title="Delete" />
                      DELETE
                    </Button>
                    {content.trackViewUrl && (
                      <a
                        rel="noopener noreferrer"
                        href={content.trackViewUrl}
                        target="_blank"
                      >
                        {" "}
                        <Button className="cardfuncbutton infobutton">
                          <FontAwesomeIcon icon={faApple} title="More Info" />
                          MORE INFO
                        </Button>{" "}
                      </a>
                    )}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

// Exported favourites.js to landing.js.
export default Favourites;
