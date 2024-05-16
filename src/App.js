import "./App.css";
import { useState } from "react";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const first = e.target.firstname.value;
    const last = e.target.lastname.value;
    setFirstName((c) => first.trim());
    setlastName((c) => last.trim());
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>First name: </label>
          <input id="firstname" name="firstname" type="text" required />
        </div>
        <div>
          <label>last name: </label>
          <input id="lastname" name="lastname" type="text" required />
        </div>
        <button type="submit">Submit</button>
      </form>

      {firstName && lastName && (
        <p>
          Full Name: {firstName} {lastName}
        </p>
      )}
    </div>
  );
}

export default App;
