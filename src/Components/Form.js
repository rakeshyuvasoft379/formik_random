
import {useFormik} from 'formik';

export const Form=()=>{

    const formik= useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: values=>{
            alert(JSON.stringify(values, null, 2))
        }
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <label>Email Address</label>
            <input 
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            <button type="submit">submit</button>
        </form>
    )
}