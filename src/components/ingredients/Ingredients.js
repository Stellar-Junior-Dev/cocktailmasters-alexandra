import "./ingredients.css";
export function Ingredient({ ingredients }) {
  return (
    <div className="ingredients-container">
      <div className="ingredients-title">
        <h1>INGREDIENTS</h1>
      </div>
      <div className="ingredients-card-container">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredients-card">
            <img className="ingredients-image" src={ingredient.image} />
            <p className="ingredients-text">
              {ingredient.measure} {ingredient.ingredient}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
