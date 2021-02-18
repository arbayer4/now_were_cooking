// import { useState } from "react";
import "./Home.css";

function Home(props) {
  const recipes = [props.recipes[0], props.recipes[1], props.recipes[2]];
  console.log(recipes);
  return (
    <div id="featured-recipes-container">
      <div className="best">
        <img src={recipes[0].fields.photo} alt="recipes[0].fields.title" />
      </div>
      <div className="better">Better</div>
      <div className="good">Good</div>
    </div>
  );
}

export default Home;
