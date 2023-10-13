import { useEffect, useState } from "react"

function MostrarDatos() {
    const [lista, setLista] = useState([])
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [mostrarEditar, setMostrarEditar] = useState(false)
    const [id, setId] = useState(null)
    const [hola, setHola] = useState(false)

    useEffect(() => {


        if (localStorage.getItem('lista')) {
            const inicio = JSON.parse(localStorage.getItem("lista"));
            console.log(inicio)
            setLista(inicio)
        }
    }, [hola])

    const eliminarDato = (id) => {
        lista.splice(id, 1)
        console.log(lista)

        localStorage.setItem('lista', JSON.stringify(lista))

        if (hola) {
            setHola(false)
        } else {
            setHola(true)
        }

    }

    const editarDato = (index) => {
        localStorage.setItem('editar', index)
        
        window.location.reload()
    }

    return (
        <>

            <h2 className='text-2xl text-white text-center DashboardNombreUsuario' style={{marginBottom: 50 + 'px',}}> DATOS GUARDADOS</h2>

            <div className=''>
                <div className=' overflow-y-auto ' style={{ height: 440 + 'px' }}>
                    {
                        lista.map((object, index) => {

                            console.log(1)

                            return (
                                <>
                                    <div className=' flex my-2   justify-around items-center'>
                                        <div className=''>
                                            <h2 className='text-white text-xl font-serif'>
                                                {object.nombre}
                                            </h2>
                                            <p className="text-white font-serif">
                                                {object.descripcion}
                                            </p>
                                        </div>
                                        <div className=''>
                                            <button className='mx-10 ' onClick={() => editarDato(index)}>Editar</button>
                                            <button className='' onClick={() => eliminarDato(index)}>Eliminar</button>
                                        </div>
                                    </div>
                                    <hr className=''></hr>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default MostrarDatos