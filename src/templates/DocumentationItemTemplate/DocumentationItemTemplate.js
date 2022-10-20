import React, {useState, useEffect} from 'react'
import './DocumentationItemTemplate.css'
import image from '.././../assets/images/img7.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { getATypeOfArticles } from '../../http/http'


const DocumentationItemTemplate = () => {
    const navigate = useNavigate()
    let { id, menu } = useParams();

    const [data, setData] = useState();
  const [activeMenu, setActiveMenu] = useState(null)

  useEffect(() => {
    if(activeMenu === null ){var temp = JSON.parse(localStorage.getItem('active-menu'))
  setActiveMenu(temp)
  console.log("temp ", temp)
}
}, [activeMenu])

    useEffect(() => {
        loadData();
    }, [id, menu])

     const loadData = async () => {
        const resp = await getATypeOfArticles(menu)
        if(resp.response && resp.response.status !== 200){
            // console.log("data error ", resp.response)
        } else {
            console.log("elet ",resp.data.data)
            let element = resp.data.data.filter(elt => {
                if(elt.id == id) {
                    console.log("elet ",elt)
                return elt
            } else {
                return false
            } 
        })
            setData(element)
            console.log(data)
            console.log(element)
        }
    }
  return (
<div>
            <div class="documentation__item-template__header">{activeMenu?.name.slice(0, -1)}</div>
            <div class="documentation__item-template__content">
            <img src={data && data[0]?.image_url} alt="" />
                <div class="text-content">
                    <div class="documentation__item__title">{data && data[0]?.title}</div>
                    <div class="documentation__item__subtitle-content">
                        <div class="documentation__item__subtitle">{data && data[0]?.sub_title}</div>
                    </div>
                    <div class="actuality__item__description" dangerouslySetInnerHTML={{__html: (data && data[0]?.content)}}>
                    </div>
                    <div class="buttons-content d-flex justify-content-between">

                    {/* <button className="documentation__item__read-button">lire</button> */}
                    <a href={data && data[0]?.document_url[0]} download>
                    {/* <button class="download-button">Télécharger</button> */}
                    <button className="documentation__item__download-button">Télécharger</button>
                     </a>
                    <button onClick={() => navigate(`/documentations/${menu}`)} className="documentation__item__back-button">Retour</button>
                    </div>
                </div>
            </div>
        </div>  )
}

export default DocumentationItemTemplate