import logo from './logo.svg';
import './App.css';
import {FaSearch} from 'react-icons/fa'
import {BsFilterLeft} from 'react-icons/bs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Btn-Wrap">
          <button className="SignUp-Btn">Sign Up</button>
          <button className="SignIn-Btn">Sign In</button>
        </div>
      </header>
      <main>
        <div className="Search-Area">
          <div className="Search-Bar">
            <button className="Search-Icon"><FaSearch /></button>
            <input type="text" className="Search-Box" placeholder="Search"></input>
          </div>
          <div className="Filter-Area">
            <button className="Filter">
              <div className="Filter-Name">Filter</div>
              <div className="Filter-Icon">
                <BsFilterLeft />
              </div>
            </button>
            <div className="Tag-Area">
              <div className="Title">Search Tags</div>
              <div className="Description-Box">
                <div className="Items-Row">
                  <div className="Item">Phnom Penh</div>
                  <div className="Item">RUPP</div>
                  <div className="Item">AUPP</div>
                  <div className="Item">Chbar Ampov</div>
                  <div className="Item">RUFA</div>
                  <div className="Item">TECHNO</div>
                </div>
                <div className="Items-Row">
                  <div className="Item">Battambang</div>
                  <div className="Item">Siem Reap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="Footer">copyright@ifound.realeastates.com</footer>
    </div>
  );
}

export default App;
