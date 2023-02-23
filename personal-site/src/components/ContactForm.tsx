import './ContactForm.css'

const ContactForm = () => {
  return (
    <div>
        <div>
            <h1>Contact me if you have any business concerns or questions in general.</h1>
        </div>
        <div className="formContainer">
            <form>      
                <input name="name" type="text" className="feedback-input" placeholder="Name" />   
                <input name="email" type="text" className="feedback-input" placeholder="Email" />
                <textarea name="text" className="feedback-input" placeholder="Reason for Contact"></textarea>
                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    </div>
  );
};

export default ContactForm;