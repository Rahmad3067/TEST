import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../css/Bootstrap.css"
import "../css/style.css"


// Regex is used to check the format of email
const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Form ()  {
    // we use hooks with help of a method to check that the client enter the corect email format
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ email, setEmail ] = useState("");
    const [ isEmailValid, setIsEmailValid ] = useState(false);

    // we check our state to get the input entred by client
    const onEmailChange = ((e) =>{
       setEmail(e.target.value)

    });
    const onSubmit = data => console.log(data);

    // We check if input that entred by client is a email format with regex(emailPatern) we use 
    useEffect ( () => {
        setIsEmailValid(emailPattern.test(email))
    },[email]);

        return(
        <div className="container mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="container d-flex row">
            {/* Nom part and input */}
            <div className="col form-group d-flex flex-column">
                <label className="name-1" for="inputName">Nom</label>
                <input className="form-control radius" type="text" placeholder="Entrez votre Nom"></input>
            </div>
            {/* Prénom input*/}
            <div className="col form-group">
                <label className="name-1" for="inputName">Prénom</label>
                <input className=" form-control radius" type="text" placeholder="Entrez votre Prénom"></input>
            </div>
            </div>
            <div className="container d-flex row" >
            <div className="col form-group d-flex flex-column">
                {/* Email Input */}
                <label className="name-1" for="inputName">Email</label>
                <input onChange={onEmailChange} className={ isEmailValid ? "form-control radius is-valid " : "form-control radius is-invalid" } type="email" placeholder="Email"/>
            </div>
            <div className="col form-group d-flex flex-column">
                {/* Telephone nimber input */}
                <label className="name-1" for="inputTelephone">Téléphone</label>
                <input className="form-control radius" type="text" placeholder="votre numéro de téléphone"></input>
            </div>

            </div>
            <div className="container d-flex row">
            {/* Text area Input */}
            <div className="form-group  was-validated">
                <label className="name-1" for="validationTextarea">Message</label>
                <textarea className="form-control is-invalid form-height radius" id="validationTextarea" placeholder="Write Your messgae" required></textarea>
            </div>
            </div>
            <div className="container d-flex row">
            {/* contact select */}
            <div className="form-group row px-0 was-validated">
                <label className="name-2 ms-3" for="selectContact">Type de contact</label>
                <select className="form-select radius ms-3" required aria-label="select example">
                     <option value="">Select(Koya, Mentor, Public)</option>
                     <option value="1">Koya</option>
                     <option value="2">Mentor</option>
                     <option value="3">Public</option>
                 </select>
            </div>
            </div>
            <div className="container d-flex row" >
                {/* Check box  */}
            <div className="form-group d-flex flex-column was-validated">
                <label className="name-3" for="validationTextarea">Acceptation des conditions</label>
                <input type="checkbox" className="form-check-input input-width-check" id="validationFormCheck1" required/>
                <input type="submit" className="btn btn-primary button-height mt-3"/>
            </div>
            </div>
        </form>
         </div>
        )
    
}



export default Form;