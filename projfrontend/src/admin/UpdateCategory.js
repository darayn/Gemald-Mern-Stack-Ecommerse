import React, { useState, useEffect } from "react";
import Base from '../core/Base'
import { Link } from 'react-router-dom'
import { isAutheticated } from '../auth/helper';
import { getCategory,getCategories, updateaCategory } from './helper/adminapicall'

export default function UpdateCategory({match}) {


    const { user, token } = isAutheticated();

 
    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const preload = (categoryId) => {
      getCategory(categoryId).then( data => {
          // console.log(data)
          if(data.error) {
              setError(true)
          } else {
              setName(data.name)   
          }
      })  
  }


    useEffect(() => {
      preload(match.params.categoryId);
    }, []);
  
  //   TODO

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false)
    updateaCategory(match.params.categoryId, user._id, token, {name})
    .then(data => {
        if(data.error) {
            setError(true)
        } else {
            setError("")
            setSuccess(true)
            setName("")          // Once submit is pressed i want to clear the fields
        }
    })
}
// Upper section 



// const handleChange = name => event => {
//     setValues({...values,error: false, [name]: event.target.value })
// };
    const handleChange = event => {
      setError("");
      setName(event.target.value)
  }    
  

    
    //   const successMessage = () => (
    //     <div
    //       className="alert alert-success mt-3"
    //       style={{ display: createdProduct ? "" : "none" }}
    //     >
    //       <h4>{createdProduct} updated successfully</h4>
    //     </div>
    //   );
    const updateCategoryForm = () => (
      <form>
      <div className="form-group">
          
          <p className="lead">Enter the Category</p>
          <input type="text"
          className ="form-control my-3"
          onChange = {handleChange}
          placeholder = "For Ex. Summer"
          value = {name}
          required/>
          <button onClick = {onSubmit} className="btn btn-outline-info">Update the Category</button>
      </div>
  </form>
      );
    return (
        <Base
      title="Update a category here!"
      description="Welcome to category update section"
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {/* {successMessage()} */}
          {updateCategoryForm()}
          
        </div>
      </div>
    </Base>
    )
}
