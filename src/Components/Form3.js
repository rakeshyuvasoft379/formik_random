import { Field, Form, Formik } from "formik"

export const Form3=()=>{
   return(
    <>
    <Formik
    initialValues={{
        firstName: "",
        lastName: "",
        email: ""
    }}
    onSubmit={async(values)=>{
        await new Promise((r)=>setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2))
    }}
    >
        <Form>
            <label>First Name</label>
            <Field id="firstName" name="firstName" placeholder="John"/>
            <label>Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Cena"/>
            <label>Email</label>
            <Field id="email" name="email" placeholder="john@gmail.com"/>
            <button type="submit">submit</button>
        </Form>
    </Formik>
    </>
   )
}