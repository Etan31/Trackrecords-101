import React from 'react';

const FavoriteRecipes = ({favorites}) => {
   return ( 
      <div>
         <h2>Your Favorite Recipes</h2>
         {favorites.map((recipe, index) => (
            <div key={index}>
               <h2>{recipe.title}</h2>
               <img src={recipe.image} alt={recipe.title} />
               <p>{recipe.description}</p>
            </div>
         ))}
      </div>
   );
}
 
export default FavoriteRecipes;