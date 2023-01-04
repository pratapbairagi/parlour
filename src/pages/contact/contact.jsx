import { useRef } from "react"
import "./contact.css"
import FilledUnformation from "./filledInformation_card";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import SuccessPopup from "../../components/atoms/successPopup";
import { useEffect } from "react";


const Contacts = () => {

    const form = useRef()
    const [success, setSuccess] = useState(false)

    useEffect(()=>{
        if(success == true){
            setTimeout(()=>{
                setSuccess(false)
            },2000)
        }
    },[success])

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_parlour', 'template_bthp4lm', form.current, 'RHLBORJ6kbGnt_Wnq')
            .then((result) => {
                // console.log(result.text);
                // console.log("message sent successfully !")
                if (result.text == "OK") {
                    return setSuccess(true)
                }
                e.target.reset()
            }, (error) => {
                // console.log(error.text);
            });
    }
    return (
        <div className="container-fluid contact-container">
            {success == true && <SuccessPopup success={success}/>}
            <h2 className="">Contact</h2>
            <div className="row-container">



                <form ref={form} onSubmit={sendMail} className="contact-form ">
                    <FilledUnformation />
                    <div className="row">
                        <span className="contact-header">
                            <h5>Send a message</h5>
                        </span>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label htmlFor="">User Name</label>
                            <input type="text" name="user_name" id="" minLength="3" required  />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label htmlFor="">Subject</label>
                            <input type="text" name="user_subject" id="" minLength="2" required  />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label htmlFor="">Your E-Mail</label>
                            <input type="email" name="user_email" id="" required  />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label htmlFor="">Mobile Number</label>
                            <input type="tel" name="user_number" minLength="8" maxLength="10" id="" required  />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label htmlFor="">Message</label>
                            <textarea type="text" name="message" id="" minLength="10" required  />
                        </div>
                        <span className="mt-2">
                            <button className="" type="submit" style={{ padding: "5px 24px", fontSize: "80%", border: "none", background: "rgb(215, 4, 115)", color: "white", fontWeight: "600", letterSpacing: "1px" }}>SEND</button>
                        </span>
                    </div>
                </form>
            </div>
            {/* <ContactUs /> */}
            {/* <a href="mailto:`{pratapbairagi4cgshop@gmail.com}`?subject={subject}&body={body}">Click to Send an Email</a> */}
        </div>
    )
}

export default Contacts