
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     axios.get('http://localhost:4040/bollywood') // Update the URL based on your backend server
//       .then(response => {
//         setMovies(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []); // Empty dependency array ensures that the effect runs only once

//   return (
//     <div>
//       <h1>Bollywood Movies</h1>
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id}>
//             <img src={movie.image} alt={movie.name} />
//             <h2>{movie.name}</h2>
//             <p>{movie.text}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState('');
//   const [response, setResponse] = useState('');

//   const submitData = async () => {
//     try {
//       const result = await axios.post('http://localhost:6500/submit', { data });
//       setResponse(result.data);
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>React Server Interaction Example</h1>

//       <label htmlFor="data">Enter Data:</label>
//       <input
//         type="text"
//         id="data"
//         value={data}
//         onChange={(e) => setData(e.target.value)}
//       />

//       <button type="button" onClick={submitData}>
//         Submit
//       </button>

//       <div>
//         <strong>Server Response:</strong>
//         <p>{response}</p>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react'
// import axios  from 'axios';
// const App = () => {

//     const[data,setData] = useState('');
//     const [display,setDisplay] = useState('')

//     const submitData= async()=>{
//         try{
//         const result = await axios.post("https://sample-node-d2bq.onrender.com/submit",{data})
//         // console.log(result);
//         console.log(result,"data")
//         setDisplay(result.data)
//         }
//         catch(err){
//             console.log(err,"Error")
//         }
//     }
//   return (
//     <div>
//         <input type='text' value={data} onChange={(e)=>setData(e.target.value)}/> 
//         <button onClick={submitData}>Submit</button>

//         <h1>{display}</h1>
//     </div>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import './App.css'

//create a socket connection to the server
const socket = io('http://localhost:5555/')


const App = () => {

    const[inputValue, setInputValue] = useState('');
    const[display, setDisplay] = useState('')

    useEffect(()=>{
        socket.on('Client',(data)=>{
            console.log(data,"data")
            setDisplay(data)
        })

        socket.on('sendtoall',(data)=>{
            console.log(data,"data")
            setDisplay(data)
        })

        socket.on('exclusive',(data)=>{
            console.log(data,"data")
            setDisplay(data)
        })

        socket.on('JoinRoom',(data)=>{
            console.log(data)
            // alert(data)
            setDisplay(data)
        })

        socket.on('sendtoroomdata',(data)=>{
            console.log(data)
        })

    },[])
    
    const handleSendMsg=()=>{
        socket.emit('MESSAGE', inputValue)
    }

    const handleBroardcast=()=>{
        socket.emit('BROADCAST',inputValue)
    }

    const handleExclusiveBroardcast=()=>{
        socket.emit('EXCLUSIVEBROADCAST',inputValue)
    }

    const handleJoinRoom=()=>{
        let roomName = prompt("Please Enter the room name:")
        socket.emit('JOINROOM',roomName)
    }

    const handleSendMsgtoRoom=()=>{
        socket.emit('SENDTOROOM',inputValue)
    }
    

  return (
    <div className='container'>
        <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <hr/>
        <button onClick={handleSendMsg}>Send Message</button>
        <hr/>
        <button onClick={handleBroardcast}>Send to All participants</button>
        <hr/>
        <button onClick={handleExclusiveBroardcast}>EXCLUSIVE BROADCAST</button>
        <hr/>
        <button onClick={handleJoinRoom}>Join Room</button>
        <hr/>
        <button onClick={handleSendMsgtoRoom}>Send msg to Room</button>
        
        
        <h1>msg: {display}</h1>
    </div>
  )
}

export default App