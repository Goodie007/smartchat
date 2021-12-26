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
                      className='input' />
                </form>
            </section>
            <section className='section'>
                <ContactCard contactList={contactList} />
            </section>
        </div>
    )
}