import './UseState.css'
import React, { useContext, useState } from "react"

import { AppContexto } from '../../data/Store'

const UseState = props => {

    const {contextoNome, setContextoNome} = useContext(AppContexto)

    const [ nome, setNome ] = useState("")
    const [ sobrenome, setSobrenome ] = useState("")
    const [ mensagem, setMensagem ] = useState("")

    function alterarNomeContexto(nome){
        setContextoNome(nome)
    }

    return (
        <div>
            <div className="titulo">
                <h1>Junji Ito:</h1>
                <h2>O mestre do terror psicológico nos mangás:</h2>
            </div>

            
                
                

            </div>
    )
}
export default UseState