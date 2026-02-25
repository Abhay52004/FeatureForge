import { useState } from 'react';
import axios from 'axios';

function RecipesComponent() {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');

  const fetchRecipes = async (searchQuery) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      setMeals(response.data.meals || []);
      setError('');
    } catch {
      setError('Failed to fetch recipes');
      setMeals([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchRecipes(query);
    }
  };

  return (
    <div className="container mt-4 recipes-section">
      <h1>Recipes</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search recipes by name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {meals.map(meal => (
          <div key={meal.idMeal} className="col-md-6 mb-4">
            <div className="card">
              <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <p className="card-text"><strong>Category:</strong> {meal.strCategory}</p>
                <p className="card-text"><strong>Instructions:</strong> {meal.strInstructions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipesComponent;