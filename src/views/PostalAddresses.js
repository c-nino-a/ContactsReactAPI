const { Table, Button, Icon, Input } = require("semantic-ui-react")

const PostalAdresses = ({ props }) => {

    const { person, setPerson } = props

    const addPostalAddress = () => {
        person.postaladdresses.push({street:"",zipcode:"",city:""})
        setPerson({...person});
    }

    const handlePostalAddressField = (field, idx) => {

        const {name, value} = field;

        person.postaladdresses[idx][name]=value;

        setPerson({...person});
    }

    const removePostalAddresses = (idx) => {
        person.postaladdresses.splice(idx,1);
        setPerson({...person});
    }

    const { postaladdresses } = person;

    return (
        <>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Button type="button" icon onClick={addPostalAddress}>
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
                                    <Button type="button" icon onClick={()=>removePostalAddresses(idx)}>
                                        <Icon name="minus"/>
                                    </Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Input
                                    name="street"
                                    placeholder="e.g. Gamboa"
                                    value={pa.street}
                                    onChange={(e,field)=>{handlePostalAddressField(field,idx)}}/>
                                </Table.Cell>
                                <Table.Cell>
                                    <Input
                                        name="city"
                                        placeholder="e.g. Makati"
                                        value={pa.city}
                                        onChange={(e,field)=>{handlePostalAddressField(field,idx)}}/>
                                </Table.Cell>
                                <Table.Cell>
                                    <Input
                                        name="zipcode"
                                        placeholder="e.g. 199"
                                        value={pa.zipcode}
                                        onChange={(e,field)=>{handlePostalAddressField(field,idx)}}/>
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