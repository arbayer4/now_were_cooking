import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Header from "./components/header/Header";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getRecipes = async () => {
      const resp = await axios.get(baseURL, config);
      setRecipes(resp.data.records);
    };
    getRecipes();
  }, [toggleFetch]);
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        {recipes.length ? (
          <Home recipes={recipes} />
        ) : (
          <h3>Recipe Data Unavailable</h3>
        )}
      </Route>
      <Route exact path="/recipes">
        <div className="recipes-container">
          {recipes.map((recipe) => (
            <Recipes key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </Route>
      <Route path="/recipes/:id">
        {recipes.length ? (
          <Recipe recipes={recipes} />
        ) : (
          <div>
            <h3>Uh oh... Recipe not found!</h3>
            <p>Please try again later.</p>
          </div>
        )}
      </Route>
      <Route path="/new">
        <AddRecipe setToggleFetch={setToggleFetch} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
