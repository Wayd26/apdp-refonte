import React, { useState, useEffect, Fragment } from 'react';
import "./Actualités.css"
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { getATypeOfArticles } from '../../http/http';

const Actualités = () => {

    let { actualite_id } = useParams();
    const [actualiteData, setActualiteData] = useState();


    useEffect(() => {
        loadActualiteData();
    }, [actualite_id])

    const loadActualiteData = async () => {
        const resp = await getATypeOfArticles("actualites")
        if (resp.response && resp.response.status !== 200) {
            // console.log("data error ", resp.response)
        } else {
            console.log("data actu ", resp.data.data)
            let element = resp.data?.data?.filter(elt => {
                if (elt.id == actualite_id) {
                    return elt
                } else {
                    return false
                }
            })
            setActualiteData(element)
        }
    }


    return (
        <div>

            <div style={{ background: '#FFF' }}>
                <h2 style={{ 'color': '#4385F6', 'padding-top': '70px' }}>{actualiteData && actualiteData[0].title}</h2>
                <Card className={'law-card'}>
                    <Card.Body>
                        <Card.Img src={actualiteData && actualiteData[0]?.image_url} />
                        <Card.Text>
                            <div dangerouslySetInnerHTML={{ __html: (actualiteData && actualiteData[0]?.content) }}></div>
                        </Card.Text>

                    </Card.Body>
                </Card>

                <br />

            </div>
        </div>
    )
}

export default Actualités