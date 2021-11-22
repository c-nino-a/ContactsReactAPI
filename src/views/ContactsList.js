import { useEffect, useState } from "react";
import { List } from "semantic-ui-react/";
import { Link } from "react-router-dom";

const ContactsList = () => {
    const [contacts, setContacts] = useState([])

    useEffect(()=>{
        (async ()=>{
            const response = await fetch('/contacts');
            const { contacts } = await response.json();
            setContacts(contacts);
        })()
    },[])

    return (  
        <div>
            <h1>Contacts List</h1>
            <List divided size='massive'>
                {contacts.map(contact=>{
                    return (
                        <List.Item>
                            <Link to={`/contact/${contact.id}`}>
                                <List.Header as='a'>{contact.firstname} {contact.lastname}</List.Header>
                            </Link>
                        </List.Item>
                     )
                })}
            </List>
        </div>
    )
}

export default ContactsList;