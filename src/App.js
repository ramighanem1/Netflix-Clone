// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/FavList" element={<FavList />}></Route>
      </Routes>


    </>
  );
}

export default App;
