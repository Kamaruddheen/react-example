import { Suspense, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes, categories } from "./config/routes";
import CategoryLink from "./Components/CategoryLink";
import HomeButton from "./Components/Main/HomeButton";

// Basics Concepts
import Welcome from "./Components/Basics/Welcome";
import Counter from "./Components/Basics/Counter";
import CounterHooks from "./Components/Basics/CounterHooks";
import InputBox from "./Components/Basics/Input/InputBox";

// Advanced Concepts
import BorderWrapper from "./Components/Basics/BorderWrapper";

// Practice Projects
import Calculator from "./Components/Examples/Calculator/Calculator";
import AdvancedCalculator from "./Components/Examples/AdvancedCalculator/AdvancedCalculator";
import RandomQuoteGenerator from "./Components/Examples/RandomQuoteGenerator/RandomQuoteGenerator";
import TipCalculator from "./Components/Examples/TipCalculator/TipCalculator";
import ExpenseTracker from "./Components/Examples/ExpenseTracker/ExpenseTracker";
import Flashcards from "./Components/Examples/Flashcards/Flashcards";
import PhotoGallery from "./Components/Examples/PhotoGallery/PhotoGallery";

function App() {
  const memoizedCategories = useMemo(() => {
    return Object.entries(categories).map(([categoryKey, category]) => (
      <div key={categoryKey} className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {category.name}
        </h2>
        <nav className="mb-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes
              .filter((route) => route.category === categoryKey)
              .map((route) => (
                <li key={route.path}>
                  <CategoryLink
                    to={route.path}
                    title={route.title}
                    description={route.description}
                    color={category.color}
                  />
                </li>
              ))}
          </ul>
        </nav>
      </div>
    ));
  }, []);

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="min-h-screen bg-gray-100">
        <HomeButton />
        <Routes>
          <Route
            path="/"
            element={
              // Home page with categories and links
              <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                  React Example
                </h1>

                {/* Categories Section */}
                {memoizedCategories}
              </div>
            }
          />

          {/* Other routes will take full window */}
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <div className="min-h-screen bg-gray-100 p-8">
                    {getRouteElement(route.path)}
                  </div>
                </Suspense>
              }
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Helper function to return the correct element based on route
function getRouteElement(path) {
  const routeMap = {
    "/props": <Welcome program="Data Science" name="Max" />,
    "/hoc": (
      <BorderWrapper color="red">
        <Welcome program="Data Science" name="Max" />
      </BorderWrapper>
    ),
    "/state-class-components": <Counter />,
    "/hooks": <CounterHooks />,
    "/searching": <InputBox />,
    "/calculator": <Calculator />,
    "/advanced-calculator": <AdvancedCalculator />,
    "/random-quote": <RandomQuoteGenerator />,
    "/tip-calculator": <TipCalculator />,
    "/expense-tracker": <ExpenseTracker />,
    "/flashcards": <Flashcards />,
    "/photo-gallery": <PhotoGallery />,
  };
  return routeMap[path] || null;
}

export default App;
