import React, { useState, useRef } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const inputRef = useRef(null);

  const addTodo = () => {
    if (input) {
      if (isEditing) {
        // Update the todo item at the specific index
        const updatedTodos = todos.map((todo, index) =>
          index === editIndex ? input : todo
        );
        setTodos(updatedTodos);
        setIsEditing(false); // Stop editing after update
        setEditIndex(null);
      } else {
        setTodos([...todos, input]); // Add a new todo if not editing
      }
      setInput(''); // Clear the input
      inputRef.current.focus();
    }
  };

  const editTodo = (index) => {
    setInput(todos[index]); // Set the input to the selected todo
    setIsEditing(true); // Enable editing mode
    setEditIndex(index); // Track the index of the todo being edited
    inputRef.current.focus();
  };

  const removeTodo = (index) => {

            todos.splice(index , 1);
    setTodos([...todos]);
  };

  return (
    <>
      <div className="container-fluid px-0">
        <div className="col-12">
          <div className="todo py-5">
        <div className="overlay"></div>
            <h1 className="display-1 text-light fw-bold z-index-1">Todo List</h1>
          </div>
        </div>
        <div className="container">
          <div className="col-12">
            <div className="todoshow pt-5">
              <input
                ref={inputRef}
                className="todoInput"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo"
              />
              <button
                className="todobtn btn btn-primary"
                onClick={addTodo}
              >
                <span>{isEditing ? 'Save' : 'Add'}</span> {/* Update button text */}
              </button>
            </div>
            <ul className="pt-5">
              {todos.map((todo, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span className="fs-3 pe-5">{todo}</span>
                  <button
                    className="btn btn-success px-5 me-3"
                    onClick={() => editTodo(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-warning px-5"
                    onClick={() => removeTodo(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


// import React, { useState, useRef } from 'react';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');
//   const inputRef = useRef(null);

//   const addTodo = () => {
//     if (input) {
//       setTodos([...todos, input]);
//       setInput('');
//       inputRef.current.focus();
//     }
//   };

//   const editTodo = (index) => {
//     console.log('todo Edited' , index);

//     // setTodos(todos.filter((_, i) => i !== index));
//   };

//   const removeTodo = (index) => {
//         console.log('todo deleted' , index);
//         todos.splice(index , 1);
//     setTodos([...todos]);
//   };


//   return (
//     <>
//     <div className="container-fluid px-0">
//       <div className="col-12">
//       <div className="todo py-5">
//         <h1 className="display-1 text-light fw-bold">Todo List</h1>
//         </div>
//         </div>
//         <div className="container">
//           <div className="col-12">
//             <div className="todoshow pt-5">
//           <input
//             ref={inputRef}
//             className="todoInput"
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Add a new todo"
//           />
//           <button
//             className="todobtn btn btn-primary"
//             onClick={addTodo}
//           >
//             <span>Add</span>
//           </button>

//         </div>
//         <ul className='pt-5'>
//           {todos.map((todo, index) => (
//             <li key={index} className="flex justify-between items-center mb-2">
//               <span className='fs-3 pe-5'>{todo}</span>
//               <button
//                 className="btn btn-success px-5 me-3"
//                 onClick={() => editTodo(index)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="btn btn-warning px-5"
//                 onClick={() => removeTodo(index)}
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       </div>
//       </div>
//     </>
//   );
// }

// export default App;












// import { useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// function App() {

//   const inputRef = useRef();
//   console.log("Input");
//   const [input, setInput] = useState([]);

//   const addTodo = (event) => {
//     event.preventDefault()
//     console.log(inputRef.current);
//     data.push({title: input.current.value , id: Date.now()})
//     setData(input);
//     input.current.value = ""
//   }

//   const deleteTodo = (index)=>{
//     console.log('todo deleted' , index);
//     todo.splice(index , 1);
//     setTodo([...todo]);

//   }

//   return (

//     <>
//     <h1 className='mb-4'>Todo App</h1>
//     <form onSubmit={addTodo}>
//       <div className='col-12'>
//       <input type="text" className="form-control" placeholder='Enter Your Todo For Today...' ref={inputRef.current}/>
//       <button type="submit" className="btn btn-primary mb-3" >Add Todo</button>
//       </div>
//     </form>

//             <ol> 
//              {data.length > 0 ? data.map((item , index) => {
//               return <li key={index}>{item}
//                <button onClick={()=> deleteTodo(index)}>Delete</button>
//               </li>
//             }) : <h1>No item found...</h1>}
//            </ol>
//          </>
//   )
// }

// export default App




// import { useState } from "react"

// function App() {
//   const [num, setNum] = useState(0)


//   const addCounter = () => {
//     setNum(num + 1)
//   }
//   const lessCounter = () => {
//     if (num === 0) {
//       alert("nahi hoskta")
//       return
//     }
//     setNum(num - 1)
//   }

//   return (
//     <>
//       <h1>Hello world! {num}</h1>
//       <button onClick={addCounter}>Add</button>
//       <h1>{num}</h1>
//       <button onClick={lessCounter}>less</button>
//       <p>{num > 5 ? 'bara hogaye ho' : 'bacha ho abhi'}</p>

//     </>
//   )
// }

// export default App




{/* <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder="enter password" /> */ }






// import { useState } from 'react'
// import { useRef, useState } from "react";

// function App() {

//   const input = useRef()
//   const [todo, setTodo] = useState([])

//   const addTodo = (event) => {
//     event.preventDefault()
//     console.log(input.current.value);
//     todo.push({title: input.current.value , id: Date.now()})
//     setTodo([...todo])
//     console.log(todo);
//     input.current.value = ""
//   }

//   const deleteTodo = (index)=>{
//     console.log('todo deleted' , index);
//     todo.splice(index , 1);
//     setTodo([...todo]);

//   }

//   return (
//     <>
//       <h1>Todo App</h1>
//       <form onSubmit={addTodo}>
//         <input type="text" placeholder="enter todo" ref={input} />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ol>
//         {todo.length > 0 ? todo.map((item , index) => {
//           return <li key={index}>{item}
//           <button onClick={()=> deleteTodo(index)}>Delete</button>
//           </li>
//         }) : <h1>No item found...</h1>}
//       </ol>
//     </>
//   )
// }

// export default App











// use state kehta haa rendering wala saara mamla ma khud dekhonga..
// react ka undar map use krta waqt jo item render kr rha ho uska undar unique key prop dena ha










// import './app.css'

// function App() {
//   const [color , setColor] = useState('red')
//   return (
//     <>
//       {/* <h1 className="head">Hello world</h1> */}
//       <h1 style={{
//         backgroundColor: color,
//         color: 'white',
//         textAlign: 'center'
//       }}>Hello world</h1>
//       <button onClick={()=> setColor('red')}>Red</button>
//       <button onClick={()=> setColor('green')}>Green </button>
//       <button onClick={()=> setColor('blue')}>Blue</button>
//     </>
//   )
// }
// export default App



























// aik simple state banaigi empty array ka saath. user sa form ma value loga us array ka undar {title: userinputvalue , id: Date.now()}






// usestate
// use ref
// conditional rendering
// todo app
