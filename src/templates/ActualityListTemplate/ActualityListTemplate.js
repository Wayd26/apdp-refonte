import React, { useState, useEffect} from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Pagination from '../../components/Pagination/Pagination'
import TemplateActualityListListCard from '../../components/TemplateActualityListCard/TemplateActualityListCard'
import { getATypeOfArticles } from '../../http/http'
import './ActualityListTemplate.css'

const ActualityListTemplate = (props) => {

  const [activeMenu, setActiveMenu] = useState(null)

  useEffect(() => {
    if(activeMenu === null ){var temp = JSON.parse(localStorage.getItem('active-menu'))
  setActiveMenu(temp)
  console.log("temp ", temp)
}
}, [activeMenu])

useEffect(() => {
 console.log("subMenu ", activeMenu)
}, [])


const [articles, setArticles] = useState([]);
const [perPage, setPerPage] = useState(15);
const [pageNumber, setPageNumber] = useState(1);
const [totalPage, setTotalPage] = useState(1);



const changePage = ({ selected }) => {
    let currentPage = selected + 1;
    setPageNumber(currentPage)
    console.log("ok ", selected + 1)
}


useEffect(() => {
  loadArticlesData();
    console.log("Articles data load", articles)
}, [pageNumber, activeMenu])

const loadArticlesData = async () => {
  console.log("subMenu load", activeMenu?.slug)
    const resp = await getATypeOfArticles(activeMenu?.slug, pageNumber)
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

  return (
    <div className='pb-5' >
        <HeroSection />

      {articles.map((item, index) => <div key={index}><TemplateActualityListListCard 
      id={item.id} title={item.title} content={item.content} created_at={item.created_at} document_url={item.document_url} image_url={item.image_url} sub_title={item.sub_title} />
      </div>)}

      <Pagination
                    changePage={changePage}
                    pageCount={totalPage}
                    perPage={perPage}
                />
    </div>
  )
}

export default ActualityListTemplate