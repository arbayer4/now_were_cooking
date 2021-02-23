import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Header from "./components/header/Header";
import Home from "./components/Home";
// import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import ListRecipes from "./components/ListRecipes";
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

  async function deleteRecipes() {
    const remove = async (id) => {
      const recipeURl = `${baseURL}/${id}`;

      await axios.delete(recipeURl, config);
    };
    for (let i = 0; i < recipes.length; i++) {
      if (!recipes[i].fields.title) {
        remove(recipes[i].id);
      } else {
        console.log(recipes[i].fields.title);
      }
    }
    // setToggleFetch(!toggleFetch);
  }
  deleteRecipes();
  console.log(recipes);
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
        <ListRecipes recipes={recipes} />
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
