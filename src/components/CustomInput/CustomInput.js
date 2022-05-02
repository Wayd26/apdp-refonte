import React, {useState, useEffect} from 'react'
import {Input,InputGroup,Label,FormGroup} from 'reactstrap'
import './CustomInput.css'

export default function CustomInput({field, updateValue, updateDependentSection}) {
    const [currentRadio, setRadio] = useState(null)
    const [currentCheckBox, setCheckbox] = useState(null)

    if(field.input_type.element === 'select' || field.input_type.element === 'multi-select') {
        return (
            <>
                    <FormGroup style={{ textAlign: 'left' }}>
                        <Label string={field.id}>
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
                            updateDependentSection(e.target.name)
                            updateValue({
                                answer_text: e.target.value,
                                // choice: {'group': field.option_group_id, 'value': e.target.id},
                                choice: field.option_group_id,
                                question: field.id
                            })
                        }}
                        
                        >
                            <option value="None"></option>
                            {field.option_choices.map(op => <option key={op.id} value={op.name} name={op.pivot.related_section}>{op.name}</option>)}
                        </Input>
                    </FormGroup>
            </>
        )

    } else {
        if(field.input_type.element === 'textarea'){
            return (
                <>
                    <FormGroup className="d-flex flex-row justify-content-left align-items-left mb-3" style={{ alignSelf: 'flex-start' }}>
                    <Label string={field.id}>{field.name}</Label>
                    <Input 
                        className="form-control"
                        type={field.input_type.element} 
                        name={field.id} 
                        required = {field.answer_required === 0 ? false: true}
                        id={field.id}
                        onChange={(e) => {
                            updateValue({
                                answer_text: e.target.value,
                                // choice: {'group': field.option_group_id, 'value': null},
                                choice: field.option_group_id,
                                question: field.id
                            })
                        }}
                        // required={field.obligate}
    
                        />
                    </FormGroup>
                </>
            )
        } else if(field.input_type.type === 'radio'){
            return (
                <>
                    <FormGroup style={{ textAlign: 'left', margin: "20px 0px", }}>
                        <Label string={field.id}>
                            {field.name}
                        </Label>
                        {field.option_choices.map(op => 
                            <div 
                             style={{ display: "flex",}}>
                                <Input 
                                 className="form-control" 
                                 style={{ width: "15px", height: "15px", marginRight: 10}}
                                 type="radio" 
                                 checked={currentRadio === op.name }
                                 onChange={(e) => {
                                    updateDependentSection(e.target.name)
                                    setRadio(e.target.value)
                                    updateValue({
                                        answer_text: e.target.value,
                                        // choice: {'group': field.option_group_id, 'value': op.id},
                                        choice: field.option_group_id,
                                        question: field.id
                                    })
                                 }} 
                                 key={op.id} 
                                 value={op.name}
                                 name={op.pivot.related_section}/> 
                                <Label 
                                 string={op.name} 
                                 style={{ marginTop: 5 }}>
                                    {op.name}
                                </Label>
                            </div>
                        )}
                    </FormGroup>
                </>
            )
        } else if(field.input_type.type === 'checkbox'){
            return (
                <>
                    <FormGroup style={{ textAlign: 'left' }}>
                        <Label string={field.id}>
                            {field.name}
                        </Label>
                        {field.option_choices.map(op => 
                            <div style={{ display: "flex"}}> 
                                <Input 
                                 className="form-control" 
                                 style={{ width: "10px", height: "25px", marginRight: 10}} 
                                 type="checkbox"
                                 checked={currentCheckBox === op.name }
                                 onChange={(e) => {
                                    updateDependentSection(e.target.name)
                                    setCheckbox(e.target.value)
                                    updateValue({
                                        answer_text: e.target.value,
                                        // choice: {'group': field.option_group_id, 'value': op.id},
                                        choice: field.option_group_id,
                                        question: field.id
                                    })
                                 }} 
                                 key={op.id} 
                                 value={op.name}
                                 name={op.pivot.related_section}>
                                    {op.name}
                                </Input> 

                                <Label 
                                 string={op.name} 
                                 style={{ marginTop: 5 }}>{op.name}</Label>
                            </div>
                        )}
                        
                    </FormGroup>
                </>
            )
        } else {
            return (
                <>
                    <FormGroup className="d-flex flex-row justify-content-left align-items-left mb-3" style={{ alignSelf: 'flex-start', justifyContent: "space-between", }}>
                        <Label string={field.id}>{field.name}</Label>
                        <Input 
                            className="form-control"
                            type={field.input_type.type} 
                            name={field.id} 
                            id={field.id}
                            required = {field.answer_required === 0 ? false: true}
                            onChange={(e) => {
                                updateValue({
                                    answer_text: e.target.value,
                                    // choice: {'group': field.option_group_id, 'value': null},
                                    choice: field.option_group_id,
                                    question: field.id
                                })
                            }}
                            // required={field.obligate}
        
                        />
                    </FormGroup>
                </>
            )
        }        
    }
    
}
