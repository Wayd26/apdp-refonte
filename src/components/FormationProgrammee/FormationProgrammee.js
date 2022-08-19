import React from 'react'

const FormationProgrammee = () => {
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
                    <td>Formation sur les directives.</td>
                        <td>02/03/2022 - 04/05/2022</td>
                        <td>8h - 12h</td>
                        <td>Luke SHAW</td>
                        <td>
                        <button className='table-button'>TDR</button>
                          <button className='table-button'>Participer</button>
                          </td>
                    </tr>
                    <tr className='table-row'>
                    <td>Formation sur les activités.</td>
                        <td>06/06/2022 - 02/08/2022</td>
                        <td>9h - 111h</td>
                        <td>Jane DOE</td>
                        <td>
                        <button className='table-button'>TDR</button>
                          <button className='table-button'>Participer</button>
                          </td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default FormationProgrammee