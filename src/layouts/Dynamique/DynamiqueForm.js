import React, {useState, useEffect} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import {Label, Form, Button} from 'reactstrap';
import {ImSad, ImHappy} from "react-icons/im";
import './Dynamique.css';
import {getForm, submitFormSection, getRequestedQuery} from '../../http/http';
import { ToastContainer, toast } from 'react-toastify';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function DynamiqueForm() {
    const [formData, setFormData] = useState({
        answers: [],
        user: localStorage.getItem("user_id")
    });
    const [current, setCurrent] = useState(0);
    const [final, setFinal] = useState(false);
    const [responseCounter, setResponseCounter] = useState(0);
    const [formulaire, setFormulaire] = useState(null);
    const [currentDependentSection, setCurrentDependentSection] = useState(null);
    const [filledSections, setFilledSections] = useState(0);
    const [dependentSections, setDependentSections] = useState([]);
    const [refNumber, setRefNumber] = useState(0);
    const [query, setQuery] = useState({});
    const [answersForm, setAnswersForm] = useState([]);
    

    const loadForm = async () => {
        const resp = await getForm(window.location.pathname.split('/').pop())        
        if (resp.response && resp.response.status !== 200){
            // console.log(resp.response.header);
        } else {
            // console.log('COOOL', resp);
            setFormulaire(resp.data);
            if (resp.data.data.sections.length > 1){
                if (parseInt(localStorage.getItem('last_section_submitted')) === resp.data.data.sections[resp.data.data.sections.length - 1].id || isNaN(parseInt(localStorage.getItem('last_section_submitted'))) || localStorage.getItem('last_section_submitted') === null ) {
                    setCurrent(0)
                    localStorage.setItem('last_section_submitted', '0');
                } else {
                    setCurrent(parseInt(localStorage.getItem('last_section_submitted')));
                    for (let i = 0; i < resp.data.data.sections.length; i++) {
                        const element = resp.data.data.sections[i];
                        if (element.id === parseInt(localStorage.getItem('last_section_submitted'))){
                            setCurrent(resp.data.data.sections.indexOf(element)  + 1);
                            // console.log("CURRENT", current);
                        }
                    }
                }
                var sections_to_exclude = []
                for (let p = 0; p < resp.data.data.sections.length; p++) {
                    const elem = resp.data.data.sections[p];
                    if (elem.type === "dependent"){
                        sections_to_exclude.push(elem.id);
                        // console.log("DEPENDENT SECTIONS", elem);
                    }
                }
                setDependentSections(sections_to_exclude);
            }
        }
    }

    useEffect(() => {
        if (localStorage.getItem("user_token") === "" || localStorage.getItem("user_token") === null){
            localStorage.setItem("redirect_url", window.location.pathname);
            window.location = "/auth";
        }
        loadForm();
        // console.log("DEEEEEEE", dependentSections);
        if (localStorage.getItem('preview') == null || isNaN( localStorage.getItem('preview')) ||  localStorage.getItem('preview') == ""){
            localStorage.setItem('preview',false);
        }
        console.log("answersForm", answersForm);
        console.log("query", query);
    }, [])

    function answerExists(question) {
        const tab = formData["answers"];
        return tab.some(function(el) {
            return el?.question === question;
        }); 
    }

    function updateDependentSection(section_id) {
        // // console.log(section_id);
        setCurrentDependentSection(section_id);
        localStorage.setItem('last_standard_section', current);
    }

    if (!formulaire) {
        return null
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

    function printForm() {
        var formContent = document.getElementsByClassName('form-content')[0].outerHTML;
        var printWindow = window.open('', '', 'height=400,width=800');
        printWindow.document.write('<html><head><title>APDP Formulaire</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(formContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }

    const handleSubmit = async (e) => {
        // console.log('Current Dependent Section ', currentDependentSection);
        e.preventDefault();
        console.log("FOOORRRMMMM DATAAAA", formData);
        const responseSubmit = await submitFormSection(formulaire.data.id, formulaire.data.sections[current].id, formData);
        console.log("RESSSSSSSS", responseSubmit);
        setRefNumber(responseSubmit.data.data[0].submit_id);
        setResponseCounter(formData.answers.length);
        const queryResponse = await getRequestedQuery(refNumber);
        setQuery(queryResponse.data.data);
        var answersFormArray = [];
        var questionsArray = [];
        for (let iterator = 0; iterator < formulaire.data.sections.length; iterator++) {
            const section = formulaire.data.sections[iterator];
            for (let newIter = 0; newIter < section.questions.length; newIter++) {
                const question = section.questions[newIter];
                if (!questionsArray.includes(question)){
                    questionsArray.push(question);
                }
            }
        }
        try {
            let temp_answers_form = [];
            let queryResponseReversed = queryResponse.data.data.answers.reverse();
            for (let index = 0; index < queryResponseReversed.length; index++) {
                const answer = queryResponseReversed[index];
                for (let newIdex = 0; newIdex < questionsArray.length; newIdex++) {
                    const question = questionsArray[newIdex];
                    if (answer.question_id == question.id) {
                        if (!temp_answers_form.includes(question.name)){
                            answersFormArray.push({'question': question.name, 'answer': answer.answer_text});
                            temp_answers_form.push(question.name);
                        }
                    }
                }
            }
            setAnswersForm(answersFormArray.reverse());
        } catch (error) {
            console.log("Not ready yet!!!")   
        }
        setFilledSections(filledSections+1);
        localStorage.setItem('last_section_submitted', responseSubmit.data.data['last_submitted_section']);
        if (final){
            try {
                if (responseSubmit.data.success){
                    toast.success("Formulaire soumis !!!");
                } else {
                    toast.error("Il y a un problème !!!");
                }
            } catch (error) {
                toast.error("Il y a un problème !!!");
            }
            setCurrent(current+1)
        } else {
            if (formulaire.data.sections[current].type !== 'standard'){
                // console.log('Ce n\'est pas une section standard');
                setCurrentDependentSection(null);
                setCurrent(parseInt(localStorage.getItem('last_standard_section')) + 1);
                localStorage.setItem('last_standard_section', '');
            } else {
                // console.log('Ce n\'est pas une section dépendante');
                if (currentDependentSection) {
                    // console.log('Une section de redirection existe: ', currentDependentSection);
                    for (let f = 0; f < formulaire.data.sections.length; f++) {
                        const element = formulaire.data.sections[f];
                        if (String(element.id) === currentDependentSection){
                            setCurrent(formulaire.data.sections.indexOf(element));
                            // console.log('Redirigeons vers la section à l\'index ', formulaire.data.sections.indexOf(element))
                        }
                    }
                } else {
                    // console.log('Rien à faire! Passons à la section suivante...')
                    setCurrent(current + 1);
                }
            }
        }
    }

    if (formulaire && formulaire.data.sections.length > 1 && filledSections >= formulaire.data.sections.length - dependentSections.length && localStorage.getItem('preview') == "true"){
        var endFormButton = <div id='button-submit'> <Button className="auth-form-btn" type="submit"  onClick={(e) => {
            setFinal(true);
            localStorage.setItem('preview',false);
        }}>
            Soumettre
        </Button></div>
    } else if(formulaire && formulaire.data.sections.length > 1 && filledSections >= formulaire.data.sections.length - dependentSections.length && localStorage.getItem('preview') == "false"){
        var endFormButton = <div id='button-next'><Button className="auth-form-btn" type="submit" onClick={(e) => {
            localStorage.setItem('preview',true);
        }}>
        Prévisualiser
    </Button></div>
    } else if(formulaire && formulaire.data.sections.length == 1){
        var endFormButton = <div id='button-submit'> <Button className="auth-form-btn" type="submit"  onClick={(e) => {
            setFinal(true);
            localStorage.setItem('preview',false);
        }}>
            Soumettre
        </Button></div>
    } else {
        var endFormButton = <div id='button-next'><Button className="auth-form-btn" type="submit" onClick={(e) => {
            setFinal(false);
        }}>
            Suivant
        </Button></div>
    }

    const next = (e) => {
        const resp = submitFormSection(formulaire.data.id, formulaire.data.sections[current].id, formData);
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
        if (formulaire.data.sections[current]?.questions.length !== 0){
            if (dependentSections.includes(formulaire.data.sections[current]?.id) && formulaire.data.sections[current]?.id != currentDependentSection){
                setCurrent(current+1);
            } else {
                return (
                    <div className="d-flex align-items-center justify-content-center py-2 flex-column" style={{backgroundColor : "#E2E2E2", paddingTop: "40px", paddingBottom : "40px"}}>
                        <Breadcrumb style={{ width: '100%' }}>
                            <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Vos démarches</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Faire ou modifier une demande</Breadcrumb.Item>
                            <Breadcrumb.Item active>{formulaire.data.name}</Breadcrumb.Item>
                        </Breadcrumb>
                        <ToastContainer />
                        <Form className="form-style" onSubmit={handleSubmit}>
                            {/* <Stepper activeStep={current}>
                            
                                {formulaire && formulaire.data.sections.map((section) => (
                                    <Step label={section.name} />    
                                ))}</Stepper> */}
                            <h2 style={{ marginBottom: '50px', fontSize: 'large' }}>{formulaire.data.sections[current]?.name}</h2>
            
                            <div className="row">
                                {formulaire && formulaire.data.sections[current].questions.map((field) => (
                                    <div>
                                        <CustomInput key={field.id} field={field} updateValue={updateFormData} updateDependentSection={updateDependentSection}/>
                                    </div>
                                    ))
                                }
                            </div>
                            <div>
                                {/* {current > 0 && (<div id='button-previous'>
                                    
                                    <Button className="auth-form-btn" style={{ float: 'left' }} onClick={(e) => prev(e)}>
                                        Précédent
                                    </Button>
                                </div>)} */}
                                
                                { endFormButton}
                            </div>
                        </Form>
                    </div>
                )
            }
        } else {
            setCurrent(current+1);
        }
    } catch (error) {
        if (!final && !localStorage.getItem('preview')){
            return (
                <div className="d-flex align-items-center justify-content-center py-2 flex-column" style={{backgroundColor : "#E2E2E2", paddingTop: "40px", paddingBottom : "40px"}}>
                    <Breadcrumb style={{ width: '100%' }}>
                        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Vos démarches</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Faire ou modifier une demande</Breadcrumb.Item>
                        <Breadcrumb.Item active>{formulaire.data.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <ToastContainer />
                    <Form className="form-style" style={{alignItems: 'center'}}>
                        
                        <h2 style={{ fontSize: '130%' }}>FORMULAIRE{`${localStorage.getItem('preview')}`}</h2>
        
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
        } else if (localStorage.getItem('preview') == "true") {
            return (
                <div className="d-flex align-items-center justify-content-center py-2 flex-column" style={{backgroundColor : "#E2E2E2", paddingTop: "40px", paddingBottom : "40px"}}>
                    <Breadcrumb style={{ width: '100%' }}>
                        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Vos démarches</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Détails de la demande</Breadcrumb.Item>
                    </Breadcrumb>
                    <ToastContainer />
                    <Form className="form-style">
                        <div className='form-content'>
                            <h2 style={{ marginBottom: '50px', fontSize: 'large' }}>{formulaire.data.name}</h2>
                            <div className="row" style={{ textAlign: 'left' }}>
                                {answersForm.map((answer) => (
                                    <div>
                                        <Label 
                                            string={answer.question}
                                            style={{ marginTop: 5, fontWeight: 'bold' }}>
                                            {answer.question}
                                        </Label>
                                        <p>{answer.answer}</p>
                                    </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            {endFormButton}
                            <Button className="auth-form-btn" style={{width: 'auto', height: 'auto', padding: '15px',}} onClick={(e) =>printForm()}>
                                Imprimer la demande
                            </Button>
                        </div>
                    </Form>
                </div>
            )
        } else if (final && localStorage.getItem('preview') == "false") {
            return (
                <div className="d-flex align-items-center justify-content-center py-2 flex-column" style={{backgroundColor : "#E2E2E2", paddingTop: "40px", paddingBottom : "40px"}}>
                    <Breadcrumb style={{ width: '100%' }}>
                        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Vos démarches</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Faire ou modifier une demande</Breadcrumb.Item>
                        <Breadcrumb.Item active>{formulaire.data.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <ToastContainer />
                    <Form className="form-style" style={{alignItems: 'center'}}>
                        
                        <h2 style={{ fontSize: '130%' }}>{formulaire.data.name}</h2>
        
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginTop: '25%', marginBottom: '25%', }}>
                                <ImHappy style={{ fontSize: '50px', marginBottom: '30px' }}/>
                                <p>Votre demande a été soumise et enregistrée sous le numéro de référence qui vous sera communiqué par mail.</p>
                            </div>
                            {/* <Button className="auth-form-btn" style={{width: 'auto', height: 'auto', padding: '15px',}} onClick={(e) => window.location.pathname = `/query/${window.location.pathname.split('/').pop()}/${refNumber}`}>
                                Voir l'aperçu de la demande
                            </Button> */}
                            <Button className="auth-form-btn" style={{width: 'auto', height: 'auto', padding: '15px',}} onClick={(e) => window.location.pathname = `/statut-demande`}>
                                Vérifier le statut
                            </Button>
                        </div>
                    </Form>
                </div>
            )
        } else {
            setCurrent(0)
            localStorage.setItem('last_section_submitted','')
        }
    }
}


