
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  const [Name, setname] = useState('')
  const [email, setemail] = useState('')
  
  console.log(Name)
  console.log(email)
  return (
    <div className="App">
      <header className="App-header">

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input value={Name} onChange={(e) => { setname(e.target.value) }} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input value={email} onChange={(e) => { setemail(e.target.value) }} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
        </div>
        <div>
        <button type="button" className="btn btn-success">log in</button>
        </div>
      </header>
    </div>
  );
}

export default App;