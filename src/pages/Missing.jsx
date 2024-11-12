import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Missing() {
  const [missingPersons, setMissingPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissingPersons = async () => {
      try {
        const response = await fetch(
          "https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=desc&poster_classification=missing"
        );
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setMissingPersons(data.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMissingPersons();
  }, []);

  if (loading) return <p>Loading missing persons...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="missing-page">
      <h1>FBI Missing Persons</h1>
      <div className="home-button">
        <nav>
          <Link to="/" style={{textDecoration:'none'}}>Home</Link>
        </nav>
      </div>
      <ul className="missing">
        {missingPersons
        .filter(person => person.reward_text && person.reward_text.trim() !== "")
        .map((person) => (
          <li key={person.uid} className="missing-cards">
            <h1>MISSING</h1>
            <h2>{person.title}</h2>
            {person.description && <p>{person.description}</p>}
            {person.images && person.images[0] && (
              <img
                src={person.images[0].original}
                alt={person.title}
                width="200"
              />
            )}
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

export default Missing;


