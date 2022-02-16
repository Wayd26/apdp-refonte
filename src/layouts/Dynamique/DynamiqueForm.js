import React, {useState, useEffect} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import form2 from './data1.json';
import {Form, Button} from 'reactstrap';
import { Stepper, Step } from 'react-form-stepper';
import './Dynamique.css'
import {getForm} from '../../http/http'

export default function DynamiqueForm() {
    const [formData, setFormData] = useState({})
    const [current, setCurrent] = useState(0)
    const [formulaire, setFormulaire] = useState(null)

    const loadForm = async () => {
        const resp = await getForm(window.location.pathname.split('/').pop())
        if(resp.response && resp.response.status !== 200){
            console.log(resp.response)
        } else {
            console.log(resp.data.data)
            setFormulaire(resp.data)
        }
    }

    useEffect(() => {
        console.log(window.location.pathname.split('/').pop())
        loadForm()

        
    }, [])

    const updateFormData = (key,value) => {
        const old = formData
        old[key] = value
        setFormData(old)
    }

    const handleSubmit = () => {
        console.log(formData)
    }

    const next = () => {
        setCurrent(current + 1)
      };
    
    const  prev = () => {
        setCurrent(current - 1)
      };

    return (
        <div className="d-flex align-items-center justify-content-center py-2 flex-column">
            <Form className="form-style">
            
                <Stepper activeStep={current}>
               
                    {formulaire && formulaire.data.sections.map((section) => (
                        <Step label={section.name} />    
                    ))}</Stepper>
                    {formulaire && formulaire.data.sections[current].questions.map((field) => (
                            <CustomInput key={field.id} field={field} updateValue={updateFormData}/>
                        ))
                       }
                {formulaire && current < formulaire.data.sections.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                    Next
                </Button>
                )}
                {formulaire && current === formulaire.data.sections.length - 1 && (
                <Button type="primary" onClick={handleSubmit}>
                    Valider
                </Button>
                )}
                {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                </Button>)}
                {/* <Button type='button' onClick={handleSubmit} className="submit-button">Submit</Button> */}
            </Form>
        </div>
    )
}


