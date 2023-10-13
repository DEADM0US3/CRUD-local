import { useEffect, useState } from "react"

function EditarDato() {

    const [lista, setLista] = useState([])
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [mostrarEditar, setMostrarEditar] = useState({})
    const [id, setId] = useState(null)

    useEffect(() => {

        const inicio = JSON.parse(localStorage.getItem("lista"));
        console.log(inicio)
        setLista(inicio)

        setDescripcion(inicio[localStorage.getItem('editar')].descripcion)
        console.log(descripcion)
        setNombre(inicio[localStorage.getItem('editar')].nombre)
        console.log(nombre)

    }, [])





    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(nombre, descripcion)

        if (nombre == '' && descripcion == '') {

        } else {
            lista.splice(localStorage.getItem('editar'), 1, {
                nombre: nombre,
                descripcion: descripcion
            })

            console.log(lista)

            localStorage.setItem('lista', JSON.stringify(lista))

            localStorage.removeItem('editar')
            window.location.reload()

        }

    }



    return (
        <>
            <form className=" grid my-10 w-full" onSubmit={handleSubmit} >

                <div className=" bg-white rounded-md border-4 h-10 flex items-center my-2 border-black">
                    <label htmlFor="nombre" className="mr-16 ml-2">Nombre</label>
                    <input
                        id="nombre"
                        className="w-full h-full"
                        type="text"
                        value={nombre}
                        placeholder="Nombre de Usuario"
                        onChange={(e) => { setNombre(e.target.value) }}
                    />
                </div>

                <div className=" bg-white rounded-md border-4 h-10 flex items-start my-2 border-black">
                    <label htmlFor="descripcion" className="mr-10 ml-2">Descripcion</label>
                    <input
                        id="descripcion"
                        value={descripcion}
                        className=" w-full h-full"
                        type=''
                        placeholder="Ingrese la descripcion"
                        onChange={(e) => { setDescripcion(e.target.value) }}
                    />
                </div>

                <input
                    type="submit"
                    className=" border-2 border-white rounded-sm justify-self-center w-1/2 text-white cursor-pointer"
                    value="Editar Dato"
                    onSubmit={handleSubmit}
                />

            </form>

        </>
    )
}


export default EditarDato