import './App.css';
import Homepage from './components/Homepage';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      {/* nav-bar */}
      <div className="nav">
        <img src="" alt="" />
      </div>
      <Homepage />
      <Contact />
      {/* footer */}

      <div className="footer">

        <div className="links">
          <ul>
            <li><a href="">COURSES</a></li>
            <li><a href="">BLOGS</a></li>
            <li><a href="">CAREERS</a></li>
            <li><a href="">ABOUT US</a></li>
            <li><a href="">CONTACT US</a></li>
            <li><a href="">PRIVACY POLICY</a></li>
          </ul>
        </div>

        <div>
          <div>
            <img src="" alt="Facebook Icon" />
            <img src="" alt="LinkedIn Icon" />
            <img src="" alt="Youtube Icon" />
          </div>

          <a href="mailto:contact@upliftcodecamp.com">contact@upliftcodecamp.com</a>
        </div>

        <p>&copy; 2021 Uplift Code Camp</p>

      </div>
    </div>
  );
}

export default App;
