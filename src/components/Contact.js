import React from 'react'
import axios from 'axios';
import './styles/Contact.css';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';

export const Contact = () => {

  const [isLoading, setLoading] = React.useState(false);
  const recaptchaRef = React.useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_WEB3_FORM_KEY);
    formData.delete("g-recaptcha-response"); // Remove Captcha within <form> tag

    const token = recaptchaRef.current.getValue();

    if (!token) {
        Swal.fire({
            title: 'Error',
            text: 'Please complete the ReCaptcha!',
            icon: 'error',
            confirmButtonColor: '#006964',
        });
        return;
    }

    setLoading(true);
  
    try {
      const response = await axios.post("https://api.web3forms.com/submit", formData);
  
      const data = response.data;
  
      if (data.success) {
        event.target.reset();
        recaptchaRef.current.reset();
          Swal.fire({
              title: 'Message Sent!',
              text: 'Message sent successfully!',
              icon: 'success',
              confirmButtonColor: '#006964',
          });
      } else {
          Swal.fire({
              title: 'Unexpected Error!',
              text: 'Something went wrong.. Please try again later!',
              icon: 'error',
              confirmButtonColor: '#006964',
          });
        console.log("Error", data);
      }
    } catch (error) {
      Swal.fire({
          title: 'Unexpected Error!',
          text: 'Something went wrong.. Please try again later!',
          icon: 'error',
          confirmButtonColor: '#006964',
      });
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-title'>
          <h1>Contact <span>Me!</span></h1>
        </div>
        <form className="contact-form" onSubmit={onSubmit} id='submit-form'>
          <div className="form-row">
            <input type="text" name="name" placeholder="Full Name" required/>
            <input type="email" name="email" placeholder="Email Address" required/>
          </div>
          <div className="form-row">
            <input type="tel" name="contact number" placeholder="Mobile Number" required/>
            <input type="text" name="subject" placeholder="Email Subject" required/>
          </div>
          <textarea name="message" placeholder="Message" required></textarea>
          <ReCAPTCHA 
            className='r-captcha'
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
          />
          <button type="submit" disabled={isLoading}>{isLoading ? "Sending..." : "Send Message"}</button>
        </form>
    </div>
  )
}
