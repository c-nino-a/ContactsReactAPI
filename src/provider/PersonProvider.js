import { createContext, useReducer, useState } from "react"

export const PersonStateContext = createContext()

export const PersonDispatchContext = createContext()

export const PersonProvider = props => {

    const emptyPerson = {
        firstname:"",
        lastname:"",
        id:null,
        emailaddresses:[],
        postaladdresses:[]
    }

    const reducer = (person, {type, payload}) => {
        const {idx, field} = payload || {};

        // eslint-disable-next-line default-case
        switch (type) {

            case 'empty':

                return emptyPerson

            case 'load':

                return {...person, ...payload};            

            case 'handleFieldChange':

                person[field.name] = field.value;

                return {...person}

            case 'handleEmailAddressChange':

                person.emailaddresses[idx] = field.value;

                return { ...person }

            case 'addEmailAddressField':

                person.emailaddresses.push('');

                return { ...person }

            case 'removeEmailAddressField':

                person.emailaddresses.splice(idx,1)

                return { ...person }

            case 'addPostalAddress':

                person.postaladdresses = person.postaladdresses || []

                person.postaladdresses.push({street:"",zipcode:"",city:""})

                return { ...person }

            case 'handlePostalAddressField':

                person.postaladdresses = person.postaladdresses || []

                person.postaladdresses[idx][field.name]=field.value;

                return { ...person }

            case 'removePostalAddresses':

                person.postaladdresses = person.postaladdresses || []

                person.postaladdresses.splice(idx,1);

                return { ...person }

            
        }

    }

    const [state, dispatch] = useReducer(reducer , emptyPerson)

    return (

        <PersonStateContext.Provider value={state}>
            <PersonDispatchContext.Provider value={dispatch}>
                {props.children}
            </PersonDispatchContext.Provider>
        </PersonStateContext.Provider>
    )
} 