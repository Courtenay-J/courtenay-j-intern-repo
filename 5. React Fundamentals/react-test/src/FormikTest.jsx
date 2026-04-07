import {useFormik} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email:''
}

const onSubmit = values => {
    console.log('Form data',values)
}

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string()
            .email("Invalid email format")
            .required("Required")
})

export function FormikTest() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log('Form errors',formik.errors)

  return (
    <div class="center">
        <h1>Formik</h1>
        <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
                <label for="name">Name</label>
                <input type="text"
                    name="name" id="name"
                    {...formik.getFieldProps('name')}
                />
            </div>
            {formik.errors.name ? <div className="errors">{formik.errors.name}</div> : null}
            <div className="form-control">
                <label for="email">Email</label>
                <input type="email"
                   {...formik.getFieldProps('email')}
                />
            </div>
            {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}
            <div className="formControl">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
} 