const Homepage = () => {
  return (
    <div>
      <section className="landingPage">
        <div className="description">
          <h2>Become a Software Developer</h2>

          <p>Affordable, high-quality software development courses. </p>
          <p>Study part-time. Learn full-stack.</p>

          <button>Get Started</button>
        </div>
        <div className="image">
          <img src="https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Laptop" />
        </div>
      </section>

      <section>
        <div className="video">

        </div>

        <div className="description">
          <h2>Who are we?</h2>
          <div className="line"></div>
          <p>Uplift Code Camp’s mission is to make the Filipino tech talent globally competitive through comprehensive coding camps. Our students go through rigorous 6-month part-time courses. Then we connect graduates with companies who hire great programmers.</p>
        </div>
      </section>

      <section>
        <div>
          <h2>What we do?</h2>
          <div className="line"></div>
        </div>

        <div className="cards">
          <div className="card">
            <img src="" alt="" />
            <p>Full Stack Web Development</p>
            <p>Available online</p>
          </div>

          <div className="card">
            <img src="" alt="" />
            <p>Short Courses</p>
            <p>Taught on Weekends</p>
          </div>

          <div className="card">
            <img src="" alt="" />
            <p>Company Partnership</p>
            <p>Hire our best grads</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>Your Career Path</h2>
          <div className="line"></div>
        </div>

        <div>
          <div>
            <img src="" alt="" />
            <div className="description">
              <h3>Learn to code</h3>
              <p>Learn JavaScript, HTML, CSS, Node, React and more in our live, online coding class.</p>
            </div>
          </div>

          <div>
            <img src="" alt="" />
            <div className="description">
              <h3>Build a portfolio</h3>
              <p>Build complex projects and beautiful websites to showcase your talent.</p>
            </div>
          </div>

          <div>
            <img src="" alt="" />
            <div className="description">
              <h3>Land a job</h3>
              <p>Software Developers are highly in-demand and well-paid. We partner with local and international companies to help our graduates find their first opportunity.</p>
            </div>
          </div>

          <div>
            <img src="" alt="" />
            <div className="description">
              <h3>Be the best</h3>
              <p>Our courses prepare you for the real world. Develop a strong foundation to excel in your new Software Development career.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>Stories from our Students</h2>
          <div className="line"></div>
        </div>

        <div>
          <div className="card">
            <img src="" alt="" />
            <p>Name</p>
            <p>Story</p>
          </div>

          <div className="card">
            <img src="" alt="" />
            <p>Name</p>
            <p>Story</p>
          </div>

          <div className="card">
            <img src="" alt="" />
            <p>Name</p>
            <p>Story</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;