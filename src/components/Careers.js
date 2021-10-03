const Careers = () => {
  return (
    <div>
      <section>
        <div>
          <h2>Join Our Team</h2>
          <p>Career opportunities here at Uplift</p>
        </div>
      </section>

      <section>
        <div>
          <h2>Uplift’s Mission</h2>
          <div className="line"></div>
          <p>At Uplift, our mission is to bridge the technology education gap.
            We want to nurture a strong team and community of learners,
            teachers, and engineers who are driven by uplifting themselves
            and everyone around them through innovation and creation.</p>
        </div>

        <div>
          <h2>Open Positions</h2>
          <div className="line"></div>
          <p>We are looking for:</p>
          <ul>
            <li>Full-time Teaching Partners</li>
            <li>Part-time Teaching Partners</li>
            <li>Teaching Assistants</li>
          </ul>

          <p>who have a passion for teaching and sharing their expertise.</p>
        </div>

        <div>
          <h2>Open Positions</h2>
          <div className="line"></div>
          <ul>
            <li>Experience on web development, converting UI/UX designs to user-centric,
              responsive and interactive websites</li>
            <li>Hands on experience in different noSQL and SQL databases, RESTful APIs, unit testing</li>
            <li>Proficient in HTML, CSS, and either or both JS (React and nodeJS) and PHP (Laravel)</li>
            <li>Capability to motivate learning and share your knowledge with empathy
              and adaptive/effective teaching styles</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Have questions? Join our community.</h2>
        <p>The Uplift community is a great place to ask questions. It is
          filled with current students, alumni, mentors, and instructors.</p>

        <button>Join our Discord</button>
      </section>
    </div>
  );
}

export default Careers;