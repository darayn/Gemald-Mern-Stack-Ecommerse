import React, {useState} from "react"
import Base from "../core/Base"
import {Link} from "react-router-dom"
import { signup } from "../auth/helper";


const Signup = () =>{
    const [values,setValues] =useState({
        name:"",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const {name,email,password,error,success} = values

const handleChange = name => event => {
    setValues({...values,error: false, [name]: event.target.value })
};

const onSubmit = event =>{
    event.preventDefault()
    setValues({...values,error: false})
    signup({name,email,password})
    .then(data=>{
        if(data.error){
            setValues({...values,error:data.error,success:false})
        }
        else{
            setValues({
                ...values,
                name: "",
                email: "",
                password: "",
                error: "",
                success: true
            })
        }
    })
    .catch(console.log("Error in Signup"))
}
    


    const signupform =() => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                <form action="
                ">
                    <div className="form-group">
                        <label  className="text-light">Name</label>
                        <input className="form-control" onChange={handleChange("name")} value={name} type="text"/>
                    </div>

                    <div className="form-group">
                        <label  className="text-light">Email</label>
                        <input className="form-control" onChange={handleChange("email")} value={email} type="email"/>
                    </div>
                    <div className="form-group">
                        <label  className="text-light">Password</label>
                        <input className="form-control" onChange={handleChange("password")} value={password} type="password"/>
                    </div>
                    <br/>
                    <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                </form>
                </div>  
            </div>
        )
    }

const successmessage = () =>{
    return(
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
    <div className="alert alert-success"
      style  ={{display: success ? "" : "none"}}
       >
    New account was created Sucessfully. Please <Link to="/signin">Login here</Link>.
    </div>
    </div>
    </div>
    );
};
const errormessage = () =>{
    return(
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
    <div className="alert alert-danger"
      style ={{display: error ? "" : "none"}}
       >
        {error}
    </div>
    </div>
    </div>
    );
};


    return(
        <Base title = "Sign up Page" description="A page for user to signup">
            {successmessage()}
            {errormessage()}
       {signupform()}
    {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
        </Base>
    )
};

export default Signup;