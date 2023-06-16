import React, { useState,useEffect } from 'react'

function RegisteredInterns() {
    let  [notes, setNotes] = useState([])
    useEffect(()=>{
        getNotes()
    }, [notes])
    let getNotes = async ()=>{
        let response = await  fetch('http://127.0.0.1:8000/interns',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
              
            }
        })
        let data = await response.json()
        setNotes(data)
    }
  return (
    <div className="notes-list">
         <h1>Registered Notes</h1>
    {notes.map((note, index) => (
       
        <div className="notes-list-item">
           
        <h3 key={index}>{note.name}</h3>
        
        </div>
      
    ))}
</div>
  )
}

export default RegisteredInterns