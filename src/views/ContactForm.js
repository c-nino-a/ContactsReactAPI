import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Form, Button, Message, Table, Icon, Input} from "semantic-ui-react";


const ContactForm = (props) => {
    const [showSaved,setShowSaved] = useState(false);
    const [person, setPerson] = useState({
        firstname:"",
        lastname:"",
        id:null,
        emailaddresses:[],
        postaladdresses:[]
    })
    
    const { id } = useParams();

    useEffect(()=>{

        (async ()=>{

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
            method: 'POST',
            headers: { 'contentType':'application/json'},
            body: JSON.stringify(person)
        }

        await fetch('/contact')

        setShowSaved(true);

        setTimeout(()=>{setShowSaved(false)}, 3000);
    }

    const handleFieldChange = field => {
        const {name, value} = field

        person[name] = value;

        setPerson({...person})
    }

    const handleEmailAddressChange = ({field, idx}) => {
        const {value} = field;

        person.emailaddresses[idx] = value;

        setPerson({...person});
    }

    const addEmailAddressField = () => {
        person.emailaddresses.push("");

        setPerson({...person});
    }

    const removeEmailAddressField = (idx) => {
        person.emailaddresses.splice(idx, 1)

        setPerson({...person});
    }

    const {firstname, lastname, emailaddresses, postaladdresses} = person;

    return (
        <div>
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
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                <Button icon type="button" onClick={addEmailAddressField}>
                                    <Icon name='plus'></Icon>
                                </Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {emailaddresses?.map((item,idx)=>{
                        return(
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Button icon type="button" onClick={()=>{removeEmailAddressField(idx)}}>
                                            <Icon name='minus'></Icon>
                                        </Button>
                                        <Input
                                            name = 'emailaddresses'
                                            placeholder = 'email@example.com'
                                            value = {item}
                                            onChange = {(e,field) => handleEmailAddressChange({field,idx})}
                                        ></Input>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>)
                    })}
                </Table>

                <Button>Save</Button>
            </Form>
            {showSaved?<Message>Saved</Message>:null}
        </div>
    )
}

export default ContactForm;