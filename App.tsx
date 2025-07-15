import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import LoadingScreen from "../src/LoadingScreen/LoadingScreen";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (err) {
        console.error("Ошибка:", err);
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route element={<Layout onOpenModal={openModal} />} path="/">
          <Route
            element={
              <Home
                isModalOpen={isModalOpen}
                onCloseModal={closeModal}
                onOpenModal={handleOpenModal}
              />
            }
            index
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
