import React from 'react'

const FormationSuivie = () => {
  return (
    <div>
      <table className='custom-table'>
                <thead className="">
                    <tr className='table-row'>
                    <th>Titre de la formation</th>
                        <th>Période      </th>
                        <th>Heure      </th>
                        <th>Formateur      </th>
                        <th>Actions      </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-row'>
                        <td>Formation sur la confidentialité.</td>
                        <td>12/05/2021 - 04/07/2021</td>
                        <td>8h - 12h</td>
                        <td>Luke Shaw</td>
                        <td><button className='table-button'>Télécharger</button></td>
                    </tr>
                    <tr className='table-row'>
                    <td>Formation sur les decrets.</td>
                        <td>12/12/2021 - 01/02/2022</td>
                        <td>11h - 16h</td>
                        <td>Cameron Lee</td>
                        <td><button className='table-button'>Télécharger</button></td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default FormationSuivie