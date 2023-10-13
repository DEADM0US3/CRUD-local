import '../index.css'
import CrudSinApi from './CRUDs/CrudSinApi'
import EditarDato from './CRUDs/EditarDato'

function DashHome() {
    return (
        <>
            <div className="DashboardContent">
                <h2 className="DashboardNombreUsuario">USUARIO</h2>
                <div className="w-1/2">
                    {(localStorage.getItem('editar'))? 
                    <EditarDato/>
                    :
                    <CrudSinApi/>
                    }
                </div>

            </div>

        </>
    )
}

export default DashHome