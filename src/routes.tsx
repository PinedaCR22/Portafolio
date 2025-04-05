import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

const Routess: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal (raíz) */}
        <Route index element={<Home />} />
        {/* Ruta 404 */}
        <Route
          path="*"
          element={
            <div className="text-center mt-10">
              <h1 className="text-2xl font-bold">404 - Página no encontrada</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Routess
