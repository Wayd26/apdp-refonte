import React from 'react';
import './SupportDeFormation.css'

const SupportDeFormation = () => {
    
    return (
        <div>
            <h5 className='text-center mb-3'>Livres</h5>
            
            <table className='custom-table'>
                <thead className="">
                    <tr className='table-row'>
                        <th>Nom du livre</th>
                        <th>auteur      </th>
                        <th>Action      </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-row'>
                        <td>Communication sur la confidentialité.</td>
                        <td>John DOE</td>
                        <td><button className='table-button'>Accéder</button></td>
                    </tr>
                    <tr className='table-row'>
                        <td>Communication sur le droit à l'image.</td>
                        <td>Jane DOE</td>
                        <td><button className='table-button'>Accéder</button></td>
                    </tr>
                </tbody>
            </table>
            <br />
            <h5 className='text-center mb-3'>Vidéos</h5>
            <table className='custom-table'>
                <thead className="">
                    <tr>
                        <th>Nom de la formation</th>
                        
                        <th>Action      </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Communication sur la confidentialité.</td>
                        <td><button className='table-button'>Lire</button></td>
                    </tr>
                    <tr>
                        <td>Communication sur le droit à l'image.</td>
                        <td><button className='table-button'>Lire</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SupportDeFormation