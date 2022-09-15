import React, {useState, useEffect} from 'react';
import {Input,InputGroup,Label,FormGroup} from 'reactstrap';
import './CustomInput.css'

export default function CustomInput({field, updateValue, updateDependentSection}) {
    const [currentRadio, setRadio] = useState(null)
    const [currentCheckBox, setCheckbox] = useState(null)

    if(field.input_type.element === 'select' || field.input_type.element === 'multi-select') {
        return (
            <>
                <FormGroup id='input_div'>
                    <label style={{ fontWeight: "normal", top: "15px", right: "-10px", position: "relative", backgroundColor: "white", padding: "0px 2px 0px 2px", fontSize: "12px", color: '#0d6efd'}} string={field.id} for={field.id}>{field.name}</label><br/>
                    <Input 
                    className='form-control' 
                    style={{ border: "1.5px solid #0d6efd", borderRadius: "5px", padding: "10px 15px", width:"100%", height:"50px", minWidth: "200px" }}
                    defaultValue={"None"}
                    name={field.id} 
                    required = {field.answer_required === 0 ? false: true}
                    id={field.id}
                    type="select"
                    onChange={(e) => {
                        updateDependentSection(e.target.name)
                        updateValue({
                            answer_text: e.target.value,
                            // choice: {'group': field.option_group_id, 'value': e.target.id},
                            choice: e.target.key,
                            question: field.id
                        })
                    }}>
                        <option value="None"></option>
                            {field.option_choices.map(op => <option key={op.pivot.option_choice_id} value={op.name} name={op.pivot.related_section}>{op.name}</option>)}
                    </Input>
                    <div class="invalid-feedback" style={{ padding: "0px 15px", }}>
                        Champ invalide!!!
                    </div>
                </FormGroup>
            </>
        )

    } else {
        if(field.input_type.element === 'textarea'){
            return (
                <>
                    <FormGroup id='input_div'>
                        <label style={{ fontWeight: "normal", top: "15px", right: "-10px", position: "relative", backgroundColor: "white", padding: "0px 2px 0px 2px", fontSize: "12px", color: '#0d6efd'}} string={field.id} for={field.id}>{field.name}</label><br/>
                        <textarea 
                        className='form-control' 
                        style={{ border: "1.5px solid #0d6efd", borderRadius: "5px", padding: "10px 15px", minWidth: "200px" }} 
                        name={field.id} 
                        required = {field.answer_required === 0 ? false: true}
                        id={field.id}
                        rows={6} 
                        cols={60}
                        onChange={(e) => {
                            updateValue({
                                answer_text: e.target.value,
                                // choice: {'group': field.option_group_id, 'value': null},
                                choice: field.option_choices[0].id,
                                question: field.id
                            })
                        }}/>
                        <div class="invalid-feedback" style={{ padding: "0px 15px", }}>
                            Champ invalide!!!
                        </div>
                    </FormGroup>
                </>
            )
        } else if(field.input_type.type === 'radio'){
            return (
                <>
                    <FormGroup style={{ textAlign: 'left', margin: "20px 0px", }}>
                        <Label string={field.id} style={{ fontWeight: "normal", backgroundColor: "white", fontSize: "12px", color: '#0d6efd' }}>
                            {field.name}
                        </Label>
                        {field.option_choices.map(op => 
                            <div style={{ color: "black", display: "flex" }}>
                                <Input 
                                 className="form-control"
                                 style={{ minWidth: "15px", width: "15px", height: "15px", marginRight: 10}}
                                 type="radio" 
                                 checked={currentRadio === op.name }
                                 onChange={(e) => {
                                    updateDependentSection(e.target.name)
                                    setRadio(e.target.value)
                                    updateValue({
                                        answer_text: e.target.value,
                                        // choice: {'group': field.option_group_id, 'value': op.id},
                                        choice: e.target.id,
                                        question: field.id
                                    })
                                 }} 
                                 id={op.pivot.option_choice_id} 
                                 value={op.name}
                                 name={op.pivot.related_section}/>
                                <Label 
                                 string={op.name} 
                                 for={op.name} 
                                 style={{ fontWeight: "normal", fontSize: "12px", top: "-2px", right: "-5px", position: "relative", marginTop: 5}}>
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
                                        choice: e.target.id,
                                        question: field.id
                                    })
                                 }} 
                                 id={op.pivot.option_choice_id} 
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
                    <FormGroup id='input_div'>
                        <label style={{ fontWeight: "normal", top: "15px", right: "-10px", position: "relative", backgroundColor: "white", padding: "0px 2px 0px 2px", fontSize: "12px", color: '#0d6efd'}} string={field.id} for={field.id}>{field.name}</label><br/>
                        <input 
                        className='form-control' 
                        style={{ border: "1.5px solid #0d6efd", borderRadius: "5px", width: "100%", height: "50px", padding: "0px 15px", minWidth: "200px", }} 
                        type={field.input_type.type} 
                        name={field.id} 
                        id={field.id}
                        required = {field.answer_required === 0 ? false: true}
                        onChange={(e) => {
                            updateValue({
                                answer_text: e.target.value,
                                // choice: {'group': field.option_group_id, 'value': null},
                                choice: field.option_choices[0].id,
                                question: field.id
                            })
                        }}/>
                        <div class="invalid-feedback" style={{ padding: "0px 15px", }}>
                            Champ invalide!!!
                        </div>
                    </FormGroup>
                </>
            )
        }        
    }
    
}