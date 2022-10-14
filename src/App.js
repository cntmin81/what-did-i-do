import { useState } from "react";

function App() {
  const did = {
    what: "",
    from: "",
    to: "",
    on: "",
  };

  const [idid, setIdid] = useState(did);

  const addData = (data) => {
    const table = document.querySelector("table>tbody");
    const row = table.insertRow(0);
    const whatCell = row.insertCell(0);
    const fromCell = row.insertCell(1);
    const toCell = row.insertCell(2);
    const onCell = row.insertCell(3);
    whatCell.innerHTML = data.what;
    fromCell.innerHTML = data.from;
    toCell.innerHTML = data.to;
    onCell.innerHTML = data.on;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIdid(
      addData({
        what: event.target.what.value,
        from: event.target.from.value,
        to: event.target.to.value,
        on: event.target.on.value,
      })
    );
  };

  console.log(idid);
  console.log(setIdid);

  return (
    <div>
      <header>
        <h1>What did I do?</h1>
      </header>
      <div>
        <form onSubmit={onSubmit}>
          <label htmlFor="what">I did</label>
          <input name="what"></input>
          <label htmlFor="from">from</label>
          <input type="time" name="from"></input>
          <label htmlFor="to">to</label>
          <input type="time" name="to"></input>
          <label htmlFor="on">on</label>
          <input type="date" name="on"></input>
          <button>Add</button>
        </form>
      </div>
      <div>
        <h2>I did</h2>
        <table>
          <thead>
            <tr>
              <th>What</th>
              <th>From</th>
              <th>To</th>
              <th>On</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
