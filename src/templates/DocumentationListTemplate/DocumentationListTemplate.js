import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroSection from '../../components/HeroSection/HeroSection'
import Pagination from '../../components/Pagination/Pagination'
import TemplateDocumentationListCard from '../../components/TemplateDocumentationListCard/TemplateDocumentationListCard'
import { getATypeOfArticles } from '../../http/http'
import './DocumentationListTemplate.css'

const DocumentationListTemplate = () => {
  const { menu } = useParams()

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
  return (
    <div className='pb-5' >
      <HeroSection />

      {articles.length != 0 ? articles.map((item, index) => <div key={index}><TemplateDocumentationListCard
        id={item.id} title={item.title} content={item.content} created_at={item.created_at} document_url={item.document_url} image_url={item.image_url} sub_title={item.sub_title} />
      </div>) : <h1 className='m-auto p-5'>Aucune Donnée</h1>}

      {articles && articles?.length !== 0 && <Pagination
        changePage={changePage}
        pageCount={totalPage}
        perPage={perPage}
      />}

    </div>
  )
}

export default DocumentationListTemplate