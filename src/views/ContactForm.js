import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Form, Button, Message, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import EmailAddresses from "./EmailAddresses";
import PostalAddresses from "./PostalAddresses.js";

import { PersonDispatchContext, PersonStateContext } from "../provider/PersonProvider";

const ContactForm = (props) => {
    const [showSaved,setShowSaved] = useState(false);
    const emptyPerson = {
        firstname:"",
        lastname:"",
        id:null,
        emailaddresses:[],
        postaladdresses:[]
    };
    const state = useContext( PersonStateContext)
    const dispatch = useContext( PersonDispatchContext)

    const { id } = useParams();

    useEffect(()=>{

        (async ()=>{

            if(!id){ 
                return dispatch({type:'empty'});
            }

            const response = await fetch("/contact/"+id,{
                headers:{
                    "accepts":"application/json"
                }
            })

            const payload = await response.json();

            dispatch({type:'load', payload});
        })()

    },[])

    
    const saveContact = async () =>{

        const packet = {
            method: "POST",
            headers: { "contentType":"application/json"},
            body: JSON.stringify(state)
        }

        await fetch('/contact',packet)

        setShowSaved(true);

        setTimeout(()=>{setShowSaved(false)}, 3000);
    }



    const {firstname, lastname} = state;

    return (
        <div>
            <Link to='/'>
                <Button icon>
                    <Icon name="left arrow"/>
                </Button>
            </Link>
            {/* <TitleLabel/> */}

            <Form onSubmit={saveContact}>

                <Form.Field>
                    <Form.Input
                        name="firstname"
                        label="First Name"
                        value={firstname}
                        onChange={(e,payload)=>dispatch({type:'handleFieldChange',payload})}
                    />
                </Form.Field>

                <Form.Field>
                    <Form.Input
                        name="lastname"
                        label="Last Name"
                        value={lastname}
                        onChange={(e,payload)=>dispatch({type:'handleFieldChange',payload})} 
                    />
                </Form.Field>
                <EmailAddresses props={{state, setPerson: dispatch}}/>
                <PostalAddresses props={{state, setPerson: dispatch}}/>

                <Button>Save</Button>
            </Form>
            {showSaved?<Message color="green">Saved</Message>:null}
        </div>
    )
}

export default ContactForm;