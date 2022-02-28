import React, {useState, useEffect} from 'react';
import "./Activites.css";
import img5 from '../../assets/images/img5.jpg'
import img8 from '../../assets/images/img8.png'
import avatar from '../../assets/icons/avatar.jpg'
import FaqElement from '../../components/FaqElement/FaqElement';
import {Carousel, Card, Button, ButtonGroup, Accordion} from "react-bootstrap";
import {RiCalendar2Line, RiQuestionAnswerFill, RiEyeFill, RiArrowRightCircleFill} from "react-icons/ri";
import CardOnCaroussel from '../../components/CardOnCaroussel/CardOnCaroussel';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";



const Activites = () => {

    const navigate = useNavigate()

    const [activities, setActivities] = useState([]);

    const handleMoreClicked = (id) =>{
        navigate(`/activite/${id}`)
    }

    const loadActivitiesData = async () => {
        const resp = await getATypeOfArticles("activites")
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data.data)
            setActivities(resp.data.data)
        }
    }

    const dispatch = useDispatch();
    const appState = useSelector(state=>state, shallowEqual);
  
    
    useEffect(() => {
        loadActivitiesData() ;
        console.log("Activities data ", activities)       
    }, [])
    
    return (
        <div className={"activities"} id={"activities"} style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>           

            {/* Title */}

            <p className={'page-title'}>LES ACTIVITÉS</p>
            {/* <p className={'page-subtitle'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed dia</p> */}


            {/* Activities list 1 */}
            <hr className={"activities-separator"}/>
            <h4 className={"activities-page-section"}>LOREM IPSUM</h4>
            <div className={"activities-card-list row text-align left"}>

                {/* {activities && Object.keys(activities).map((activity, index) => <div> {index.title}</div>  )} */}
                {/* {activities && activities.map((activity, index) => <div>{activity.title} </div>)} */}
                {activities && activities.map((activity, index) => 
                <Card key={index} className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} style={{ "backgroundImage" : `${activity.image[0]}`}} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', fontWeight: 'bold' }}>{activity.title}</Card.Title>
                        <Card.Text style={{ float: 'left', textAlign: 'left', fontSize: '9px', width: '100px',}}>
                        {activity.sub_title}
                        </Card.Text>
                        {/* <Card.Img variant="top" className={"rounded-circle"} src={avatar} /> */}
                        <br/>
                        <br/>
                        <br/>
                        {/* <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p> */}
                        {/* <a href="/activite/details-1"> */}
                            <Button onClick={() => handleMoreClicked(activity.id)} variant="light" style={{ width: '100px', fontSize: '8px', backgroundColor: '#FFF', borderRadius: '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ width: '25px', height: '25px', marginLeft: '0px', position: 'relative', right: '-10px', color: '#FFBE00',}}/>
                            </Button>
                        {/* </a> */}
                    </Card.Body>
                </Card>
                )}
                
        </div>
        </div>
    )
}

export default Activites;
