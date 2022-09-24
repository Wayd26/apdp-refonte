import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroSection from '../../components/HeroSection/HeroSection'
import TemplateMemberListBureauCard from '../../components/TemplateMemberListBureauCard/TemplateMemberListBureauCard'
import TemplateMemberListConseillerCard from '../../components/TemplateMemberListConseillerCard/TemplateMemberListConseillerCard'
import { getATypeOfArticles } from '../../http/http'
import './MemberListTemplate.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const MemberListTemplate = () => {

  const {menu} = useParams()

const [articles, setArticles] = useState([]);
const [perPage, setPerPage] = useState(15);
const [pageNumber, setPageNumber] = useState(1);
const [totalPage, setTotalPage] = useState(1);
const [bureau, setBureau] = useState([])
const [conseillers, setConseillers] = useState([])



const changePage = ({ selected }) => {
    let currentPage = selected + 1;
    setPageNumber(currentPage)
    console.log("ok ", selected + 1)
}


useEffect(() => {
  loadArticlesData();
    console.log("Articles data load", articles)
}, [pageNumber, menu])

const loadArticlesData = async () => {
  console.log("subMenu load", menu)
    const resp = await getATypeOfArticles(menu, pageNumber)
    if (resp.response && resp.response.status !== 200) {
        console.log("data error ", resp.response)
    } else {
        console.log("data data load", resp.data)
        const perPageValue = resp?.data?.meta?.per_page
        setPerPage(perPageValue)
        const total = resp?.data?.meta?.total;
        setTotalPage(Math.ceil(total / perPageValue))

        setArticles(resp.data.data)
    }
}

useEffect(() => {
 let bureau = articles.filter(member => (member.title.toLowerCase().includes('président') || member.title.toLowerCase().includes('rapporteur')) )
  setBureau(bureau)
  let conseillers = articles.filter(member => (member.title.toLowerCase().includes('conseiller')))
   setConseillers(conseillers)
}, [articles])



  return (
    <div>
     <HeroSection />
     <Breadcrumb>
            <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Actualités</Breadcrumb.Item>
            <Breadcrumb.Item active>Breaknews</Breadcrumb.Item>
        </Breadcrumb> 
        <div class="member__list-template-card">
            <div class="member__list-template__header mb-5">Le Bureau</div>
            <div class="member__list-template-bureau-container">
                {bureau.length != 0 ? bureau.map((item, index) => <div key={index}><TemplateMemberListBureauCard picture={item.image_url} name={item.sub_title} role={item.title.toLowerCase().includes('président') ? "Président" : "Rapporteur"} /></div>) : <h2>Aucune Donnée</h2>}
                
            </div>
            <div class="member__list-template__header">Les Conseillers</div>
            <div class="member__list-template-conseiller-container d-flex flex-wrap justify-content-between">
                {conseillers.length != 0 ? bureau.map((item, index) => <div key={index}><TemplateMemberListBureauCard picture={item.image_url} name={item.sub_title} role={"Conseiller"} /></div>) : <h2 className='m-auto p-5'>Aucune Donnée</h2>}
               
            </div>

        </div>
    </div>
  )
}

export default MemberListTemplate