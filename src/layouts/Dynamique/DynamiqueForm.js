import React, {useState, useEffect} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import form2 from './data1.json';
import {Form, Button} from 'reactstrap';
import { Stepper, Step } from 'react-form-stepper';
import {ImSad} from "react-icons/im";
import './Dynamique.css'
import {getForm, submitFormSection} from '../../http/http';
import { ToastContainer, toast } from 'react-toastify';

export default function DynamiqueForm() {
    const [formData, setFormData] = useState({
        answers: [],
        user: localStorage.getItem("user_id")
    });
    const [current, setCurrent] = useState(0)
    const [final, setFinal] = useState(false)
    const [formulaire, setFormulaire] = useState(null)

    const loadForm = async () => {
        const resp = await getForm(window.location.pathname.split('/').pop())
        if(resp.response && resp.response.status !== 200){
            console.log(resp.response.header);
        } else {
            console.log('COOOL', resp);
            setFormulaire(resp.data);
            if (resp.data.data.sections.length > 1){
                if (resp.data.data.last_section_submitted == resp.data.data.sections[resp.data.data.sections.length - 1].id || resp.data.data.last_section_submitted == null ) {
                    setCurrent(0)
                } else {
                    setCurrent(resp.data.data.last_section_submitted)
                    for (let i = 0; i < resp.data.data.sections.length; i++) {
                        const element = resp.data.data.sections[i];
                        if (element.id === resp.data.data.last_section_submitted){
                            setCurrent(resp.data.data.sections.indexOf(element)  + 1);
                            console.log("CURRENT", current);
                        }
                    }
                }
            }
        }
    }

    useEffect(() => {
        if (localStorage.getItem("user_token") == "" || localStorage.getItem("user_token") == null){
            localStorage.setItem("redirect_url", window.location.pathname);
            window.location = "/auth";
        }
        loadForm();
    }, [])

    function answerExists(question) {
        const tab = formData["answers"];
        return tab.some(function(el) {
            return el?.question === question;
        }); 
    }

    const updateFormData = (answerObject) => {
        const old = formData;
        if (!answerExists(answerObject?.question)){
            old["answers"].push(answerObject);
        } else {
            for (let i = 0; i <  old["answers"].length; i++) {
                const element =  old["answers"][i];
                if (element?.question === answerObject?.question){
                    old["answers"][old["answers"].indexOf(element)] = answerObject;
                }
            }
        }
        setFormData(old);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await submitFormSection(window.location.pathname.split('/').pop(), formulaire.data.sections[current].id, formData);
        if (final){
            if (resp.data.success){
                toast.success("Formulaire soumis !!!");
                setTimeout(() => {
                    window.location = '/';
                }, 2000);
            }
        } else {
            setCurrent(current + 1);
        }
    }

    const next = (e) => {
        const resp = submitFormSection(window.location.pathname.split('/').pop(), formulaire.data.sections[current].id, formData);
        setCurrent(current + 1)
        e.preventDefault();
    };
    
    const prev = () => {
        setCurrent(current - 1)
    };

    if (!formulaire) {
        return null
    }

    try {
        if (formulaire.data.sections[current]?.questions.length != 0){
            return (
                <div className="d-flex align-items-center justify-content-center py-2 flex-column" style={{backgroundColor : "#E2E2E2", paddingTop: "40px", paddingBottom : "40px"}}>
                    <Form className="form-style" onSubmit={handleSubmit}>
                        {/* <Stepper activeStep={current}>
                       
                            {formulaire && formulaire.data.sections.map((section) => (
                                <Step label={section.name} />    
                            ))}</Stepper> */}
                        <h2 style={{ marginBottom: '50px' }}>FORMULAIRE</h2>
        
                        <div className="row">
                            {formulaire && formulaire.data.sections[current]?.questions.map((field) => (
                                <div className="col-sm-3">
                                    <CustomInput key={field.id} field={field} updateValue={updateFormData}/>
                                </div>
                                ))
                            }
                        </div>
                        <div className="row">
                            <div className="col-6">
                                {current > 0 && (
                                <Button className="auth-form-btn" style={{ float: 'left' }} onClick={(e) => prev(e)}>
                                    Précédent
                                </Button>)}
                            </div>
                            <div className="col-6">
                                {formulaire && current < formulaire.data.sections.length - 1 && (
                                    <Button className="auth-form-btn" style={{ float: 'right'}} type="submit" onClick={(e) => setFinal(false)}>
                                        Suivant
                                    </Button>
                                )}
    
                                {formulaire && current === formulaire.data.sections.length - 1 && (
                                    <Button className="auth-form-btn" type="submit" onClick={(e) => setFinal(true)}>
                                        Valider
                                    </Button>
                                )}
                            </div>
                        </div>
                        {/* <div style={{width: "70%"}} className="row mx-auto mb-3">
        
                            {formulaire && current === formulaire.data.sections.length - 1 && (
                            <Button className="auth-form-btn" type="submit" onClick={(e) => setFinal(true)}>
                                Valider
                            </Button>
                            )}
                        </div> */}
                    </Form>
                </div>
            )
        } else {
            return (
                <div className="d-flex align-items-center justify-content-center py-2 flex-column" style={{backgroundColor : "#E2E2E2", paddingTop: "40px", paddingBottom : "40px"}}>
                    <Form className="form-style" style={{alignItems: 'center'}}>
                        
                        <h2 style={{ fontSize: '130%' }}>FORMULAIRE</h2>
        
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginTop: '50%', marginBottom: '50%', }}>
                                <ImSad style={{ fontSize: '50px', marginBottom: '30px' }}/>
                                <p>Rien à afficher</p>
                            </div>
                            <Button className="auth-form-btn" style={{width: 'auto', height: 'auto', padding: '15px',}} onClick={(e) => window.location.pathname = '/'}>
                                Retourner à l'accueil
                            </Button>
                        </div>
                    </Form>
                </div>
            )
        }
    } catch (error) {
        return (
            <div className="d-flex align-items-center justify-content-center py-2 flex-column" style={{backgroundColor : "#E2E2E2", paddingTop: "40px", paddingBottom : "40px"}}>
                <Form className="form-style" style={{alignItems: 'center'}}>
                    
                    <h2 style={{ fontSize: '130%' }}>FORMULAIRE</h2>
    
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ marginTop: '50%', marginBottom: '50%', }}>
                            <ImSad style={{ fontSize: '50px', marginBottom: '30px' }}/>
                            <p>Rien à afficher</p>
                        </div>
                        <Button className="auth-form-btn" style={{width: 'auto', height: 'auto', padding: '15px',}} onClick={(e) => window.location.pathname = '/'}>
                            Retourner à l'accueil
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}


