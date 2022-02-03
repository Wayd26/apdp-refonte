import React from 'react';
import DataTable from 'react-data-table-component';

const MarketDataTable = () => {

    const columns = [
        {
            name: 'Type de marché',
            selector: row => row.type,
            sortable: true,
        },
        {
            name: 'Libellé',
            selector: row => row.label,
            sortable: true,
        },
        {
            name: 'Publié le',
            selector: row => row.publish,
           
        },
        {
            name: 'Dépôt le',
            selector: row => row.deposit,
            
        },
        {
            name: 'Statut',
            selector: row => row.status,
            
        },
        {
            name: 'Action',
            selector: row => row.action,
            
        }
    ];
    
    const data = [
        {
            id : 1,
            type : "Fourniture et Service",
            label : "Avis d'appel public relatif à la connexion interne du nouveau bâtiment de l'ASSI",
            publish : "25 Novembre 2021",
            deposit : "08 Décembre 2021 à 10H",
            status : "EN COURS",
            action : "Télécharger",
        },
        {
            id : 2,
            type : "Fourniture et Service",
            label : "Avis d'appel public relatif à la connexion interne du nouveau bâtiment de l'ASSI",
            publish : "25 Novembre 2021",
            deposit : "08 Décembre 2021 à 10H",
            status : "EN COURS",
            action : "Télécharger",
        },
        {
            id : 3,
            type : "Fourniture et Service",
            label : "Avis d'appel public relatif à la connexion interne du nouveau bâtiment de l'ASSI",
            publish : "25 Novembre 2021",
            deposit : "08 Décembre 2021 à 10H",
            status : "EN COURS",
            action : "Télécharger",
        },
        {
            id : 4,
            type : "Fourniture et Service",
            label : "Avis d'appel public relatif à la connexion interne du nouveau bâtiment de l'ASSI",
            publish : "25 Novembre 2021",
            deposit : "08 Décembre 2021 à 10H",
            status : "EN COURS",
            action : "Télécharger",
        },
        {
            id : 5,
            type : "Fourniture et Service",
            label : "Avis d'appel public relatif à la connexion interne du nouveau bâtiment de l'ASSI",
            publish : "25 Novembre 2021",
            deposit : "08 Décembre 2021 à 10H",
            status : "EN COURS",
            action : "Télécharger",
        },
        {
            id : 6,
            type : "Fourniture et Service",
            label : "Avis d'appel public relatif à la connexion interne du nouveau bâtiment de l'ASSI",
            publish : "25 Novembre 2021",
            deposit : "08 Décembre 2021 à 10H",
            status : "EN COURS",
            action : "Télécharger",
        },
        {
            id : 7,
            type : "Fourniture et Service",
            label : "Avis d'appel public relatif à la connexion interne du nouveau bâtiment de l'ASSI",
            publish : "25 Novembre 2021",
            deposit : "08 Décembre 2021 à 10H",
            status : "EN COURS",
            action : "Télécharger",
        },
        {
            id : 8,
            type : "Fourniture et Service",
            label : "Avis d'appel public relatif à la connexion interne du nouveau bâtiment de l'ASSI",
            publish : "25 Novembre 2021",
            deposit : "08 Décembre 2021 à 10H",
            status : "EN COURS",
            action : "Télécharger",
        },
        {
            id : 9,
            type : "Fourniture et Service",
            label : "Avis d'appel public relatif à la connexion interne du nouveau bâtiment de l'ASSI",
            publish : "25 Novembre 2021",
            deposit : "08 Décembre 2021 à 10H",
            status : "EN COURS",
            action : "Télécharger",
        },
        {
            id : 10,
            type : "Fourniture et Service",
            label : "Avis d'appel public relatif à la connexion interne du nouveau bâtiment de l'ASSI",
            publish : "25 Novembre 2021",
            deposit : "08 Décembre 2021 à 10H",
            status : "EN COURS",
            action : "Télécharger",
        }
    ];

    //  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
    rows: {
        style: {
            minHeight: '72px',
            font: 'normal normal normal 13px/18px Source Sans Pro',
            letterSpacing: '0px',
            color: '#000000' // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '3px', // override the cell padding for head cells
            paddingRight: '3px',
            background: '#B7D0FC 0% 0% no-repeat padding-box',
            border: '1px solid #DDE1E6',
            opacity: '1',
            font: 'normal normal bold 14px/18px Montserrat',
            letterSpacing: '0px',
            color: '#000000'

        },
    },
    cells: {
        style: {
            paddingLeft: '3px', // override the cell padding for data cells
            paddingRight: '3px',
            border: '1px solid #DDE1E6',
            backgroundColor: '#F1F9FF'
        },
    },
};

  return <DataTable
            columns={columns}
            data={data} 
            customStyles={customStyles}
        />
};

export default MarketDataTable;
