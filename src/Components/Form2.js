import { useFormik } from 'formik';
import React from 'react';

export const Form2=()=>{

    const formik= useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email:""
        },
        onSubmit: values=>{
            alert(JSON.stringify(values, null ,2))
        }
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <label>First Name</label>
            <input 
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            />
            <label>Last Name</label>
            <input 
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            />
             <label>Email Address</label>
            <input 
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            <button type="submit">submit</button>
        </form>
    )
}