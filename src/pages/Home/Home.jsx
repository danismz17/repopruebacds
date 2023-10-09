import React from 'react'
import './Home.css'
import { HeaderPages } from '../../components/PagesComponents/HeaderPages/HeaderPages'
import { BtnVerde } from '../../components/GeneralComponents/BtnGeneral/BtnGeneral'
import { BtnRojo } from '../../components/GeneralComponents/BtnGeneral/BtnGeneral'
import { BtnAmarillo } from '../../components/GeneralComponents/BtnGeneral/BtnGeneral'
import { BtnAzul } from '../../components/GeneralComponents/BtnGeneral/BtnGeneral'
import { BtnGris } from '../../components/GeneralComponents/BtnGeneral/BtnGeneral'
import TagsGeneral from '../../components/GeneralComponents/TagsGeneral/TagsGeneral'
import { StatusFail, StatusOK, StatusWarning, StatusWorking } from '../../components/GeneralComponents/StatusGeneral/StatusGeneral'
import { InputTextGeneral } from '../../components/GeneralComponents/InputTextGeneral/InputTextGeneral'



const Home = () => {
  return (
    <>
      <div className="home-container">
        <HeaderPages />

        <BtnVerde
          text="Aceptar"
          onClick={() => console.log('Botón en Home clickeado')}
        />

        <BtnRojo
          text="Canelar"
          onClick={() => console.log('Botón en Home clickeado')} />

        <BtnAmarillo
          text="Inspeccionar"
          onClick={() => console.log('Botón en Home clickeado')} />


        <BtnAzul
          text="Enviar"
          onClick={() => console.log('Botón en Home clickeado')} />


        <BtnGris
          text="Deshabilitado"
          onClick={() => console.log('Botón en Home clickeado')} />


        <TagsGeneral
          id="soloUY"
          text="Solo Uruguay"
          textColor=""
          backgroundColor=""
        />

        <TagsGeneral
          id="ipAntel"
          text="IP de antel"
          textColor=""
          backgroundColor=""
        />

        <TagsGeneral
          id="timeShift"
          text="Time Shift"
          textColor=""
          backgroundColor=""
        />

        <TagsGeneral
          id="android"
          text="Android"
          textColor=""
          backgroundColor=""
        />

        <TagsGeneral
          id="miId"
          text="La fruta mas grande que te puedas imaginar"
          textColor=""
          backgroundColor=""
        />

        <StatusOK
          text="OK" />

        <StatusWarning
          text="Advertencia" />


        <StatusFail
          text="Error" />

        <StatusWorking
          text="Procesando" />


        <InputTextGeneral
            inputWidth={250} 
            placeholder="nombre" 
            id="miInput" />


      </div>

    </>
  )
}

export default Home
