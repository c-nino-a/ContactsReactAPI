import { useEffect,useState } from "react"
import {Link} from "react-router-dom"
import {List} from "semantic-ui-react/"


const ContactsList = () => {

    const [contacts,setContacts] = useState([])

    useEffect(() => {

        (async () => {
            const response = await fetch("/contacts")
            const {contacts}=await response.json()
            setContacts(contacts)
        })()
    },[])

    return ( <>
        <h1> Contacts List </h1>
        <List divided size="massive">

        {contacts.map(contact => {
            return (
                
                <List.Item>
                    <Link to={`/contact/${contact.id}`}>
                        <List.Content>
                            <List.Header as = "a"> {contact.firstname} {contact.lastname}</List.Header>
                        </List.Content>
                </Link>
            
                </List.Item>
            )                
        })}
            </List>

        </>
        )
}



export default ContactsList