# Handling form errors with Formik

## How does Formik simplify form management compared to handling state manually?

Attempting to manually manage the state of a form is not only time consuming, but results in duplicated code and an increased likelihood of typos breaking your script.

Formik simplifies form management by automatically tracking changes to form values, handling validation and error messages, and handling form submission. It stores the values of a form's inputs as an object, allowing them to be easily changed or called later.

It also allows you to specify shared behaviours for form elements (e.g. `onBlur`, `onChange`, `value`), and call them consistently with only one line of code. Like so:

```language: HTML
<input type="text"
    name="name" id="name"
    {...formik.getFieldProps('name')}
/>
```

## What are the benefits of using Formik’s validation instead of writing validation logic manually?

Formik's validation greatly cuts down on the lines of code needed to identify invalid inputs and display their corresponding error text. The larger your form, the more errors you'd need to check for, and thus the more lines of code a Formik approach will save.

Formik allows you to define custom validation rules, which you can call across forms for consistent validation behaviour. It also allows you to import existing validation libraries, such as Yup.

For example this:

```language: JavaScript
const validate = values =>{
   let errors = {}
    if (!values.name)
        errors.name = 'Required'

    if (!values.email)
        errors.email = 'Required'
        
    else if (!/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/i.test(values.email))
        errors.email = 'Invalid email format'

    return errors
}
```

Can be simplified to this:

```language: JavaScript
const validationSchema = Yup.object({
email: Yup.string()
    .required("Required")
    .email("Invalid email format")
})
```

Formik stores error messages in an object, allowing them to be easily displayed in a page code. For example, the line below will display the error associated with 'email' validation, assuming there is one.

```language: JSX
{formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}
```
