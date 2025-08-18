// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page → show all recipes */}
        <Route path="/" element={<RecipeList />} />

        {/* Recipe details page → show single recipe */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
