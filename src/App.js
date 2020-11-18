/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import Recipe from './Recipe.js';
import './App.css';
import dstyle from './dark.module.css';
import lstyle from './light.module.css';

const App = () => {

  const APP_ID = "1ba17caa";
  const APP_KEY = "54011f1a74ecf1bdf523405a0d100715";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("chicken");

  const [isDark, setDark] = useState(false);

  

  useEffect(() => {
    console.log("useEffect has been run!")
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getQuery = e => {
    e.preventDefault();
    setQuery(search);
  }

  const changeDark = () => {
    setDark(!isDark);
    console.log("is Dark? " + !isDark);
  }

  
  return(
    <div className={isDark ? lstyle.App :dstyle.App}>
      <form className="search-form" onSubmit={getQuery}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
        
      </form>
      <div className="themeDiv">
      <button onClick={() => {
          changeDark();
        }} className="themeButton">Change theme</button>
      
      </div>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe link={recipe.recipe.url} title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.dietLabels}/>
      ))}
      </div>
      
    </div>
  )
}
export default App;
