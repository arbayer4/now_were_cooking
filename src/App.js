import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Header from "./components/header/Header";
import Home from "./components/Home";
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

  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home recipes={recipes} />
      </Route>
      <Route exact path="/recipes">
        <ListRecipes recipes={recipes} />
      </Route>
      <Route path="/recipes/:id">
        <Recipe recipes={recipes} />
      </Route>
      <Route path="/new">
        <AddRecipe setToggleFetch={setToggleFetch} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
