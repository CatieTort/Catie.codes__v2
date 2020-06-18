import React, {useState} from 'react';
import {validateText, validateEmail, validatePhone} from '../utils/validate'
import Modal from './Modal'
import moment from 'moment'

const rootURL = 'http://localhost:8080'
const currentYr = moment().year()

function Contact(){
    const [form, setForm] = useState({name: '', company: '', email: '', phone: '', message: ''})
    const [errors, setError] = useState([])
    const [successSend, setSuccessfulSend] = useState('')


   function sendForm(formData){
        fetch(`${rootURL}/send-contact-form`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(formData),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => res.status)
        .then(status => {
            if (status === 200) {
                setSuccessfulSend(true)
            } else {
                setSuccessfulSend(false)
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        let newErrors = []

        for(let input in form){
            let formatName = input.charAt(0).toUpperCase() + input.slice(1)
            let validEmail
            let validPhone
            let validText

            if (form[input] !== "") {
                if(input === 'email'){
                    validEmail = validateEmail(form[input])
                }else if(input === 'phone'){
                    validPhone = validatePhone(form[input])
                }else{
                    validText = validateText(form[input])
                }
            }else{
                newErrors.push({ input: input, err: `${formatName} cannot be blank` })
            }

            if (validEmail === false || validText === false || validPhone === false) {
                newErrors.push(...errors, { input: input, err: `Invalid ${formatName}` })
            }

            if (newErrors.length > 0) {
                console.log(newErrors)
                setError(newErrors)
            }
        }
        if(newErrors.length === 0){
            console.log('no errors', form)
            sendForm(form)
        }
    }

    function closeModal(){
        setSuccessfulSend('')
    }

    function clearErrors(e){
        e.preventDefault()
        setError([])
    }

    function handleChangeVal(input){       
        let newForm = {...form}

        newForm[input.name] = input.value
        setForm(newForm)
    }

    const successModal = successSend === true ? (
        <Modal closeImg={closeModal}>
            <div>Your message has been sent</div>
        </Modal>
        ) : null;

    return (
        <div className="contact__background">
            <h2>Let's Talk</h2>
            <div className="contact__container" id="contact">
                <form className="contact-form" id="contact" onSubmit={e => handleSubmit(e)}>
                    <div className="contact-form__row">
                        <div className="contact-form__input-container">    
                            <label htmlFor="name">Full Name</label>
                            <input 
                                className={errors.length > 0 && errors.find(({input}) => input === 'name') ? `contact-form__input hasError` : `contact-form__input`}  
                                type="text" 
                                name="name" 
                                value={form.name} 
                                onChange={e => handleChangeVal(e.target)} 
                                onClick={e => clearErrors(e)}
                            />
                            {errors.length > 0 && errors.find(({ input }) => input === 'name') ? <div className="contact-form__err-msg">{errors[errors.findIndex(({ input }) => input === 'name')].err}</div> : null }
                        </div>
                        <div className="contact-form__input-container"> 
                            <label htmlFor="company">Company</label>
                            <input 
                                className={ errors.length > 0 && errors.find(({ input }) => input === 'company') ? `contact-form__input hasError` : `contact-form__input`} 
                                type="text" 
                                name="company" 
                                value={form.company} 
                                onChange={e => handleChangeVal(e.target)}
                                onClick={e => clearErrors(e)}
                            />
                            {errors.length > 0 && errors.find(({ input }) => input === 'company') ? <div className="contact-form__err-msg">{errors[errors.findIndex(({ input }) => input === 'company')].err}</div> : null}
                        </div>
                    </div>
                    <div className="contact-form__row">
                        <div className="contact-form__input-container"> 
                            <label htmlFor="email">Email</label>
                            <input 
                                className={errors.length > 0 && errors.find(({ input }) => input === 'email') ? `contact-form__input hasError` : `contact-form__input`} 
                                type="text" 
                                name="email"
                                value={form.email} 
                                onChange={e => handleChangeVal(e.target)} 
                                onClick={e => clearErrors(e)}
                            />
                            {errors.length > 0 && errors.find(({ input }) => input === 'email') ? <div className="contact-form__err-msg">{errors[errors.findIndex(({ input }) => input === 'email')].err}</div> : null}
                        </div>
                        <div className="contact-form__input-container"> 
                            <label htmlFor="phone">Phone</label>
                            <input 
                                className={errors.length > 0 && errors.find(({ input }) => input === 'phone') ? `contact-form__input hasError` : `contact-form__input`} 
                                type="text" 
                                name="phone" 
                                value={form.phone} 
                                onChange={e => handleChangeVal(e.target)}
                                onClick={e => clearErrors(e)}
                            />
                            {errors.length > 0 && errors.find(({ input }) => input === 'phone') ? <div className="contact-form__err-msg">{errors[errors.findIndex(({ input }) => input === 'phone')].err}</div> : null}
                        </div>
                    </div>
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message" 
                        className={errors.length > 0 && errors.find(({ input }) => input === 'message') ? `contact-form__input hasError` : `contact-form__input`} 
                        maxLength="500" 
                        wrap='hard' 
                        form_id="contact" 
                        value={form.message} 
                        onChange={e => handleChangeVal(e.target)}
                        onClick={e => clearErrors(e)}
                    >
                    </textarea>
                    {errors.length > 0 && errors.find(({ input }) => input === 'message') ? <div className="contact-form__err-msg">{errors[errors.findIndex(({ input }) => input === 'message')].err}</div> : null}
                    <button className="contact-form__btn" type="submit">Send</button>
                </form>
                {successModal}
            </div>
            <div className="footer">
                <div>Copyright &#169; Cathleen Tortorella {currentYr}</div>
            </div>
        </div>
    )
}

export default Contact