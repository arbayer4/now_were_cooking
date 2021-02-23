import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  //Starting with just generating a random recipe. Eventually would like to write a
  //function to choose a recipe based on day. Example Taco Tuesday, Meatless Monday, etc

  if (props.recipes.length) {
    const random = Math.floor(Math.random() * props.recipes.length);
    const featured = props.recipes[random];
    const { title, description, photoURL } = featured.fields;
    return (
      <div className="home-container">
        <h1>Recipe of the Day:</h1>
        <Link to={`/recipes/${featured.id}`}>
          <div
            style={{ backgroundImage: `url(${photoURL})` }}
            id="featured-recipes-container"
          >
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    );
  } else {
    return <h3>Recipe Data Unavailable</h3>;
  }
}

export default Home;
