import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useReducer, useState, createContext, useContext, useRef } from 'react';

// const initialState = {
//   todos: [
//     { id: 1, title: 'Learn React', completed: false },
//     { id: 2, title: 'Build a project', completed: false }
//   ]
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'add':
//       return {
//         todos: [...state.todos, action.payload]
//       };
//     case 'update':
//       return {
//         todos: state.todos.map(todo =>
//           {
//             if(todo.id === action.payload.id){
//               return action.payload;
//             }
//             return todo;
//           }
//         )
//       };
//     case 'delete':
//       return {
//         todos: state.todos.filter(todo => todo.id !== action.payload.id)
//       };
//     default:
//       return state;
//   }
// }


// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [newTodo, setNewTodo] = useState('');
//   const [currentTodo, setCurrentTodo] = useState()

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (currentTodo) {
//       handleUpdate()
//     } else {
//       const newId = state.todos.length + 1;
//       const newTask = { id: newId, title: newTodo, completed: false };
//       console.log(newTask);
//       dispatch({ type: 'add', payload: newTask });
//     }

//     setNewTodo('');
//   }

//   function handleShowUpdate(id) {
//     const current = state.todos.find(item => item.id === id)
//     setNewTodo(current.title)
//     setCurrentTodo(current)
//   }

//   function handleUpdate() {
//     dispatch({ type: 'update', payload: currentTodo });
//     setCurrentTodo(undefined)
//   }

//   function handleDelete(todo) {
//     dispatch({ type: 'delete', payload: todo });
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add a new task"
//           value={newTodo}
//           onChange={e => {
//             if (currentTodo) {
//               setCurrentTodo({ ...currentTodo, title: e.target.value })
//             } 
//               setNewTodo(e.target.value)
//           }}
//         />
//         <button type="submit">Add</button>
//       </form>
//       <ul>
//         {state.todos.map(todo => (
//           <li key={todo.id}>
//             <input type="checkbox" checked={todo.completed} />
//             <span>{todo.title}</span>

//             <button onClick={() => handleShowUpdate(todo.id)}>Edit</button>
//             <button onClick={() => handleDelete(todo)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

// }
// Tạo một context mới
// const ThemeContext = createContext('');

// // Component con sử dụng context
// function Button() {
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{ background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
//       {theme === 'dark' ? 'Dark' : 'Light'} Theme
//     </button>
//   );
// }

// // Component cha cung cấp giá trị cho context
// function App() {
//   const [theme, setTheme] = useState('light');
//   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

//   return (
//     <div>
//       <ThemeContext.Provider value={theme}>
//         <Button />
//       </ThemeContext.Provider>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// }
// function App() {
//   const boxRef = useRef(null);

//   const handleResize = (e) => {
//     boxRef.current.style.width = `${e.clientX}px`;
//     boxRef.current.style.height = `${e.clientY}px`;
//   };

//   return (
//     <div
//       ref={boxRef}
//       style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
//       onMouseMove={handleResize}
//     />
//   );
// }

function App() {
  return (
    <div className="">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/News">News</Link>
          </li>
          <li>
          <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/News' element={<News/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
