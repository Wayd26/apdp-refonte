import React from 'react'

const NoteInformation = () => {
  return (
    <div>
      <table className='custom-table'>
        <thead className="">
          <tr className='table-row'>
            <th>Intitulé</th>
            <th>Date de publication      </th>
            <th>Action      </th>
          </tr>
        </thead>
        <tbody>
          <tr className='table-row'>
            <td>Note sur les lois.</td>
            <td>22/11/2021</td>
            <td><button className='table-button'>Télécharger</button></td>
          </tr>
          <tr className='table-row'>
            <td>Notion de confidentialité</td>
            <td>02/04/2021</td>
            <td><button className='table-button'>Télécharger</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NoteInformation