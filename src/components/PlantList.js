import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect((plants)=>{
    fetch('http://localhost:6001/plants')
    .then((r)=>r.json())
    .then((plants)=>{
      setPlants(plants);
    })
  }, []);

const plantCards = plants.map((plant)=>{
  const {id, name, image, price} = plant;
  return(
    <PlantCard key={id} id={id} name={name} image={image} price={price} />
  )
});

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
