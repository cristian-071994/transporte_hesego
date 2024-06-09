import './App.css'

function App() {
  

  return (
    <div className="h-screen flex">
      <div className="w-1/2 bg-blue-200 p-4">
        <h2 className="text-xl font-bold">Vehículos Activos</h2>
        {/* Contenido de Vehículos Activos */}
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="h-3/5 bg-green-200 p-4">
          <h2 className="text-xl font-bold">Vehículos en Taller</h2>
          {/* Contenido de Vehículos en Taller */}
        </div>
        <div className="h-2/5 bg-yellow-200 p-4">
          <h2 className="text-xl font-bold">Vehículos Back Up</h2>
          {/* Contenido de Vehículos Back Up */}
        </div>
      </div>
    </div>
  )
}

export default App
