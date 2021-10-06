import React, { useState, useEffect } from "react";
import "../css/Bootstrap.css"
import "../css/style.css"



const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function Form ()  {
    // we use hooks to chech our email if thats 
    const [ email, setEmail ] = useState("");
    const [ isEmailValid, setIsEmailValid ] = useState(false);

    const onEmailChange = ((e) =>{
       setEmail(e.target.value)

    });

    useEffect ( () => {
        setIsEmailValid(emailPattern.test(email))
    },[email]);

        return(
            <div className="container">
        <div className="row pt-5">
            <div className="col-2 px-0">
                <div className="form-border">Champ</div>
            </div>
            <div className="col-8 px-0">
                <div className="form-border">Type</div>
            </div>
            <div className="col-2 px-0">
                <div className="form-border left-border">Requis?</div>
            </div>
        </div>

        {/* Nom part and input */}
        <form>
            <div className="form-group row px-0">
                <label className="col-2 form-border" for="inputName">Nom</label>
                <input className="col-8" type="text" placeholder="Entrez votre Nom"></input>
                <label className="col-2 ">Non</label>
            </div>
            {/* Prénom input*/}
            <div className="form-group row px-0">
                <label className="col-2 form-border" for="inputName">Prénom</label>
                <input className="col-8" type="text" placeholder="Entrez votre Prénom"></input>
                <label className="col-2">Non</label>
            </div>
            {/* Email Input */}
            <div className="form-group row px-0">
                <label className="col-2 form-border" for="inputName">Email</label>
                <input onChange={onEmailChange} className={isEmailValid ? "form-control is-valid" : "form-control is-invalid" } type="email" placeholder="Email"/>
                <label className="col-2">Oui</label>
            </div>
            {/* Telephone nimber input */}
            <div className="form-group row px-0">
                <label className="col-2 form-border" for="inputTelephone">Téléphone</label>
                <input className="col-8 form-control input-width" type="text" placeholder="votre numéro de téléphone"></input>
                <label className="col-2">Non</label>
            </div>
            {/* Text area Input */}
            <div className="form-group row px-0 was-validated">
                <label className="col-2 form-border" for="validationTextarea">Message</label>
                <textarea className="form-control is-invalid input-width" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                <label className="col-2">Oui</label>
            </div>
            {/* contact select */}
            <div className="form-group row px-0 was-validated">
                <label className="col-2 form-border" for="selectContact">Type de contact</label>
                <select className="form-select input-width" required aria-label="select example">
                     <option value="">Select(Koya, Mentor, Public)</option>
                     <option value="1">Koya</option>
                     <option value="2">Mentor</option>
                     <option value="3">Public</option>
                 </select>
                <label className="col-2">Oui</label>
            </div>
            <div className="form-group row px-0 was-validated">
                <label className="col-2 form-border" for="validationTextarea">Acceptation des conditions</label>
                <input type="checkbox" className="form-check-input input-width" id="validationFormCheck1" required/>
                <label className="col-2">Oui</label>
            </div>

        </form>
         </div>
        )
    
}



export default Form;