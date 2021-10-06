const Contact = () => {
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

        <form>
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <select required>
            <option selected disabled>Select a Reason*</option>
            <option>General Inquiry</option>
            <option>Enrolment Inquiry</option>
            <option>Be a Partner</option>
            <option>Careers</option>
          </select>
          <input type="text" placeholder="Subject*" required />
          <textarea placeholder="Message*" required />
        </form>
      </section>
    </div>
  )
}

export default Contact;