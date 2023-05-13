import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((result) => {
        setBeer(result.data);
      });

  });

  if (!beer) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>Tagline: {beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed By: {beer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;