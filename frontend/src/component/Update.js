
import React from 'react'
import { useState,useEffect} from 'react';
import axios  from 'axios'
import { useParams } from 'react-router-dom';
const url_base='http://127.0.0.1:8000/'
const Update = () => {

  const {annonce_id}=useParams()
  console.log(annonce_id);
  const [categorys,setcategorys]=useState([]);
  const [modalites,setmodalites]=useState([]);
  const [category,setcategory]=useState()
  const [modalite,setmodalite]=useState()
  const [commune,setcommune]=useState('')
  const [wilaya,setwilaya]=useState('')
  const [adresse,setadresse]=useState('')
  const [tarif,settarif]=useState('')
  const [theme,settheme]=useState('')
  const [description,setdescription]=useState('')
  const [status,setstatus]=useState('')
  const [photo,setphoto]=useState('')
  
useEffect(()=>{
   try{
      axios.get(url_base+'category/')
      .then(resp=> {
setcategorys(resp.data)
      })
    }catch(error){
console.log(error)
    }
    try{
      axios.get(url_base+'modalite/')
      .then(resp=> {
        setmodalites(resp.data)
})
    }catch(error){
console.log(error)
    };
},[])

  //let user_id=localStorage.getItem('user_id')

const handelForm=async(e) => {
const id=localStorage.getItem('id')
  e.preventDefault();

  const annonceformatdata2=new FormData();
  annonceformatdata2.append("annonceur",id)
  annonceformatdata2.append("category",category)
  annonceformatdata2.append("theme",theme)
  annonceformatdata2.append("description",description)
  annonceformatdata2.append("tarif",tarif)
  annonceformatdata2.append("modalite",modalite)
  annonceformatdata2.append("wilaya",wilaya)
  annonceformatdata2.append("adresse",adresse)
  annonceformatdata2.append("commune",commune)
  annonceformatdata2.append("photo",photo)
 
  try{
    axios.put(url_base+'annonce/'+annonce_id+'/',annonceformatdata2,{
      headers:{
        'Content-Type':'application/json',
      }
     })
    .then(resp => {
      setstatus('valide')
      window.location.href='/'
    })
  }catch(error){
    console.log(error)
    setstatus('error')
  }};


return (
     <>
     <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       <form>
  {status==='error' && <p class="text-success">error publication  </p>}
  <div className="form-group">
    <label htmlFor="theme">theme</label>
    <input type="text" onChange={e=>
   settheme(e.target.value)} name="theme" className="form-control"  id="theme"  placeholder="Enter theme"
      />
  </div>
   <div></div>
    <div></div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea onChange={e=>
   setdescription(e.target.value)} name="description" className="form-control" id="description"  rows="3"></textarea>
  </div>
  <div></div>
    <div></div>
  <div className="form-group">
    <label htmlFor="category">Category</label>
    <select  onChange={e=>
   setcategory(e.target.value)} name="category" className="form-control" id="category"   >
                         
                           {categorys.map((element,index) => 
                                {return  <option key={index} value={element.id} >{element.name}</option>})} 
                           
    </select>
    <div></div>
    <div></div>
  <div className="form-group">
    <label htmlFor="tarif">tarif</label>
    <input type="text" onChange={e=>
   settarif(e.target.value)} name="tarif" className="form-control" id="tarif"  placeholder="Enter tarif"
      />
  </div>


  <div className="form-group">
    <label htmlFor="modalite" >Modalite</label>
    <select onChange={e=>
   setmodalite(e.target.value)} name="modalite" className="form-control"  id="modalite"  >
     {modalites.map((element,index)=> 
           {return <option  key={index}  value={element.id}>{element.type}</option>
      
     })} 

    </select>
    </div>
    <div></div>
    <div></div>
  </div>
  <div className="form-group">
    <label htmlFor="commune">commune</label>
    <input  type="text" onChange={e=>
   setcommune(e.target.value)}  className="form-control" id="commune"  placeholder="Enter commune" />
  </div>
  <div className="form-group">
    <label htmlFor="adresse">adresse</label>
    <input  type="text" onChange={e=>
   setadresse(e.target.value)} name="adresse"    className="form-control" id="adresse" placeholder="Enter adresse" />
  </div>
  <div></div>
    <div></div>
    <div className="form-group">
    <label htmlFor="wilaya">wilaya</label>
    <input type="text" onChange={e=>
   setwilaya(e.target.value)} name="wilaya" className="form-control"  id="wilaya"  placeholder="Enter wilaya"
      />
  </div>
  <div className="form-group">
    <label htmlFor="photo">photo</label>
    <input type="file" onChange={e=>
   setphoto(e.target.value)} name="photo" className="form-control"  id="photo"  placeholder="inserer la photo"
      />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handelForm}>Update</button>
</form>
</>

)
}

export default Update
