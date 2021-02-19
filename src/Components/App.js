import React, { useEffect,useState } from 'react';
import './App.css';
import Recipe from  './Recipes';

const App = () => {

  const APP_ID = 'a2a47a63';
  const APP_KEY = '53caf516af9df9a5ef0f7df73bc9b6e7';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <header className="main-header">
        <div>
          <h1><span className="letter">R</span>ecipe-<span className="letter">A</span>pp</h1>
        </div>
      </header>
      <div className="container">
        <form className="form-container" onSubmit={getSearch}>
          <input type="text" value={search} onChange={updateSearch}/>
          <button className="btn" type="submit" >Get Recipe</button>
        </form>
        {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                totalWeight={recipe.recipe.totalWeight}/>        
      ))}
      </div>
    </div> 
  );
};
 
export default App;
