import { useContext } from "react"
import { PersonDispatchContext, PersonStateContext } from "../provider/personProvider";

const { Table, Button, Icon, Input } = require("semantic-ui-react")

const PostalAdresses = ({ props }) => {

    const state = useContext( PersonStateContext)
    const dispatch = useContext( PersonDispatchContext)

    const { postaladdresses } = state;

    return (
        <>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                        <Button type="button" icon onClick={()=>dispatch({type:'addPostalAddress'})}>
                                <Icon name="plus"/>
                            </Button>
                        </Table.HeaderCell>
                        <Table.HeaderCell>Street</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Zipcode</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {postaladdresses?.map((pa,idx)=>{
                        return (
                            <Table.Row key={idx}>
                                <Table.Cell>
                                <Button type="button" icon onClick={()=>dispatch({type:'removePostalAddresses', payload:{idx}})}>
                                        <Icon name="close"/>
                                    </Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Input
                                    name="street"
                                    placeholder="e.g. Gamboa"
                                    value={pa.street}
                                    onChange={(e,field)=>{dispatch({type:'handlePostalAddressField', payload:{field,idx}})}}/>
                                </Table.Cell>
                                <Table.Cell>
                                    <Input
                                        name="city"
                                        placeholder="e.g. Makati"
                                        value={pa.city}
                                        onChange={(e,field)=>{dispatch({type:'handlePostalAddressField', payload:{field,idx}})}}/>
                                </Table.Cell>
                                <Table.Cell>
                                    <Input
                                        name="zipcode"
                                        placeholder="e.g. 199"
                                        value={pa.zipcode}
                                        onChange={(e,field)=>{dispatch({type:'handlePostalAddressField', payload:{field,idx}})}}/>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </>
    )
}

export default PostalAdresses 