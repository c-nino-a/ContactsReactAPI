import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Form, Button, Message, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import EmailAddresses from "./EmailAddresses";
import PostalAddresses from "./PostalAddresses";

const ContactForm = (props) => {
    const [showSaved,setShowSaved] = useState(false);
    const emptyPerson = {
        firstname:"",
        lastname:"",
        id:null,
        emailaddresses:[],
        postaladdresses:[]
    };
    const [person, setPerson] = useState(emptyPerson);

    const { id } = useParams();

    useEffect(()=>{

        (async ()=>{

            if(!id){ 
                return setPerson(emptyPerson);
            }

            const response = await fetch("/contact/"+id,{
                headers:{
                    "accepts":"application/json"
                }
            })

            const payload = await response.json();

            setPerson(payload);
        })()

    },[])

    
    const saveContact = async () =>{

        const packet = {
            method: "POST",
            headers: { "contentType":"application/json"},
            body: JSON.stringify(person)
        }

        await fetch('/contact',packet)

        setShowSaved(true);

        setTimeout(()=>{setShowSaved(false)}, 3000);
    }

    const handleFieldChange = field => {
        const {name, value} = field

        person[name] = value;

        setPerson({...person})
    }


    const {firstname, lastname} = person;

    return (
        <div>
            <Link to='/'>
                <Button icon>
                    <Icon name="left arrow"/>
                </Button>
            </Link>
            <Form onSubmit={saveContact}>

                <Form.Field>
                    <Form.Input
                        name="firstname"
                        label="First Name"
                        value={firstname}
                        onChange={(e,field)=>handleFieldChange(field)}
                    />
                </Form.Field>

                <Form.Field>
                    <Form.Input
                        name="lastname"
                        label="Last Name"
                        value={lastname}
                        onChange={(e,field)=>handleFieldChange(field)} 
                    />
                </Form.Field>
                <EmailAddresses props={{person, setPerson}}/>
                <PostalAddresses props={{person, setPerson}}/>

                <Button>Save</Button>
            </Form>
            {showSaved?<Message>Saved</Message>:null}
        </div>
    )
}

export default ContactForm;