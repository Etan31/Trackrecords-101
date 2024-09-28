// App.js
import React, { useState } from 'react';
import { useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './../components/RecipeList';
import RecipeDetails from './../components/RecipeDetails';
import AddRecipe from './../components/AddRecipe';
import SearchBar from './../components/SearchBar';
import FavoriteRecipes from './../components/FavoriteRecipes';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [recipes, searchQuery]);


  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/favorites">Favorite Recipes</Link>
      </nav>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Routes>
        <Route
          path="/"
          element={<RecipeList recipes={filteredRecipes} />}
        />
        <Route
          path="/recipe/:id"
          element={<RecipeDetails recipes={recipes} />}
        />
        <Route
          path="/add-recipe"
          element={<AddRecipe addRecipe={addRecipe} />}
        />
        <Route
          path="/favorites"
          element={<FavoriteRecipes favorites={favorites} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
