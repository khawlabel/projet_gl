import React from 'react'
import { useState,useEffect} from 'react';
import axios  from 'axios'
import { Link } from 'react-router-dom';
const url_base='http://127.0.0.1:8000/'
const MesAnnonces = () => {
  const id_user=localStorage.getItem('id')
  console.log(id_user)
  const [mesannonces,setmesannonces]=useState([])
  useEffect(()=>{
    try{
       axios.get(url_base+'Mes_Annonce/'+id_user+'/')
     
       .then(resp=> {
 setmesannonces(resp.data)
}
       )
     }catch(error){
 console.log(error)
};
},[])


 return(
  <>
    <br/><br/> <br/> <br/><br/><br/><br/><br/><br/><br/>
    <br/><br/> <br/> 
    
    <section class="featured" id="featured">

<h1 class="heading"> <span>Our</span> Announces </h1>


<div class="box-container">
    {mesannonces.map((element,index) => 
        <div class="box">
            <div class="image-container">
                <img src="images/calculatrice.jpg" alt=""/>
            </div>
            <div class="content">
                <div class="price">
                <div>
    
    </div>

                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-envelope"></a>
                    <a href="#" class="fas fa-phone"></a>
                </div>
                <div class="location">
                    <h3>{element.theme}</h3>
                    <p>{element.description}</p>
                    <p>{element.tarif}</p>
                    <p>dkdkkdk dkdkd</p>
                </div>
                <div class="buttons">
                <button type='submit'><Link className="nav-link" to={'/update/'+element.id+'/'}>Update</Link></button> 
                <button type='submit' ><Link className="nav-link" to={'/delete/'+element.id+'/'}>Delete</Link></button>
              
                </div>
            </div>
        </div>

)}
    </div>
 
   


</section>
</>
 )
}

export default MesAnnonces
