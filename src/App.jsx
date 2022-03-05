import "./styles.css";
import { Magic } from "./Components/counter";
import { useState } from "react";

let arr = [];

function getData(first, last, age, date) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.date = date;
}

export default function App() {
  const [data, setData] = useState([...arr]);

  function send() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let age = document.getElementById("age").value;
    let date = document.getElementById("date").value;

    let note = new getData(first, last, age, date);

    arr.push(note);

    setData(arr);

    // console.log(arr)
  }
  console.log(data);

  return (
    <div className="App">
      <div>
        <input id="first" type="text" placeholder="first name" />

        <input id="last" type="text" placeholder="last name" />
        <input id="age" type="number" placeholder="age" />
        <input id="date" type="date" />
        <input type="submit" value="Submit" onClick={send} />
      </div>

      <div>
        {data.map((el) => (
          <Magic note={el} />
        ))}
      </div>
    </div>
  );
}
