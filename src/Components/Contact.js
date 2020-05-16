import React, {useState} from 'react';

function Contact(){
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    function handleSubmit(e){
        e.preventDefault()
        
    }


    return (
        <div className="contact__container" id="contact">
            <h2>Let's Talk</h2>
            <form className="contact-form" id="contact" onSubmit={e => handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input className="contact-form__input"  type="text" name="name" onChange={e => setName(e.target.value)} />
                <label htmlFor="name">Company</label>
                <input className="contact-form__input" type="text" name="company" onChange={e => setCompany(e.target.value)}/>
                <label htmlFor="name">Email</label>
                <input className="contact-form__input" type="text" name="email" onChange={e => setEmail(e.target.value)} />
                <label htmlFor="name">Phone</label>
                <input className="contact-form__input" type="text" name="phone" onChange={e => setPhone(e.target.value)}/>
                <label htmlFor="message">Message</label>
                <textarea name="message" className="contact-form__input" autoComplete="nope" maxLength="500" wrap='hard' form_id="contact" onChange={e => setMessage(e.target.value)}></textarea>
                <button className="contact-form__btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact