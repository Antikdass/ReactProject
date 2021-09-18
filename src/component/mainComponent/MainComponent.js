import {Logo} from "../img/Logo.js";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {patterns} from "../../validation/patterns";
import Log from '../../assets/Logo.svg'
import './text.style.css'
import '../../index.css'

export default function MainComponent(props) {
    const handleSubmit = (values, {setSubmitting}) => {
            localStorage.setItem("Email", values.email)
            values.email = ''
            setSubmitting(false);

    }

    const handleValidate = (values) => {
        const erors = {};
        if (!values.email)
            erors.email = 'Email is required'
        else if (!patterns.email.test(String(values.email).toLowerCase()))
            erors.email = 'Email is invalid'
        return erors;

    }

    return (
        <div>
            <Logo img={Log}/>
            <h1 className={'title'}>We will be right back!</h1>
            <p className={'text'}>Our site is currently under construction and will reopen again shortly. You can still
                leave your email address and we will get in touch with you.</p>
            <div>
                <Formik initialValues={{email: ''}}
                        validate={handleValidate}
                        onSubmit={handleSubmit}
                >

                    {({isSubmitting}) => {
                        return (
                            <Form>
                                <div className={'form'}>
                                    <div className={'input'}>
                                        <Field className={'e-mail'} placeholder={'E-Mail'} type={'text'} name={'email'}/>
                                        <ErrorMessage className={'eror'} component={'div'} name={'email'}/>
                                    </div>
                                    <button className={'button'} disabled={isSubmitting} type={'submit'}>Send</button>
                                </div>

                            </Form>
                        )
                    }}

                </Formik>


            </div>
        </div>
    );
}