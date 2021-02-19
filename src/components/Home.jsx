// import { useState } from "react";
import "./Home.css";

function Home(props) {
  // const recipe = props.recipes[0].fields;
  // console.log(recipe);
  const { title, description, photoURL } = props.recipes[0].fields;
  // console.log(props.recipes[0].fields);
  return (
    <div>
      <h1>Recipe of the Day:</h1>
      <div id="featured-recipes-container">
        <h1>{title}</h1>
        <img src={photoURL} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Home;
