import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.description}</p>
          <Link to={`/recipe/${index}`}>View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;