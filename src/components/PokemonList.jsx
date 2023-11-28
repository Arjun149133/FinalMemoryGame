// PokemonList.js

import React, { useState, useEffect, } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import Loading from "./Loading";

const PokemonList = ({ gameLevel, setQuitPage, memory, setMemory, setScore }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);

  let finalPoint = 6;
  if (gameLevel === "easy") {
    finalPoint = 4;
  } else if (gameLevel === "medium") {
    finalPoint = 5;
  } else {
    finalPoint = 7;
  }

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once on mount

  const fetchData = async () => {
    try {
      //setLoading(true);
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=25"
      ); // Limiting to 10 for simplicity
      const results = response.data.results;

      // Fetch details for each Pokemon
      const pokemonDetailsPromises = results.map(async (pokemon) => {
        const detailResponse = await axios.get(pokemon.url);
        return {
          name: pokemon.name,
          image: detailResponse.data.sprites.front_default,
        };
      });

      // Wait for all details to be fetched before updating state
      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      const shuffledData = shuffleArray(pokemonDetails);
      const finalData = shuffledData.slice(0, finalPoint);
      setPokemonData(finalData);
      //setLoading(false);
    } catch (error) {
      //setLoading(false);
      console.error("Error fetching Pokemon data:", error);
    }
  };

  const handleClick = (key) => {
    if (memory.includes(key)) {
      setQuitPage(true);
      setMemory([]);
      fetchData()
    } else {
      setMemory([...memory, key]);
      setScore(memory.length + 1)
      fetchData();
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className=" h-max flex justify-center items-center">
        <div>
          <ul className=" flex flex-wrap justify-center space-x-3 ">
            <div className="flex flex-wrap justify-center space-x-5">
              {pokemonData.map((pokemon) => (
                <li key={pokemon.name}>
                  <PokemonCard
                    name={pokemon.name}
                    image={pokemon.image}
                    onclick={handleClick}
                  />
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    );
  }
};

export default PokemonList;
