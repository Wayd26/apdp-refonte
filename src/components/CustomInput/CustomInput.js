import React, {useState, useEffect} from 'react';
import {Input,InputGroup,Label,FormGroup} from 'reactstrap';

export default function CustomInput({field,updateValue}) {
    const [currentRadio, setRadio] = useState(null);
    const [currentCheckBox, setCheckbox] = useState(null);

    if(field.input_type.element == 'select' || field.input_type.element == 'multi-select') {
        return (
            <>
                    <FormGroup>
                        <Label for={field.id}>
                            {field.name}
                        </Label>
                        <Input
                        defaultValue={"None"}
                        className="form-control"
                        id={field.id}
                        name={field.id}
                        required = {field.answer_required === 0 ? false: true}
                        type="select"
                        onChange={(e) => {
                            updateValue({
                                answer_text: e.target.value,
                                option: {'group': field.option_group.id, 'value': e.target.id},
                                question: field.id
                            });
                        }}
                        >
                            <option value="None"></option>
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
                    <Label for={field.id}>{field.name}</Label>
                    <Input 
                        className="form-control"
                        type={field.input_type.element} 
                        name={field.id} 
                        required = {field.answer_required === 0 ? false: true}
                        id={field.id}
                        onChange={(e) => {
                            updateValue({
                                answer_text: e.target.value,
                                option: {'group': field.option_group.id, 'value': null},
                                question: field.id
                            });
                        }}
                        // required={field.obligate}
    
                        />
                    </FormGroup>
                </>
            )
        } else if(field.input_type.type == 'radio'){
            return (
                <>
                    <FormGroup>
                        <Label for={field.id}>
                            {field.name}
                        </Label>
                        {field.option_group.group_values.map(op => 
                            <div 
                             style={{ display: "flex"}}>
                                <Input 
                                 className="form-control" 
                                 style={{ width: "10px", height: "25px", marginRight: 10}}
                                 type="radio" 
                                 checked={currentRadio === op.slug }
                                 onChange={(e) => {
                                    setRadio(e.target.value)
                                    updateValue({
                                        answer_text: e.target.value,
                                        option: {'group': field.option_group.id, 'value': op.id},
                                        question: field.id
                                    });
                                 }} 
                                 key={op.id} 
                                 value={op.slug}>
                                    {op.name}
                                </Input> 
                                <Label 
                                 for={op.name} 
                                 style={{ marginTop: 5 }}>
                                    {op.name}
                                </Label>
                            </div>
                        )};
                    </FormGroup>
                </>
            )
        } else if(field.input_type.type == 'checkbox'){
            return (
                <>
                    <FormGroup>
                        <Label for={field.id}>
                            {field.name}
                        </Label>
                        {field.option_group.group_values.map(op => 
                            <div style={{ display: "flex"}}> 
                                <Input 
                                 className="form-control" 
                                 style={{ width: "10px", height: "25px", marginRight: 10}} 
                                 type="checkbox"
                                 checked={currentCheckBox === op.slug }
                                 onChange={(e) => {
                                    setCheckbox(e.target.value);
                                    updateValue({
                                        answer_text: e.target.value,
                                        option: {'group': field.option_group.id, 'value': op.id},
                                        question: field.id
                                    });
                                 }} 
                                 key={op.id} 
                                 value={op.slug}>
                                    {op.name}
                                </Input> 

                                <Label 
                                 for={op.name} 
                                 style={{ marginTop: 5 }}>{op.name}</Label>
                            </div>
                        )};
                        
                    </FormGroup>
                </>
            )
        } else {
            return (
                <>
                    <FormGroup className="d-flex flex-column justify-content-center align-items-center">
                    <Label for={field.id}>{field.name}</Label>
                    <Input 
                        className="form-control"
                        type={field.input_type.type} 
                        name={field.id} 
                        id={field.id}
                        required = {field.answer_required === 0 ? false: true}
                        onChange={(e) => {
                            updateValue({
                                answer_text: e.target.value,
                                option: {'group': field.option_group.id, 'value': null},
                                question: field.id
                            });
                        }}
                        // required={field.obligate}
    
                        />
                    </FormGroup>
                </>
            )
        }        
    }
    
}
