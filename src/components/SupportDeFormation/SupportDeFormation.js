import React from 'react'

const SupportDeFormation = () => {
    const livreRow = () => {
        (<p className='row' style={{ border: '2px solid red' }}>
            <div className='col-sm-4 col-xs-12'>Loi cadre de protection des données</div>
            <div className='col-sm-4 col-xs-12'>John DOE</div>
            <div className='col-sm-4 col-xs-12'><span>Accéder</span></div>
        </p>)
    } 
    const videoRow = () => {

    }

    return (
        <div>
            <h4 className='text-left'>Livres</h4>
            {[0, 1, 2].map((item) =>
            
                livreRow
            
            )}
            <br />
            <h4 className='text-left'>Vidéos</h4>
        </div>
    )
}

export default SupportDeFormation