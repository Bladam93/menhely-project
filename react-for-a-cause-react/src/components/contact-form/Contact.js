import './Contact.css';
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showForm, setShowForm] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        let submitDetails = {
            "name": name,
            "email": email,
            "subject": subject,
            "message": message
          }
          console.log(submitDetails);
          setShowForm(false)
    }

    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <ul>
                <li>
                    <i className="fa fa-envelope"> fuzallatvedelem@gmail.com</i>
                </li>
                <li>
                    <i className="fa fa-phone margin-icon"> 40/459-7572</i> 
                </li>
                <li>
                    <i className="fa fa-map-marker margin-icon"> Füzesabony</i>
                </li>
            </ul>
            <p>About animal rescue or adoption, feel free to contact us!</p>
            {showForm && 
            <div>
                <h2>Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input required type="text" onChange={e => setName(e.target.value)}/>
                    <label>Email Adress</label>
                    <input required type="text" onChange={e => setEmail(e.target.value)}/>
                    <label>Subject</label>
                    <input required type="text" onChange={e => setSubject(e.target.value)}/>
                    <label>Message</label>
                    <textarea required onChange={e => setMessage(e.target.value)}>
                    </textarea>
                    <button>Send message</button>
                </form>
            </div>}
            {!showForm && 
                <h1>
                We appreciate you contacting us. One of our colleagues will get back in touch with you soon! Have a great day!
                </h1>}
        </div>
    );
}

export default Contact;