import { useState } from "react"

const Contact = () => {
  const [input, setInput] = useState();

  const inputHandler = (e) => {
    let name = e.target.name;

    setInput({ ...input, [name]: e.target.value });
  }

  const formHandler = (e) => {
    e.preventDefault();
    alert('Sent!'); // needs improvement
    // console.log(input);
  }
  return (
    <div>
      <section>
        <div>
          <h2>We'd Love To Hear From You.</h2>
          <p>Contact Us</p>
        </div>
      </section>

      <section>
        <div>
          <h2>How Can We Help You?</h2>
          <div className="line"></div>
          <p>If you have any questions or need help, please fill out the form below.
            We do our best to respond within 1 business day.</p>
        </div>

        <form onSubmit={formHandler}>
          <input type="text" name="name" placeholder="Name*" onChange={e => inputHandler(e)} required />
          <input type="email" name="email" placeholder="Email*" onChange={e => inputHandler(e)} required />
          <select required name="reason" defaultValue="Select a Reason*" onChange={e => inputHandler(e)} >
            <option disabled>Select a Reason*</option>
            <option>General Inquiry</option>
            <option>Enrollment Inquiry</option>
            <option>Be a Partner</option>
            <option>Careers</option>
          </select>
          <input type="text" name="subject" placeholder="Subject*" onChange={e => inputHandler(e)} required />
          <textarea placeholder="Message*" name="message" onChange={e => inputHandler(e)} required />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Contact;