import React, { useEffect, useState } from 'react'
import './MemberItemTemplate.css'
import image from '.././../assets/images/img7.jpg'
import { useParams } from 'react-router-dom'
import { getATypeOfArticles } from '../../http/http'
import HeroSection from '../../components/HeroSection/HeroSection'

const MemberItemTemplate = () => {

    const { menu } = useParams()

    const [article, setArticle] = useState([]);
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
        console.log("Articles data load", article)
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

            setArticle(resp.data.data[0])
        }
    }

    return (
        <div className='pb-5' >
        <HeroSection />
        <div className='member__item-template'>

            <img src={article?.image_url ? article.image_url : image} alt="autorité-img" />
            <div className="name">{article?.title}</div>
            <div className="job">{article?.sub_title}</div>
            <div className="text-content"
                dangerouslySetInnerHTML={{ __html: article?.content }}
            >
            </div>
        </div>
        </div>
    )
}

export default MemberItemTemplate