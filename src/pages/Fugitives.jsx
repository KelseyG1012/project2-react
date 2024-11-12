import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Fugitives() {
  const [wantedPeople, setWantedPeople] = useState([]);

  useEffect(() => {
    const fetchWantedPeople = async () => {
      const response = await fetch(
        "https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=desc&poster_classification=ten"
      );
      const data = await response.json();
      setWantedPeople(data.items);
    };

    fetchWantedPeople();
  }, []);

  return (
    <div className="Top-Ten-page">
      <h1>FBI Most Wanted List</h1>
      <div className="home-button">
        <nav>
          <Link to="/" style={{textDecoration:'none'}}>Home</Link>
        </nav>
      </div>
      <ul className="Top-Ten">
        {wantedPeople.map((person) => (
          <li key={person.uid} className="Top-Ten-cards">
            <h1>WANTED</h1>
            <h2>{person.title}</h2>
            {/* Check if there are images before trying to access them */}
            {person.images && person.images[0] && (
              <img
                src={person.images[0].original}
                alt={person.title}
                width="200"
              />
            )}
            {/* Display the reward offering if it exists */}
            {person.reward_text && (
              <p>
                <strong>Reward: </strong>
                {person.reward_text}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fugitives;
