import { useState } from "react";
import "../../components/CSS-Design/Design.css";
import { toast } from "react-toastify";
import { useAuth } from "../../store/auth";
import "./Contact.css";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  // Handling the input value
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Message sent successfully");
        // alert("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main className="contact1 contact-details">
          <div className="container-contact1">
            <div className="row justify-content-between">
              <div className="col-lg-6 contact-mail">
                <img
                  src="../../public/images/img-01.png"
                  width="400"
                  height="500"
                  alt="Login image here"
                />
              </div>
              <div className="col-lg-6 contact-mail2">
                <h1 className="main-heading mb-3">Contact here</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="wrap-input1 validate-input">
                    <input
                      className="input1"
                      type="text"
                      name="username"
                      placeholder="Full Name"
                      id="username"
                      required
                      autoComplete="off"
                      value={contact.username}
                      onChange={handleInput}
                      data-validate="Name is required"
                    />
                    <span className="shadow-input1"></span>
                  </div>

                  <div className="wrap-input1 validate-input">
                    <input
                      className="input1"
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      required
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                    />
                    <span className="shadow-input1"></span>
                  </div>

                  <div className="wrap-input1 validate-input">
                    <textarea
                      className="input1"
                      name="message"
                      id="message"
                      autoComplete="off"
                      value={contact.message}
                      onChange={handleInput}
                      required
                      cols="30"
                      rows="6"
                    ></textarea>
                    <span className="shadow-input1"></span>
                  </div>

                  <button
                    type="submit"
                    className="container-contact1-form-btn contact1-form-btn"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8201461590643!2d85.8855114751887!3d23.789418078643806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f46b9d0b87800d%3A0xe9cf2ca04cf21b5c!2sBTPS%20HOSPITAL%2CBOKARO%20THERMAL!5e0!3m2!1sen!2sin!4v1709221133656!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;