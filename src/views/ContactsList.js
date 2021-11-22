const ContactsList = () => {

    const contacts = [
        { firstnam: "Andy" }, { firstname: " mari" }
    ]
    return ( < >
        <
        ul > Contacts List < /ul>

        { console.log("hello") }

        {
            contacts.map(contact => {

                return <li > { contact.firstname } < /li>
            })
        }


        <
        />
    )
}

export default ContactsList