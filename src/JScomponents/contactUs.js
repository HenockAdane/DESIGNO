import React, {useState} from 'react'
import styles from "../SCSScomponents/contactUs.module.scss"

function ContactUs() {


    const [state, setState] = useState(()=>({
        fullName: "",
        email: "",
        tel: "",
        message: ""
    }))


    const setValue = (e) => {
    let name = e.target.name;
    let value = e.target.value
     setState(ps => ({...ps, [name]: value}))
    }

    const submit = () => {
        setState(ps => ({...ps, fullName: "",
        email: "",
        tel: "",
        message: ""}))
    }




    

    // const setValue = (e) => {
        
    // }
    return (
        <div className={styles.contactUs}>

        <div className={styles.intro}>
            <h1>Contat Us</h1>

            <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>

            <h1>{state.fullName}</h1>
        </div>


        <form>
            <input type="text" name="fullName" placeholder="Full Name" required value={state.fullName} onChange={setValue}/>
            <input type="email" name="email" placeholder="Email" required value={state.email} onChange={setValue}/>
            <input type="tel" name="tel" placeholder="Phone Number Including The Area Code <em>(optional)<em>" value={state.tel} onChange={setValue}/>
            <textarea name="message" placeholder="Your message" value={state.message} onChange={setValue}/>

            <button className={styles.submitBtn} onClick={submit}>SUBMIT</button>

        </form>
            
        </div>
    )
}

export default ContactUs
