import React from "react";
import IngredientsList from "../components/IngredientsList";
import ClaudeRecipe from "../components/ClaudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "Chicken breasts",
    "Most of the main spices",
    "Olive oil",
    "Heavy cream",
    "Chicken broth",
    "Parmesan cheese",
    "Spinach",
  ]);

  const recipeSection = React.useRef(null);
  React.useEffect(() => {
    if (recipeSection !== null) {
      // recipeSection.current.scrollIntoView();
      const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
    }
  }, []);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const toggleRecipeShown = () => {
    setRecipeShown((prevShown) => !prevShown);
  };

  const addIngredient = (event) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    formEl.reset();
  };

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          recipeSection={recipeSection}
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
