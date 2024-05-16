import "./App.css";
import { useState } from "react";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const first = e.target.firstname.value;
    const last = e.target.lastname.value;
    setFirstName((c) => first);
    setlastName((c) => last);
    e.target.firstname.value = "";
    e.target.lastname.value = "";
  }
  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>First name: </label>
          <input name="firstname" type="text" required />
        </div>
        <div>
          <label>last name: </label>
          <input id="lastname" type="text" required />
        </div>
        <button type="submit">submit</button>
      </form>
      <p>
        Full name:{firstName} {lastName}
      </p>
    </div>
  );
}

export default App;
