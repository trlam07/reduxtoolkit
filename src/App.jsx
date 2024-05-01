import './App.css'
import ProductDetail from './components/productDetail'
import ProductList from './components/productList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/:id" element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
