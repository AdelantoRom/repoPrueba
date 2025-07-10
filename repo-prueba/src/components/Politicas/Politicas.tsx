import React from 'react'
import BotonesCirculares from '../BotonesInteractivos/BotonesCirculares'

function Politicas() {
    return (
        <div className='text-black pt-[235px] h-[2550px] max-w-[1637px] mx-[290px] max-xl:mx-[140px]  max-lg:mx-[20px]'>
            <div className='mb-[123px] max-xl:px-10'>
                <h1 className='text-[#D81FB9] font-bold text-[64px] leading-[64px]'>Política de Privacidad y Protección de Datos Personales</h1>
                <p className='text-[20px] mt-4'>Última actualización: 1 de enero 2025</p>
            </div>
            <div className='text-[24px] flex flex-col gap-2 leading-[28px] max-xl:px-10'>
                <h2 className='pb-5'>Información general</h2>
                <p className='pb-5'>La presente declaración refleja la  política que, en materia de protección de datos, sigue Rombux SRL  (“Rombux”), empresa domiciliada en Lezica 4363 de la Ciudad Autónoma de  Buenos Aires, República Argentina y titular del Sitio Web ubicado en el  dominio www.rombux.com (el “Sitio Web”).</p>
                <p className='pb-5'>La política de  privacidad que se describe a continuación sólo es aplicable al presente  Sitio Web, entendiendo como tal todas las páginas, subpáginas y  aplicaciones incluidas en el dominio www.rombux.com, declinando  Rombux cualquier responsabilidad sobre las diferentes políticas de  privacidad y protección de datos de carácter personal que puedan  contener los sitios web a los cuales pueda accederse a través de los  hipervínculos ubicados en Rombux y no gestionados directamente por  Rombux.</p>
                <p className='pb-5'>Esta política se ha configurado respetando la normativa vigente en materia de protección de datos personales.</p>
                <h2 className='pb-5'>Registro de datos de carácter personal</h2>
                <p className='pb-4'>Rombux no recopila ninguna información personal sobre aquellas personas que visitan el Sitio Web.</p>
                <p className='pb-5'>Los únicos datos que se solicitan de los Usuarios son aquellos mencionados  en el formulario de registro; ello en el supuesto en que los Usuarios  deseen pasar a ser usuarios registrados. En consecuencia, Rombux sólo  dispondrá de los datos personales de aquellos Usuarios que  voluntariamente quieran proporcionárselos a través del formulario de  adhesión. Sólo en ese caso en que el Usuario lo desee, y siempre de  forma voluntaria, podrá comunicar sus datos de carácter personal a  Rombux.</p>
                <p className='pb-5'>Dichos datos proporcionados voluntariamente por el  usuario podrán ser incorporados a un fichero bajo la titularidad de  Rombux y podrán ser publicados en el Sitio Web. En consecuencia, el  Usuario que voluntariamente proporcione a Rombux sus datos personales,  acepta expresamente el tratamiento de los mismos, con la finalidad de  gestionar su condición de Usuario registrado de Rombux.</p>
                <p className='pb-5'>En  cualquier caso, los datos recogidos serán tratados siempre respetando la normativa vigente en materia de protección de datos de carácter  personal y de conformidad con lo establecido en la Ley Nº 25.326.
                    Toda la información que facilite el usuario a través de Rombux deberá ser  veraz. A estos efectos, el usuario garantiza la autenticidad de todos  aquellos datos que comunique como consecuencia de la cumplimentación de  los formularios de solicitud de información. De igual forma, se deberá  mantener la información facilitada a Rombux actualizada. En todo caso,  el usuario será el único responsable de las manifestaciones falsas o  inexactas que realice y de los perjuicios que cause a Rombux o a  terceros por la información que facilite.
                </p>
                <p className='pb-5'>Información del perfil</p>
                <p className='pb-5'>Todo Usuario registrado de Rombux puede proporcionar información adicional  para conformar su perfil individual, como ser describir sus aptitudes,  experiencia profesional, trayectoria académica, referencias  profesionales y muestras de trabajos. Si utiliza esta opción y  proporciona información adicional, el usuario sacará mayor provecho de  Rombux ya que el perfil individual le ayudará a expresar su identidad  profesional, ser contactado por otros profesionales y acceder a mayores  oportunidades.</p>
            </div>
            <BotonesCirculares/>
        </div>
    )
}

export default Politicas