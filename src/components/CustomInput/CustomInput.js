import React from 'react';
import {Input,InputGroup,Label,FormGroup} from 'reactstrap';

export default function CustomInput({field,updateValue}) {




    if(field.input_type.name == 'checkbox'){
        return (
            <>
                <FormGroup check>
                    <Input type="checkbox" 
                        onClick={(e) => updateValue(field.title,e.target.checked)}
                        className="form-control"
                        />
                    {' '}
                    <Label className="label-style" check>
                        {field.name}
                    </Label>
                </FormGroup>
            </>
        )
    } else if(field.input_type.name == 'select' || field.input_type.name == 'multi-select') {
        if(field.option_group && field.option_group.group_values.length > 0){
            updateValue(field.title,field.option_group.group_values[0].value)
        } 
        return (
            <>
                    <FormGroup>
                        <Label for={field.title}>
                            {field.name}
                        </Label>
                        <Input
                        className="form-control"
                        id={field.title}
                        name={field.title}
                        type="select"
                        onChange={(e) => updateValue(field.title,e.target.value)}
                        >
                        {field.option_group.group_values.map(op => <option key={op.id} value={op.slug}>{op.name}</option>)}
                        </Input>
                    </FormGroup>
            </>
        )

    } else {
        return (
            <>
                <FormGroup className="d-flex flex-column justify-content-center align-items-center">
                <Label for={field.title}>{field.name}</Label>
                <Input 
                    className="form-control"
                    type={field.input_type.name} 
                    name={field.title} 
                    id={field.title}
                    onChange={(e) => updateValue(field.title,e.target.value)}
                    // required={field.obligate}

                    />
                </FormGroup>
            </>
        )
    }
    
}
