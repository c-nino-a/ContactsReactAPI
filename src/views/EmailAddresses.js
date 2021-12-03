import { Button, Table, Icon, Input} from "semantic-ui-react";

const EmailAddresses = ({props}) => {

    const { person, setPerson } = props

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
    const {emailaddresses} = person;
    return (
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
        <Table.Body>
            {emailaddresses?.map((item,idx)=>{
                return(
                    <Table.Row key={idx}>
                        <Table.Cell>
                            <Button icon type="button" onClick={()=>{removeEmailAddressField(idx)}}>
                                <Icon name='minus'></Icon>
                            </Button>
                            <Input
                                name = 'emailaddresses'
                                placeholder = 'example@example.com'
                                value = {item}
                                onChange = {(e,field) => handleEmailAddressChange({field,idx})}
                            />
                        </Table.Cell>
                    </Table.Row>
                )
            })}
        </Table.Body>
    </Table>
    )
}

export default EmailAddresses; 