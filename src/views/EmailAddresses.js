import { useContext } from "react";
import { Button, Table, Icon, Input} from "semantic-ui-react";
import { PersonDispatchContext, PersonStateContext } from "../provider/personProvider";

const EmailAddresses = () => {

    const state = useContext( PersonStateContext)
    const dispatch = useContext( PersonDispatchContext)

    const {emailaddresses} = state;

    return (
    <Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>
                <Button icon type="button" onClick={()=>dispatch({type:'addEmailAddressField'})}>
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
                        <Button icon type="button" onClick={()=>dispatch({type:'removeEmailAddressField',payload:{idx}})}>
                                <Icon name='close'></Icon>
                            </Button>
                            <Input
                                name = 'emailaddresses'
                                placeholder = 'example@example.com'
                                value = {item}
                                onChange = {(e,field) => dispatch({type:'handleEmailAddressChange',payload:{field,idx}})}
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