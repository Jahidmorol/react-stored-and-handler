import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
//   const cosmetics = [
//     { id: 1, name: "alta", price: 100 },
//     { id: 2, name: "palish", price: 200 },
//     { id: 3, name: "malish", price: 300 },
//     { id: 4, name: "balish", price: 400 },
//     { id: 5, name: "nalish", price: 500 },
//   ];
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
  return (
    <div>
      <h1>All is Well</h1>
      {cosmetics.map((cosmetic) => (
        <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
