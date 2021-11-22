import { useEffect,useState } from "react";
import {useParams} from "react-router";
import {Button, Form} from "semantic-ui-react";

const ContactForm = (props) => {
 
    const [person, setPerson] = useState({
        firstname:"",
        lastname:"",
        id:null,
        emailaddresses:[],
        postaladdresses:[]


    })
    const {id} = useParams()

    useEffect(() => {
        (async () =>{
            const response = await fetch('/contact/'+id)

            const payload = await response.json()

            setPerson(payload)

        })()
    }, [])

    const {firstname,lastname}=person


 return ( <>
        <Form>
            <Form.Field>
                <Form.Input name='firstname' label='First Name' value=
                {person.firstname} />
            </Form.Field>
            <Form.Field>
                <Form.Input name='lastname' label='Last Name' value=
                {person.lastname} />
            </Form.Field>
            
            <Button>Save</Button>
        </Form> 
        </>


    )
}

export default ContactForm