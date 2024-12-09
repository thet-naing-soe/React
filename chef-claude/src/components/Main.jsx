import { useState } from "react";
export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
    // ingredients.push(newIngredient);,
    //
    //
    // console.log(ingredients);
  };
  return (
    <main>
      <form onSubmit={handleSubmit} action="" className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-level="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
