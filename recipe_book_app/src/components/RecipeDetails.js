import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({recipes}) => {

   const { id } =  useParams();
   const recipe = recipes[id]; 
   
   return (
      <div>
         <h1>{recipe.title}</h1>
         <img src={recipe.img} alt={recipe.title} />
         <h3>Ingredients:</h3>
         <ul>
            {recipe.ingredients.map((ingredient, index) => (
               <li key={index}>{ingredient}</li>
            )) }
         </ul>
         <h3>Intructions:</h3>
         <p>{recipe.instructions}</p>
      </div>
   )
}

export default RecipeDetails;
