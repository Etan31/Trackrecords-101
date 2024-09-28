import react from 'React';
import { Link } from 'react-router-dom';

const RecipeList = ({recipes}) => {
   <div>
      {/* <div className="card-list">
         <h1 className="recipeName">Classic Milk Tea</h1>
         <p>Ingredients:</p>
         <ul>
            <li>2 tsp black tea leaves</li>
            <li>1/2 cup hot water</li>
            <li>1/2 cup milk</li>
            <li>1 tbsp sugar</li>
            <li>Ice cubes</li>
         </ul>
         <p>Instructions:</p>
         <p>Brew the black tea in hot water for 5 minutes, strain, and mix with milk and sugar. Serve with ice cubes.</p>
      </div>
      <div className="card-list">
         <h1 className="recipeName">Taro Milk Tea</h1>
         <p>Ingredients:</p>
         <ul>
            <li>2 tbsp taro powder</li>
            <li>1/2 cup milk</li>
            <li>1/2 cup brewed black tea</li>
            <li>1 tbsp sugar</li>
            <li>Ice cubes</li>
         </ul>
         <p>Instructions:</p>
         <p>Mix taro powder with brewed tea, add milk and sugar, then serve over ice.</p>
      </div>
      <div className="card-list">
         <h1 className="recipeName">Thai Milk Tea</h1>
         <p>Ingredients:</p>
         <ul>
            <li>2 tbsp Thai tea mix</li>
            <li>1/2 cup hot water</li>
            <li>1/2 cup condensed milk</li>
            <li>Ice cubes</li>
         </ul>
         <p>Instructions:</p>
         <p>Brew the Thai tea mix in hot water for 5 minutes, strain, then mix with condensed milk. Serve over ice.</p>
      </div>
      <div className="card-list">
         <h1 className="recipeName">Matcha Milk Tea</h1>
         <p>Ingredients:</p>
         <ul>
            <li>1 tsp matcha powder</li>
            <li>1/2 cup hot water</li>
            <li>1/2 cup milk</li>
            <li>1 tbsp honey</li>
            <li>Ice cubes</li>
         </ul>
         <p>Instructions:</p>
         <p>Mix matcha powder with hot water until dissolved, then stir in milk and honey. Serve over ice.</p>
      </div> */}

         {recipes.map((recipe, index) => (
            <div key={index}>
               <h2>{recipe.title}</h2>
               <img src={recipe.img} alt={recipe.title} />
               <p>{recipe.description}</p>
               <Link to={`/recipe/${recipe}`}>View Recipe</Link>
            </div>
         ))}
   </div>
}

export default RecipeList;