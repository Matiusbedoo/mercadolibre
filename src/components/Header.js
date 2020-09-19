import React from 'react'
import './../assets/css/Header.css'
import logo from './../assets/images/Mercado Libre.png'

export default function Header() {

    return (

        <div className="header">

            <img src={logo} className="logo" alt="" />
            <h1 className="tittle"> Teo´s Shop </h1>

        </div>

    )

}