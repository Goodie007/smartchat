import React from 'react';






export default function ContactCard({ contactList }){
    return(
       
        <div className='inputField'>
            {contactList?.map((contact, index) => (
                <figure className='fig' key={index}>
                   <img src={contact.picture.large} alt="user" className='images'/> 
                <figcaption>
                   <p>
                       <span>username: </span>{contact.username}
                   </p>
                   <p>
                       <span> email: </span>{contact.email}
                   </p>
               </figcaption>
               </figure>
            
            
            ))}

        </div>

    )

}