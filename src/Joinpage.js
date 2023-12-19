import React, { useState } from 'react'
import axios from 'axios'

const Joinpage = () => {
  const [name,setname]=useState('');
  const handlesubmit=async(event)=>{
    event.preventDefault();
    await axios.post('http://localhost:3001/api/adduser',{
      username:name
    });
    
    
  }
  //console.log(name);
  return (
    <div className='w-full text-2xl'>
      <form>
        <input onChange={(e)=>setname(e.target.value)} placeholder='enter name'/>
        <button onClick={handlesubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Joinpage