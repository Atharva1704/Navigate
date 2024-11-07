import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import TravelUpdate from './components/TravelUpdate';
import { useSelector } from 'react-redux';
import TravelList from './components/TravelList';

function App() {
  const token = useSelector((state) => state.token);
  const isAuth = Boolean(token && token !== '');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={isAuth ? <HomePage /> : <Navigate to="/" />}
        />
        {/* <Route
          path="/travel-list"
          element={isAuth ? <TravelList /> : <Navigate to="/" />}
        />
        <Route path="/travel/update/:id" element={isAuth ? <TravelUpdate /> : <Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
