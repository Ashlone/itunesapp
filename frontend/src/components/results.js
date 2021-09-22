// Imported react libraries.
import React from "react";
// Imported components from React Bootstrap.
import { Button, Card, Col } from "react-bootstrap";
// Imported icons from FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

/**
 * @styles Set left, right and bottom margins of cards. Also set for the images to display at the top of the cards.
 * @param {*} props artworkUrl100 (image), trackName (media title), artistName (artist name), previewUrl (audio preview - added controls),
 * trackViewUrl (apple page - more info).
 * @returns Results from search query with props' requested data presented using React Bootstrap's Cards.
 */

const Results = (props) => {
  return (
    <div id="resultcontainer">
      <Col>
        <Card className="mb-5 ml-2 mr-2">
          <Card.Img
            variant="top"
            src={props.content.artworkUrl100.replace("100x100", "250x250")}
          />
          <Card.Body>
            <Card.Title>{props.content.trackName}</Card.Title>
            <Card.Text>{props.content.artistName}</Card.Text>
          </Card.Body>
          <Card.Footer>
            {props.content.previewUrl && (
              <button id="previewbutton">
                {" "}
                <audio
                  controls
                  src={props.content.previewUrl}
                  type="audio/mp4"
                ></audio>
              </button>
            )}
            <Button
              className="cardfuncbutton"
              id="addfavbutton"
              onClick={() => props.addFavourite(props.content)}
            >
              <FontAwesomeIcon icon={faStar} title="Add to Favourites" />
              ADD FAV
            </Button>
            {props.content.trackViewUrl && (
              <a
                rel="noopener noreferrer"
                href={props.content.trackViewUrl}
                target="_blank"
              >
                {" "}
                <Button className="cardfuncbutton infobutton" title="More Info">
                  <FontAwesomeIcon icon={faApple} title="More Info" />
                  MORE INFO
                </Button>{" "}
              </a>
            )}
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

// Exported resultlist.js to search.js.
export default Results;
