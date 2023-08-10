// // question 1: jo hum name likhe wo hello ke jagah print ho jaye

// import React, { useState } from "react";
// function App() {
//   const[name,setName]=useState("");

// function changeText(event){
//   console.log("hello");//if u will write your name then in console hello will print
//   console.log(event.target.value);
//   setName(event.target.value);
// }

//   return (
//     <div className="container">
//       <h1> hello{name}</h1>
//       <input onChange={changeText}type="text" placeholder="What's your name?"
//       value={name}/>
//       <button>Submit</button>
//     </div>
//   );
// }

// export default App;
// // question 1: jo hum name likhe wo hello ke jagah print ho jaye

// import React, { useState } from "react";
// function App() {
//   const[name,setName]=useState("");

// function changeText(event){
//   console.log("hello");//if u will write your name then in console hello will print
//   console.log(event.target.value);
//   setName(event.target.value);
// }

//   return (
//     <div className="container">
//       <h1> hello{name}</h1>
//       <input onChange={changeText}type="text" placeholder="What's your name?"
//       value={name}/>
//       <button>Submit</button>
//     </div>
//   );
// }

// export default App;
// question 2: jo hum name likhe wo hello ke jagah print ho jaye lekin submit button par click karne ke baad

import React, { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [headName, setheading] = useState("");
  function changeText(event) {
    console.log("hello"); //if u will write your name then in console hello will print
    console.log(event.target.value);
    setName(event.target.value);
  }
  function sethead() {
    setheading(name);
  }

  return (
    <div className="container">
      <h1> hello{headName}</h1>
      <form>
        <input
          onChange={changeText}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button onClick={sethead}>Submit</button>
      </form>
    </div>
  );
}

export default App;

//yaha form mr kyu rakha hai ...vivekanand print hone ke baad  bapas original position me aa jayega
