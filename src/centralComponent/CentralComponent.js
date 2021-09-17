import './text.style.css'
import {useState} from "react";
import '../index.css'
import Log from '../assets/Слой 2.svg'
import {Logos} from "./Logo.js";
import {ErrorMessage, Field, Form, Formik} from "formik";

export default function CentralComponent(props) {


    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            localStorage.setItem("Email", values.email)
            setSubmitting(false);
        })

    }

    const handleValidate = (values) => {
        const erors = {};
        if (!values.email)
            erors.email = 'Email is required'
        else if (!re.test(String(values.email).toLowerCase()))
            erors.email = 'Email is invalid'
        return erors;

    }

    return (
        <div>
            <Logos img={Log}/>
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
                                <div className={'forma'}>
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