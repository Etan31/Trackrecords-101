import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipe = ({ addRecipe }) => {
  const navigate = useNavigate(); // Define the navigate variable
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !image || !description || !ingredients || !instructions) {
      alert('Please fill out all fields');
      return;
    }

    const newRecipe = {
      title,
      image: URL.createObjectURL(image), // Create a URL for the uploaded image
      description,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()), // convert to array
      instructions,
    };

    addRecipe(newRecipe); // Add the new recipe to the list
    alert('Recipe added successfully!');
    console.log('Recipe added:', newRecipe);
    navigate('/'); // Redirect to home page
    // Clear form fields after submission
    setTitle('');
    setImage(null);
    setDescription('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} required /> {/* Update input type to file */}
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients (comma separated)" required />
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" required />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;