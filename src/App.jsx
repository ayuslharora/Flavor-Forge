import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Favorites from './components/ Favorites'
import RecipeAI from './components/RecipeAI'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './components/Category'
import SearchByCategory from './components/SearchByCategory'
import Region from './components/Region'
import SearchByRegion from './components/SearchByRegion'
import Ingridents from './components/Ingridents'
import SearchByIngrident from './components/SearchByIngrident'
import Search from './components/Search'

function App() {

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Random" element={<RecipeAI random={true} />} />
        <Route path="/Recipe/:id" element={<RecipeAI random={false} />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Category/:category" element={<SearchByCategory />} />
        <Route path="/Region" element={<Region />} />
        <Route path="/Region/:region" element={<SearchByRegion />} />
        <Route path="/Ingridents" element={<Ingridents />} />
        <Route path="/Ingridents/:ingrident" element={<SearchByIngrident />} />
        <Route path="/Search/:search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
