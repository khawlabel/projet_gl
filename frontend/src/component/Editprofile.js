import React, { useEffect } from 'react';
import { useState} from 'react';
import axios  from 'axios'
import './login.css'
import { Link } from 'react-router-dom';
const url_base='http://127.0.0.1:8000/'
const Editprofile = () => {
    const [user,setuser]=useState([])
    const Swal = require('sweetalert2')
    const id_user=localStorage.getItem('id')
    console.log(id_user)
    useEffect(()=>{
      try{
         axios.get(url_base+'annonceur/'+id_user+'/')
         .then(resp=> {
   setuser(resp.data)
         })
       }catch(error){
   console.log(error)
  };
  },[])
   
  return (
    <>

  
       
   
<div class="cont">
    <div class="container rounded bg-white mt-5">
        <div class="row">
            <div class="col-md-4 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img class="rounded-circle mt-5" src="images/pic-2.png" width="100" height="100"/>
                    <span class="font-weight-bold">{user.first_name}</span>
                    <span class="text-black-50">{user.email}</span>
                    <span>Algeria</span>
                </div>
            </div>
            <div class="col-md-8">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="text-right textEdit">Edit Profile</h6>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><input type="text" class="form-control" value="Katia" placeholder="First name" /></div>
                        <div class="col-md-6"><input type="text" class="form-control" value="Bair" placeholder="Family name"/></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="Email address" value="Bairkatia06@gmail.com"/></div>
                        <div class="col-md-6"><input type="text" class="form-control" value="0568596966" placeholder="Phone number"/></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="address" value="ifrene, Toudja, Bejaia, Algeria"/></div>
                        <div class="col-md-6"><input type="text" class="form-control" value="Algeria" placeholder="Country"/></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="file" class="form-control" onChange="readURL(this)" accept="Image/*"/></div>
                    </div>
                    <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                </div>
            </div>
        </div>
    </div>
</div>
   </>

  )
}

export default Editprofile