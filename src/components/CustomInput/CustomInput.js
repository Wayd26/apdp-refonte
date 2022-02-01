import React from 'react';
import {Input,InputGroup,Label,FormGroup} from 'reactstrap';

export default function CustomInput({field,updateValue}) {




    if(field.type == 'checkbox'){
        return (
            <>
                <FormGroup check>
                    <Input type="checkbox" 
                        onClick={(e) => updateValue(field.name,e.target.checked)}
                        />
                    {' '}
                    <Label className="label-style" check>
                        {field.label}
                    </Label>
                </FormGroup>
            </>
        )
    } else if(field.type == 'select') {
        if(field.options.length > 0){
            updateValue(field.name,field.options[0].value)
        } 
        return (
            <>
                    <FormGroup>
                        <Label for={field.name}>
                            {field.label}
                        </Label>
                        <Input
                        id={field.name}
                        name={field.name}
                        type="select"
                        onChange={(e) => updateValue(field.name,e.target.value)}
                        >
                        {field.options.map(op => <option value={op.value}>{op.label}</option>)}
                        </Input>
                    </FormGroup>
            </>
        )

    } else {
        return (
            <>
                <FormGroup>
                <Label for={field.name}>{field.label}</Label>
                <Input 
                    className="form-input"
                    type={field.type} 
                    name={field.name} 
                    id={field.name}
                    onChange={(e) => updateValue(field.name,e.target.value)}
                    required={field.obligate}/>
                </FormGroup>
            </>
        )
    }
    
}
