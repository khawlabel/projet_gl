import React from 'react'
import { useState,useEffect} from 'react';
import axios  from 'axios'
import { useParams } from 'react-router-dom';
const url_base='http://127.0.0.1:8000/'

const Delete = () => {
const {annonce_id}=useParams()
const [status,setstatus]=useState('')
const handelForm=async(e) => {
     e.preventDefault();
try{
     axios.delete(url_base+'annonce/'+annonce_id+'/')
     .then(resp => {
       setstatus('valide')
       window.location.href='/'
     })
   }catch(error){
     console.log(error)
     setstatus('error')
   }}
   return(
     <>
     <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
<center>
		<div class="verify-container">
			<div class="verify-msg">
				<p>Are you sure you want to continue ? </p>
			</div>
			<div class="verify-link">
      <button type="submit" className="btn btn-primary" onClick={handelForm}>yes, i am</button>
  
			</div>
		</div>
    </center>
    </>
   )};

export default Delete
 