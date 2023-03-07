import './ContactForm.css'
import { useFormik } from 'formik';


const ContactForm = () => {
  let words = 0;
  const validate = (values: any) => {
    const errors = {}
  
    if (!values.email) {
      formik.errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      formik.errors.email = 'Invalid email address'
    }
  
    return errors
  }

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const updateWordCounter = () => {
    const newWords = (document.getElementById('feedbackText') as HTMLInputElement).value;
    if (newWords){
      words += newWords.split(" ").length; 
    }
  }

  const alertWordsEnter = () => {
    alert('Characters entered in feedback area ' + words);
  }

  return (
    <div>
        <div>
            <h1>Contact me if you have any business concerns or questions in general.</h1>
        </div>
        <div className="formContainer">
            <form onSubmit={alertWordsEnter}>      
                <input name="name" type="text" className="feedback-input" placeholder="Name" />   
                <input className="feedback-input" type="email" name="email" id="email" placeholder="Email"
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                <div>
                  <h3>Rate My Site</h3>
                  <div>
                    <input type="radio" id="1" name="drone" value="1 star"/>
                    <label>1 star</label>
                  </div>
                  <div>
                    <input type="radio" id="2" name="drone" value="2 star"/>
                    <label>2 star</label>
                  </div>
                  <div>
                    <input type="radio" id="3" name="drone" value="3 star"/>
                    <label>3 star</label>
                  </div>
                  <div>
                    <input type="radio" id="4" name="drone" value="4 star"/>
                    <label>4 star</label>
                  </div>
                  <div>
                    <input type="radio" id="louie" name="drone" value="5 star"/>
                    <label>5 star</label>
                  </div>
                </div>
                <textarea name="text" className="feedback-input" placeholder="Feedback Details" id="feedbackText" onChange={updateWordCounter}></textarea>
                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    </div>
  );
};

export default ContactForm;