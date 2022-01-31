import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import {form} from './data';
import {Form, Button} from 'reactstrap';
import './Dynamique.css'

export default function DynamiqueForm() {
    const [formData, setFormData] = useState({})

    const updateFormData = (key,value) => {
        const old = formData
        old[key] = value
        setFormData(old)
    }

    const handleSubmit = () => {
        console.log(formData)
    }

    return (
        <div className="d-flex align-items-center justify-content-center py-2 flex-column">
            <Form className="form-style">
                {form.fields.map(field => <CustomInput key={field.id} field={field} updateValue={updateFormData}/>)}
                <Button type='button' onClick={handleSubmit} className="submit-button">Submit</Button>
            </Form>
        </div>
    )
}


