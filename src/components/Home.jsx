// import { useState } from "react";

function Home(props) {
  const recipes = [props.recipes[0], props.recipes[1], props.recipes[2]];
  return (
    <div>
      <img
        src={props.recipes[1].fields.photo}
        alt={props.recipes[1].fields.title}
      />
    </div>
  );
}

export default Home;
