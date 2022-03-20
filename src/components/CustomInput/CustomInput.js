import React, {useState, useEffect} from 'react';
import {Input,InputGroup,Label,FormGroup} from 'reactstrap';

export default function CustomInput({field,updateValue}) {
    const [currentRadio, setRadio] = useState(null);
    const [currentCheckBox, setCheckbox] = useState(null);
    



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
    } else if(field.input_type.element == 'select' || field.input_type.element == 'multi-select') {
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
        if(field.input_type.element == 'textarea'){
            return (
                <>
                    <FormGroup className="d-flex flex-column justify-content-center align-items-center">
                    <Label for={field.title}>{field.name}</Label>
                    <Input 
                        className="form-control"
                        type={field.input_type.element} 
                        name={field.title} 
                        id={field.title}
                        onChange={(e) => updateValue(field.title,e.target.value)}
                        // required={field.obligate}
    
                        />
                    </FormGroup>
                </>
            )
        } else if(field.input_type.type == 'radio'){
            return (
                <>
                    <FormGroup>
                        <Label for={field.title}>
                            {field.name}
                        </Label>
                        {field.option_group.group_values.map(op => 
                        <div style={{ display: "flex"}}> <Input className="form-control" style={{ width: "10px",
                            height: "25px", marginRight: 10}} type="radio" checked={currentRadio === op.slug } onChange={(e) => setRadio(e.target.value)} key={op.id} value={op.slug}>{op.name}</Input> <Label for={op.name} style={{ marginTop: 5 }}>{op.name}</Label></div>)}
                        
                    </FormGroup>
                </>
            )
        } else if(field.input_type.type == 'checkbox'){
            return (
                <>
                    <FormGroup>
                        <Label for={field.title}>
                            {field.name}
                        </Label>
                        {field.option_group.group_values.map(op => 
                        <div style={{ display: "flex"}}> <Input className="form-control" style={{ width: "10px",
                        height: "25px", marginRight: 10}} type="checkbox" onChange={(e) => setCheckbox(e.target.value)} key={op.id} value={op.slug}>{op.name}</Input> <Label for={op.name} style={{ marginTop: 5 }}>{op.name}</Label></div>)}
                        
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
                        type={field.input_type.type} 
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
    
}
