import React, { useState, useEffect } from 'react';
import useFetch from 'react-fetch-hook';

import ContactCard from './ContactCard';




export default function Contact(){
    const url = ""
    const { isLoading, data, error } = useFetch(url+'?results=200')

    const [ contactList, setContactList ] = useState()
    const [ filterQuery, setFilterQuery ] = useState()

    useEffect( () => {
        if(filterQuery) {
            //user filter query here
            const queryString = filterQuery.toLowerCase()
            const filteredData = data?.results?.filter(contact => {
                const username = `${contact.username}`

                if (queryString.length === 1) {
                    const firstLetter = username.charAt(0).toLowerCase()
                    return username === queryString
                }
                else {
                    return username.toLowerCase().includes(queryString)
                }
            })
            setContactList(filteredData)
        }
        else {
            setContactList(data?.result)
        }
    }, [ data, filterQuery ])

    return(
        <div className='inputField'>
            <section>
                <form>
                    <input 
                      placeholder='type here to filter'
                      type="text"
                      className='input'
                      onChange={ event => setFilterQuery(event.target.value)} />
                </form>
            </section>
            <section className='section'>
                {contactList?.length < 1 && (
                    <h2>No data matches your search</h2>
                )}
                <ContactCard contactList={contactList} />
            </section>
        </div>
    )
}