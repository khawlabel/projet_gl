import React from 'react'
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const url_base='http://127.0.0.1:8000/'
const Info_annonceur = () => {
const {annonceur_id}=useParams()
console.log(annonceur_id);
const [element,setelement]=useState('')
useEffect(()=>{
  try{
       axios.get(url_base+'annonceur/'+annonceur_id+'/')
       .then(resp=> {
 setelement(resp.data)
}
       )
     }catch(error){
 console.log(error)

}},[])

  


  return (
    <>
    <h1>hi</h1>
   <div className='container mt-4'>
   <div className="row mb-4" >
   <div className="row col-4" >
   <div className="card-md-3" >
   <div className="card" >
  <div className="card-body">
    <h5 clasNames="card-title">{element.first_name}</h5>
    <p className="card-text">{element.last_name}</p>
    <h2  className="card-text">{element.email}</h2>
    <h2  className="card-text">{element.numero}</h2>
  </div>
  </div>
  </div>
  </div>
</div>
</div>
    <h3>les annonces </h3>
    </>
  )
}

export default Info_annonceur