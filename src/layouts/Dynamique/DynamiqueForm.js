import React, {useState, useEffect} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import {Label, Form, Button, Input} from 'reactstrap';
import {ImSad, ImHappy} from "react-icons/im";
import './Dynamique.css';
import {getForm, submitFormSection, getRequestedQuery} from '../../http/http';
import { ToastContainer, toast } from 'react-toastify';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Stepper, Step } from 'react-form-stepper';

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
    // const [filledSections, setFilledSections] = useState(0);
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
                // Setting last section submitted and redirecting to the section after
                if (parseInt(localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_last_section_submitted`)) === resp.data.data.sections[resp.data.data.sections.length - 1].id || isNaN(parseInt(localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_last_section_submitted`))) || localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_last_section_submitted`) === null ) {
                    setCurrent(0)
                    localStorage.setItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_last_section_submitted`, '0');
                } else {
                    setCurrent(parseInt(localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_last_section_submitted`)));
                    for (let i = 0; i < resp.data.data.sections.length; i++) {
                        const element = resp.data.data.sections[i];
                        if (element.id === parseInt(localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_last_section_submitted`))){
                            setCurrent(resp.data.data.sections.indexOf(element)  + 1);
                            localStorage.setItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`,resp.data.data.sections.indexOf(element)  + 1)
                            console.log("IDDDD", element.id);
                            console.log("element", element);
                            console.log("resp.data.data.sections.indexOf(element)", resp.data.data.sections.indexOf(element));
                            console.log("resp.data.data.sections", resp.data.data.sections);
                        }
                    }
                }

                // Setting filled sections
                if (localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`) == null || isNaN( localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`)) ||  localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`) == ""){
                    localStorage.setItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`,0)
                }

                // Setting preview variable to false
                if (localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_preview`) == null || isNaN( localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_preview`)) ||  localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_preview`) == ""){
                    localStorage.setItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_preview`, false);
                }

                // Setting final variable to false
                if (localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_final`) == null || isNaN( localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_final`)) ||  localStorage.getItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_final`) == ""){
                    localStorage.setItem(`${resp.data.data.name.replaceAll(' ','_').toLowerCase()}_final`,false)
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
        localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_last_standard_section`,current)

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
        var formContent = document.getElementsByClassName('form-style')[0].outerHTML;
        var printWindow = window.open('', '', 'height=400,width=800');
        printWindow.document.write('<html><head><title>APDP Formulaire</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(formContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }

    const getFormQuery = async (e) => {
        try {
            e.preventDefault();
        } catch (error) {
            console.log("error", error)
        }
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
    }

    const handleSubmit = async (e) => {
        // console.log('Current Dependent Section ', currentDependentSection);
        if (formulaire.data.sections.length > 1){
            e.preventDefault();
        }
        console.log("FOOORRRMMMM DATAAAA", formData);
        // setFilledSections(filledSections+1);
        // localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`,parseInt(localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`))+1)
        let responseSubmit;
        try {
            responseSubmit = await submitFormSection(formulaire.data.id, formulaire.data.sections[current].id, formData);
        } catch (error) {
            responseSubmit = await submitFormSection(formulaire.data.id, parseInt(localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_last_section_submitted`)), formData);
            
        }
        try {
            if (responseSubmit.data.success){
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`,parseInt(localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`))+1)
            }
            console.log("RESSSSSSSS", responseSubmit);
            console.log("FINAL", localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_final`));
            console.log("FILLED SECTIONS", parseInt(localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`)));
            console.log("All Sections minus Dependent SECTIONS", formulaire.data.sections.length - dependentSections.length);
            setRefNumber(responseSubmit.data.data[0].submit_id);
            setResponseCounter(formData.answers.length);
            if (responseSubmit.data.data['last_submitted_section'] != null){
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_last_section_submitted`, responseSubmit.data.data['last_submitted_section']);
            } else {
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_last_section_submitted`, formulaire.data.sections[current].id);
            }
            if (localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_final`) == 'true'){
                console.log("Last submit!!!", localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_final`), responseSubmit);
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`,0)
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
                    setCurrentDependentSection(null);
                    setCurrent(parseInt(localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_last_standard_section`)) + 1);
                    localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_last_standard_section`,'');
                } else {
                    if (currentDependentSection) {
                        for (let f = 0; f < formulaire.data.sections.length; f++) {
                            const element = formulaire.data.sections[f];
                            if (String(element.id) === currentDependentSection){
                                setCurrent(formulaire.data.sections.indexOf(element));
                            }
                        }
                    } else {
                        setCurrent(current + 1);
                    }
                }
            }
        } catch (error) {
            toast.error("Une erreur est survenue !!!");
            console.log(error);
        }
    }

    if (formulaire && formulaire.data.sections.length > 1){
        var stepper = <div className='stepper-div'>
            <Stepper activeStep={current} connectorStyleConfig={{ disabledColor: 'white', activeColor: 'blue', size: 3 }} styleConfig={{ inactiveBgColor: 'white', inactiveTextColor: 'white', activeTextColor: '#ffc107', activeBgColor: '#ffc107', completedBgColor: '#2b71d3', completedTextColor: '#2b71d3', size: 30, labelFontSize: '1.5rem', circleFontSize: '1.5rem' }} hideConnectors={false}>
                {formulaire && formulaire.data.sections.map((section) => (
                    <Step style={{margin: '0px 50px'}}/>
                ))}
            </Stepper>
        </div>
    } else {
        var stepper = ""
    }

    if (dependentSections.length > 0){
        if (formulaire && formulaire.data.sections.length > 1 && parseInt(localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`)) >= formulaire.data.sections.length - dependentSections.length && localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`) == "true"){
            var endFormButton = <div id='button-submit'> <Button style={{ marginTop: "50px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "#093d62", color: "white", fontWeight: "bold", }} className="auth-form-btn" type="submit"  onClick={(e) => {
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_final`,true);
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`,false);
            }}>
                Soumettre
            </Button></div>
        } else if(formulaire && formulaire.data.sections.length > 1 && parseInt(localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`)) >= formulaire.data.sections.length - dependentSections.length && localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`) == "false"){
            var endFormButton = <div id='button-next'><Button style={{ marginTop: "50px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "#093d62", color: "white", fontWeight: "bold", }} className="auth-form-btn" type="submit" onClick={(e) => {
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`,true);
                getFormQuery();
            }}>
            Prévisualiser
        </Button></div>
        } else if(formulaire && formulaire.data.sections.length == 1){
            var endFormButton = <div id='button-submit'> <Button  style={{ marginTop: "50px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "#093d62", color: "white", fontWeight: "bold", }} type="submit"  onClick={(e) => {
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_final`,true);
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`,false);
            }}>
                Soumettre
            </Button></div>
        } else {
            var endFormButton = <div id='button-next'><Button  style={{ marginTop: "50px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "#093d62", color: "white", fontWeight: "bold", }} className="auth-form-btn" type="submit" onClick={(e) => {
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_final`,false);
            }}>
                Suivant
            </Button></div>
        }
    } else {
        if (formulaire && formulaire.data.sections.length > 1 && parseInt(localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`)) >= formulaire.data.sections.length && localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`) == "true"){
            var endFormButton = <div id='button-submit'> <Button style={{ marginTop: "50px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "#093d62", color: "white", fontWeight: "bold", }} className="auth-form-btn" type="submit"  onClick={(e) => {
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_final`,true);
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`,false);
            }}>
                Soumettre
            </Button></div>
        } else if(formulaire && formulaire.data.sections.length > 1 && parseInt(localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_filledSections`)) >= formulaire.data.sections.length - 1 && localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`) == "false"){
            var endFormButton = <div id='button-next'><Button style={{ marginTop: "50px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "#093d62", color: "white", fontWeight: "bold", }} className="auth-form-btn" type="submit" onClick={(e) => {
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`,true);
                getFormQuery();
            }}>
            Prévisualiser
        </Button></div>
        } else if(formulaire && formulaire.data.sections.length == 1){
            var endFormButton = <div id='button-submit'> <Button  style={{ marginTop: "50px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "#093d62", color: "white", fontWeight: "bold", }} type="button"  onClick={(e) => {
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_final`,true);
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`,false);
                handleSubmit();
            }}>
                Soumettre
            </Button></div>
        } else {
            var endFormButton = <div id='button-next'><Button  style={{ marginTop: "50px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "#093d62", color: "white", fontWeight: "bold", }} className="auth-form-btn" type="submit" onClick={(e) => {
                localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_final`,false);
            }}>
                Suivant
            </Button></div>
        }
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
                        {/* <Breadcrumb style={{ width: '100%' }}>
                            <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Vos démarches</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Faire ou modifier une demande</Breadcrumb.Item>
                            <Breadcrumb.Item active>{formulaire.data.name}</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <ToastContainer />
                        {stepper}
                        <div className={"query"} id={"query"} style={{ paddingTop: "40px", paddingBottom: "40px", width: "80%", margin: "auto"}}>
                            {/* Title */}
                            <h4 className={'page-title-query'} style={{background: "#4385f6 0% 0% no-repeat padding-box", paddingTop: "40px", paddingBottom: "40px", borderRadius: "5px", fontWeight: 300, fontSize: 'x-large'}}>{formulaire.data.name.toUpperCase()}</h4>


                            <form onSubmit={handleSubmit} style={{background: "#ffffff", paddingTop: "40px", paddingBottom: "40px", paddingRight: "10%", paddingLeft: "10%", borderRadius: "5px", textAlign: "left",}}>
                                <div className="row">
                                    {formulaire && formulaire.data.sections[current].questions.map((field) => (
                                        <div class="col-sm-6">
                                            <CustomInput key={field.id} field={field} updateValue={updateFormData} updateDependentSection={updateDependentSection}/>
                                        </div>
                                    ))
                                    }
                                </div>
                                <div>
                                    {endFormButton}
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        } else {
            setCurrent(current+1);
        }
    } catch (error) {
        if (localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_final`) == 'false' && localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`) == 'false'){
            return (
                <div className="d-flex align-items-center justify-content-center py-2 flex-column" style={{backgroundColor : "#E2E2E2", paddingTop: "40px", paddingBottom : "40px"}}>
                    {/* <Breadcrumb style={{ width: '100%' }}>
                        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Vos démarches</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Faire ou modifier une demande</Breadcrumb.Item>
                        <Breadcrumb.Item active>{formulaire.data.name}</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <ToastContainer />
                    <Form className="form-style" style={{alignItems: 'center'}}>
        
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginTop: '50%', marginBottom: '50%', }}>
                                <ImSad style={{ fontSize: '50px', marginBottom: '30px' }}/>
                                <p>Rien à afficher</p>
                            </div>
                            <Button className="auth-form-btn" style={{ margin: "0px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "#ffbe00", borderColor: '#ffbe00', color: "white", fontWeight: "bold", float: 'right' }} onClick={(e) => window.location.pathname = '/'}>
                                Retourner à l'accueil
                            </Button>
                        </div>
                    </Form>
                </div>
            )
        } else if (localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`) == "true") {
            return (
                <div className="d-flex align-items-center justify-content-center py-2 flex-column" style={{backgroundColor : "#E2E2E2", paddingTop: "40px", paddingBottom : "40px"}}>
                    {/* <Breadcrumb style={{ width: '100%' }}>
                        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Vos démarches</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Détails de la demande</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <ToastContainer />
                    <Form className="form-style" onSubmit={handleSubmit}>
                        <h2 style={{ marginBottom: '50px', fontSize: 'large', fontFamily: 'Montserrat', }}>RECAPITULATIF</h2>
                        <div className="row" style={{ alignItems: 'center', marginBottom: '30px', }}>
                            <div className='col-sm-6'>
                                <h2 style={{ fontSize: 'large', float: 'left', fontFamily: 'Montserrat', }}>N° de dépôt: {refNumber}</h2>
                            </div>
                            <div class="col-sm-6">
                                <Button className="auth-form-btn" style={{ margin: "0px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "#ffbe00", borderColor: '#ffbe00', color: "white", fontWeight: "bold", float: 'right' }} onClick={(e) =>printForm()}>
                                    Imprimer la demande
                                </Button>
                            </div>
                        </div>
                        <div className="row" style={{ textAlign: 'left' }}>
                            <div style={{ marginBottom: '30px' }}>
                                <table style={{ maxWidth: 'none', width: '100%', border: '2px solid rgb(9, 61, 98)' }}>
                                    {answersForm.map((answer) => (
                                                <tr style={{ border: '2px solid rgb(9, 61, 98)' }}>
                                                    <td style={{ backgroundColor: 'rgb(9, 61, 98)', color: 'white',padding: '10px', width: '50%', fontFamily: 'Montserrat', }}>{answer.question}</td>
                                                    <td style={{ padding: '10px', width: '50%', fontFamily: 'Montserrat', }}>{answer.answer}</td>
                                                </tr>
                                        ))
                                    }
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            {endFormButton}
                        </div>
                    </Form>
                </div>
            )
        } else if (localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_final`) == 'true' && localStorage.getItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_preview`) == "false") {
            return (
                <div className="d-flex align-items-center justify-content-center py-2 flex-column" style={{backgroundColor : "#E2E2E2", paddingTop: "40px", paddingBottom : "40px"}}>
                    {/* <Breadcrumb style={{ width: '100%' }}>
                        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Vos démarches</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Faire ou modifier une demande</Breadcrumb.Item>
                        <Breadcrumb.Item active>{formulaire.data.name}</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <ToastContainer />
                    <Form className="form-style" style={{alignItems: 'center'}}>
                        
                        <h2 style={{ fontSize: 'xx-large', fontWeight: 'lighter', textTransform: 'uppercase' }}>{formulaire.data.name}</h2>
        
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginTop: '25%', marginBottom: '25%', }}>
                                <ImHappy style={{ fontSize: '50px', marginBottom: '30px' }}/>
                                <p style={{ fontFamily: 'Montserrat', }}>Votre demande a été soumise et enregistrée sous le numéro de référence qui vous sera communiqué par mail.</p>
                            </div>
                            {/* <Button className="auth-form-btn" style={{width: 'auto', height: 'auto', padding: '15px',}} onClick={(e) => window.location.pathname = `/query/${window.location.pathname.split('/').pop()}/${refNumber}`}>
                                Voir l'aperçu de la demande
                            </Button> */}
                            <Button className="auth-form-btn" style={{ margin: "0px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "rgb(9, 61, 98)", borderColor: 'rgb(9, 61, 98)', color: "white", fontWeight: "bold" }} onClick={(e) => window.location.pathname = `/statut-demande`}>
                                Vérifier le statut
                            </Button>
                        </div>
                    </Form>
                </div>
            )
        } else {
            setCurrent(0)
            localStorage.setItem(`${formulaire.data.name.replaceAll(' ','_').toLowerCase()}_last_section_submitted`,'')
        }
    }
}


