import { useState } from "react";

function Home(props) {
  console.log();
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
