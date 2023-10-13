import { useState } from "react"
import DashHome from "./components/DashHome"
import VerticalNav from "./components/VerticalNav"
import MostrarDatos from "./components/CRUDs/MostrarDatos"

function Dashboard() {

  const [mostrarDatos, setMostrarDatos] = useState(false)


  return (
    <>
      <div className="DashboardBody">
        <VerticalNav />

        <DashHome></DashHome>

        {(!mostrarDatos) ?

          <div onClick={() => setMostrarDatos(true)} className="absolute h-8 w-40 bottom-0 rounded-t-lg cursor-pointer" style={{ backgroundColor: '#364153', right: 650 + 'px' }}>
            <p className=" text-white text-center">Datos</p>
          </div>
          :
          <>
            <div onClick={() => window.location.reload() } className="absolute h-8 w-40 bottom-0 rounded-t-lg cursor-pointer" style={{ backgroundColor: '#364153', right: 650 + 'px', top: 150 + 'px' }}>
              <p className=" text-white text-center">Datos</p>
            </div>
            <div className=" absolute bottom-0 rounded-t-lg" style={{ backgroundColor: '#364153', right: 225 + 'px', width: 1000 + 'px', height: 560+ 'px'}}>
              <MostrarDatos/>
            </div>
          </>


        }

      </div >
    </>
  )
}

export default Dashboard