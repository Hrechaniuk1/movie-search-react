import { Formik, Field, Form } from "formik"



export default function SearchBar({onSubmit}) {

    function submitHandler(values, actions) {
        onSubmit(values)
        actions.resetForm()
    }

    return (
        <div>
            <Formik
                initialValues={{search: ''}}
                onSubmit={submitHandler}
            >
                <Form>
                    <Field name='search'></Field>
                <button type="submit">Search</button>
                </Form>
            </Formik>
        </div>
    )
}