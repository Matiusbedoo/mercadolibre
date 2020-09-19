import React, { useState } from 'react'
import './../assets/css/SearchBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";




export default function Search({termino}) {

    const buscar= (e)=>{setstate(e.target.value)
    }

    const [state, setstate] = useState("")
    return (

        <div className="barraBusqueda">
            <input
                value= {state}
                onChange= {buscar}
                type="text"
                placeholder="Buscar producto..."
                className="textField"
                name="busqueda"
            />
            <button type="button" className="btnBuscar" onClick={()=>termino(state)}>
                {" "}
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>

    );

}