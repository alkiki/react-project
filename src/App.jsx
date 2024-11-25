import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ShowcasePage from "./pages/ShowcasePage";
import MainLayout from "./layouts/MainLayout";
import AddItemPage from "./pages/AddItemPage";
import ItemPage, { itemLoader } from "./pages/ItemPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [type, setType] = useState("all"); // Default state is "all"
  const [query, setQuery] = useState("");

  // Handle category changes
  const handleCategoryChange = (selectedType) => {
    setType(selectedType); // Update the selected category
  };

  // Handle search input
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery); // Update the search query
  };

  // Add a new item
  const addJob = async (newJob) => {
    try {
      await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Define routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/* Home Page */}
        <Route
          index
          element={
            <HomePage
              onCategoryChange={handleCategoryChange}
              onSearch={handleSearch}
              type={type}
              query={query}
            />
          }
        />

        {/* Showcase Page */}
        <Route path="/jobs" element={<ShowcasePage />} />

        {/* Profile Page */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Add Item Page */}
        <Route path="/add-job" element={<AddItemPage addJobSubmit={addJob} />} />

        {/* Item Details Page */}
        <Route
          path="/:type/:id"
          element={<ItemPage/>}
          loader={itemLoader}
        />

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  // Render the application
  return <RouterProvider router={router} />;
};

export default App;
