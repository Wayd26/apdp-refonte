import React, {useState, useEffect} from 'react';
import {Input,InputGroup,Label,FormGroup} from 'reactstrap';
import './CustomInput.css'

export default function CustomInput({field, updateValue, updateDependentSection}) {
    const [currentRadio, setRadio] = useState(null)
    const [currentCheckBoxes, setCheckboxes] = useState([])
    const [fileInputsData, setFileInputsData] = useState([])

    const readBlob = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
      
        reader.onload = e => {
            console.log(e.target.result);
            setFileInputsData([...fileInputsData, e.target.result]);
            updateValue({
                answer_file: [...fileInputsData, e.target.result],
                // choice: {'group': field.option_group_id, 'value': null},
                choice: field.option_choices[0].id,
                question: field.id
            })
            resolve(e.target.result);
        };
      
        reader.readAsText(file);
    });

    if(field.input_type.element === 'select' || field.input_type.element === 'multi-select') {
        return (
            <>
                <FormGroup id='input_div'>
                    <label style={{ fontWeight: "normal", top: "15px", right: "-10px", position: "relative", backgroundColor: "white", padding: "0px 2px 0px 2px", fontSize: "12px", color: '#0d6efd', fontFamily: 'Montserrat',}} string={field.id} for={field.id}>{field.name}</label><br/>
                    <Input 
                    className='form-control' 
                    style={{ border: "1.5px solid #0d6efd", borderRadius: "5px", padding: "10px 15px", width:"100%", height:"50px", minWidth: "200px", fontFamily: 'Montserrat', }}
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
                        <label style={{ fontWeight: "normal", top: "15px", right: "-10px", position: "relative", backgroundColor: "white", padding: "0px 2px 0px 2px", fontSize: "12px", color: '#0d6efd', fontFamily: 'Montserrat',}} string={field.id} for={field.id}>{field.name}</label><br/>
                        <textarea 
                        className='form-control' 
                        style={{ border: "1.5px solid #0d6efd", borderRadius: "5px", padding: "10px 15px", minWidth: "200px", fontFamily: 'Montserrat', }} 
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
                        <Label string={field.id} style={{ fontWeight: "normal", backgroundColor: "white", fontSize: "12px", color: '#0d6efd', fontFamily: 'Montserrat', }}>
                            {field.name}
                        </Label>
                        {field.option_choices.map(op => 
                            <div style={{ color: "black", display: "flex" }}>
                                <Input 
                                 className="form-control"
                                 style={{ minWidth: "15px", width: "15px", height: "15px", marginRight: 10, fontFamily: 'Montserrat',}}
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
                                 style={{ fontWeight: "normal", fontSize: "12px", top: "-2px", right: "-5px", position: "relative", marginTop: 5, fontFamily: 'Montserrat',}}>
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
                        <Label string={field.id} style={{ fontWeight: "normal", backgroundColor: "white", fontSize: "12px", color: '#0d6efd', fontFamily: 'Montserrat', }}>
                            {field.name}
                        </Label>
                        {field.option_choices.map(op => 
                            <div style={{ display: "flex"}}> 
                                <Input 
                                 className="form-control" 
                                 style={{ minWidth: '16px', height: '16px', marginRight: '10px', position: 'relative', fontFamily: 'Montserrat',}} 
                                 type="checkbox"
                                 checked={currentCheckBoxes.includes(op.name)}
                                 onChange={(e) => {
                                    updateDependentSection(e.target.name)
                                    // setCheckbox(e.target.value)
                                    setCheckboxes([ ...currentCheckBoxes, e.target.value ])
                                    updateValue({
                                        answer_text: [ ...currentCheckBoxes, e.target.value ].join('; '),
                                        // choice: {'group': field.option_group_id, 'value': op.id},
                                        choice: e.target.id,
                                        question: field.id
                                    })
                                 }} 
                                 id={op.pivot.option_choice_id} 
                                 value={op.name}
                                 name={op.pivot.related_section}
                                />

                                <Label 
                                 string={op.name} 
                                 for={op.name} 
                                 style={{ fontWeight: "normal", fontSize: "12px", top: "-2px", right: "-5px", position: "relative", marginTop: 5, fontFamily: 'Montserrat',}}>
                                    {op.name}
                                </Label>
                            </div>
                        )}
                        
                    </FormGroup>
                </>
            )
        } else if(field.input_type.type === 'file'){
            return (
                <>
                    <FormGroup id='input_div'>
                        <label style={{ fontWeight: "normal", top: "15px", right: "-10px", position: "relative", backgroundColor: "white", padding: "0px 2px 0px 2px", fontSize: "12px", color: '#0d6efd', fontFamily: 'Montserrat',}} string={field.id} for={field.id}>{field.name}</label><br/>
                        <input 
                        className='form-control' 
                        style={{ border: "1.5px solid #0d6efd", borderRadius: "5px", width: "100%", height: "50px", padding: "0px 15px", fontFamily: 'Montserrat', minWidth: "200px", }} 
                        type={field.input_type.type} 
                        name={field.id} 
                        id={field.id}
                        multiple={true}
                        required = {field.answer_required === 0 ? false: true}
                        onChange={(e) => {
                            for (let index = 0; index < e.target.files.length; index++) {
                                const file = e.target.files[index];
                                readBlob(file);
                            }
                        }}/>
                        <div class="invalid-feedback" style={{ padding: "0px 15px", }}>
                            Champ invalide!!!
                        </div>
                    </FormGroup>
                </>
            )
        } else {
            return (
                <>
                    <FormGroup id='input_div'>
                        <label style={{ fontWeight: "normal", top: "15px", right: "-10px", position: "relative", backgroundColor: "white", padding: "0px 2px 0px 2px", fontSize: "12px", color: '#0d6efd', fontFamily: 'Montserrat',}} string={field.id} for={field.id}>{field.name}</label><br/>
                        <input 
                        className='form-control' 
                        style={{ border: "1.5px solid #0d6efd", borderRadius: "5px", width: "100%", height: "50px", padding: "0px 15px", fontFamily: 'Montserrat', minWidth: "200px", }} 
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