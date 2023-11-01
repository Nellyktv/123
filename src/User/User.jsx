import React from "react";


export default function User( {id,namePerson, surname, phone}){

    return(
        <>
        <p>{id}</p>
        <p>{namePerson}</p>
        <p>{surname}</p>
        <p>{phone}</p>     
        </>
    )

}


