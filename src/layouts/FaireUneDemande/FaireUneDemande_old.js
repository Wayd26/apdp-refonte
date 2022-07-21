import React from 'react'
import FaireUneDemandeCard from '../../components/FaireUneDemandeCard/FaireUneDemandeCard'
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel'
import "./FaireUneDemande.css"
import dots from '../../assets/icons/dots.svg'

const FaireUneDemande = () => {
    return (
        <div style={{backgroundColor: "#E7E7E7", paddingTop: "40px", paddingBottom: "40px"}}>
            {/* <ActualiteCarousel /> */}

        <div id="faire-une-demande" className="faire-une-demande">
            <div className="top-blue-band row  d-flexjustify-content-between">
                <div className="col-5 ">
                    <p className="vos-demarches-text">Vos Demarches</p>
                </div>
                <div className="col-6">

                <div className="row d-flex justify-content-around">

                <FaireUneDemandeCard title={"Demander une évaluation"} description={"Lorem ipsum dolor sit amet, lorem ipsum consectuar  lorem sadipscing elitr, sed diam nonumy eirmod tempor"}/>
                <FaireUneDemandeCard title={"Faire une demande"} description={"Loolor sit amet, lorem ipsum coay ipsum consetetur sadipscing elitr, sed diam nonumy eirmod tempor"}/>
                </div>
                </div>
            </div>
            <div className="row text-between-bands-row">
                <div className="col text-between-bands-col">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed   diam nonumy emet bla bla bla Lorem ipccusam et diam nonumy emet. Lorem ipccusam etdiam nonumy emet. Lorem ipccusam etdiam nonumy emet. Lorem ipccusam et
                </div>
                <div className="col">
                </div>
                <div className="col">
                <img src={dots} className="faire-une-demande-dots" />
                </div>
            </div>
            <div className=" row d-flexjustify-content-between">
                <div className="col-4">
                </div>
                <div className="col-6 bottom-blue-band">
                <div className="row d-flex justify-content-around" >
                <FaireUneDemandeCard title={"Commander un macaron"} description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"}/>
                <FaireUneDemandeCard title={"Déposer une plainte"} description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"}/>
                </div>
                </div>
               
            </div>
        </div>
        </div>
    )
}

export default FaireUneDemande
