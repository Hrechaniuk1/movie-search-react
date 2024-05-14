import { Formik, Field, Form } from "formik"
import css from './SearchBar.module.css'


export default function SearchBar({onSubmit}) {

    function submitHandler(values) {
        onSubmit(values)
    }

    const initialValues = (localStorage.getItem('keyword') ? JSON.parse(localStorage.getItem('keyword')) : {search: ""})
    console.log(initialValues)

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
            >
                <Form className={css.search}>
                    <Field className={css.field} name='search' placeholder="Tap here..." autoComplete="off" ></Field>
                <button className={css.btn} type="submit">Search</button>
                </Form>
            </Formik>
        </div>
    )
}