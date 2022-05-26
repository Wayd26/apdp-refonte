import React, {useState, useEffect} from 'react';
import {Label, Form, Button} from 'reactstrap';
import './DetailsDemande.css'
import {getForm, getRequestedQuery} from '../../http/http';

export default function DetailsDemande() {
    const [formulaire, setFormulaire] = useState(null);
    const [query, setQuery] = useState({});
    const [answersForm, setAnswersForm] = useState([]);
    

    const loadForm = async () => {
        const formType = window.location.pathname.split('/')[window.location.pathname.split('/').length - 2];
        const respForm = await getForm(formType)
        if (respForm.response && respForm.response.status !== 200){
            // console.log(resp.response.header);
        } else {
            setFormulaire(respForm.data);
            const refNumber = window.location.pathname.split('/').pop();
            const resp = await getRequestedQuery(refNumber);
            console.log("<pppp", resp)
            if(!resp.data.data.id){
                alert('Rien à afficher!!!');
                window.history.back();
            } else {
                setQuery(resp.data.data);
                var answersFormArray = [];
                var questionsArray = [];
                for (let iterator = 0; iterator < respForm.data.data.sections.length; iterator++) {
                    const section = respForm.data.data.sections[iterator];
                    for (let newIter = 0; newIter < section.questions.length; newIter++) {
                        const question = section.questions[newIter];
                        if (!questionsArray.includes(question)){
                            questionsArray.push(question);
                        }
                    }
                }
                for (let index = 0; index < resp.data.data.answers.length; index++) {
                    const answer = resp.data.data.answers[index];
                    for (let newIdex = 0; newIdex < questionsArray.length; newIdex++) {
                        const question = questionsArray[newIdex];
                        if (answer.question_id == question.id) {
                            answersFormArray.push({'question': question.name, 'answer': answer.answer_text})
                        }
                    }
                }
                // console.log(questionsArray.length);
                // console.log(answersFormArray);
                setAnswersForm(answersFormArray);
            }
        }
    }

    useEffect(() => {
        loadForm();
    }, [])

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

    if (!formulaire) {
        return null
    }

    return (
        <div className="d-flex align-items-center justify-content-center py-2 flex-column" style={{backgroundColor : "#E2E2E2", paddingTop: "40px", paddingBottom : "40px"}}>
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
                <div className='row' style={{ justifyContent: "space-between" }}>
                    <Button className="auth-form-btn" style={{width: 'auto', height: 'auto', padding: '15px',}} onClick={(e) => window.location.pathname = `/statut-demande`}>
                        Vérifier le statut
                    </Button>
                    <Button className="auth-form-btn" style={{width: 'auto', height: 'auto', padding: '15px',}} onClick={(e) =>printForm()}>
                        Imprimer la demande
                    </Button>
                </div>
            </Form>
        </div>
    )
}


