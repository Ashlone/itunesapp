// Imported react libraries and hooks.
import React, { useState, useEffect } from "react";
// Imported Axios.
import axios from "axios";
// Imported Link from React Router Dom.
import { Link } from "react-router-dom";
// Imported components from React Bootstrap.
import { Row, Dropdown, ButtonGroup, DropdownButton } from "react-bootstrap";
// Imported icons from FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// Imported components.
import Results from "./results.js";
// Imported Swal from sweetalert2.
import Swal from "sweetalert2";

const Search = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("allTrack");
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (favourite) => {
    setFavourites([...favourites, favourite]);
    Swal.fire({
      background: "#252525",
      width: 400,
      icon: "success",
      iconColor: "#2b8492",
      title: "Added to Favourites",
      confirmButtonColor: "#303030",
    });
  };

  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(favourites));
  }, [favourites]);

  let nameEntry = "";
  const nameSubmit = (e) => {
    const entry = e.target.value;
    nameEntry = entry;
    setName(nameEntry);
  };

  const categories = {
    CATEGORIES: "allTrack",
    MUSIC: "song",
    "MUSIC VIDEOS": "musicVideo",
    APPS: "software",
    EBOOKS: "ebook",
    "AUDIO BOOKS": "audiobook",
    PODCASTS: "podcast",
    MOVIES: "movie",
    "TV SHOWS": "tvSeason",
    "SHORT FILMS": "shortFilm",
  };

  const submitSearch = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:5000/api?name=${name}&type=${type}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const queryAdded = res.data.results;
        setResults(queryAdded ? queryAdded : []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="searchcontainer">
      <div id="searchcontent">
        <div id="searchinput">
          <input
            type="text"
            placeholder="Search..."
            name="name"
            onChange={(e) => nameSubmit(e)}
          />
          <Link to={`/search`}>
            <button
              id="searchbutton"
              type="submit"
              onClick={(e) => submitSearch(e)}
            >
              <FontAwesomeIcon icon={faSearch} title="Search" />
            </button>
          </Link>
        </div>

        <DropdownButton
          as={ButtonGroup}
          variant="info"
          id="dropdown-basic"
          drop="right"
          title="CATEGORIES"
          size="md"
        >
          {Object.keys(categories).map((category, i) => (
            <Dropdown.Item
              as="button"
              key={i}
              type="submit"
              name="category"
              title="Categories"
              id="searchcategories"
              value={category.value}
              active={type === category.value}
              onClick={(e) => setType(categories[category])}
            >
              {category}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>

      <div className="search-page">
        <div className="container-fluid">
          <Row md={4}>
            {results.length !== 0 ? (
              results.map((content, i) => (
                <Results
                  key={i}
                  addFavourite={addFavourite}
                  content={content}
                />
              ))
            ) : (
              <div></div>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

// Exported search.js to landing.js.
export default Search;
