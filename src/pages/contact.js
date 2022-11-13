import React, { useEffect, useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

function About () {
    async function handleSubmit(e) {
        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;

        console.log(e)
        console.log(e.target)

        if(!name || !email || !message) {
            e.preventDefault();
            Swal.fire({
                title: 'Please fill out all fields',
                icon: 'error',
                confirmButtonColor: '#ffc107',
            })

            return;
        }

        emailjs.sendForm('contact_service', 'contact_form', e.target, 'T7rdg2DUbyvdL4rB2');

        Swal.fire({
            title: 'Email sent!',
            icon: 'success',
            showConfirmButton: true,
        })
    }

    function handleBlur(e) {
        if(!e.target.value){
            e.target.style.border = '1px solid red';
        } else {
            e.target.style.border = '';
        }
    }

    return (
        <>
            <div className="contact-spacer"></div>
            <div className="form-container d-flex justify-content-center">
                <Form className="contact-form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleBlur} type="text" name="user_name" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onBlur={handleBlur} type="email" name="user_email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTextArea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control onBlur={handleBlur} rows={3} as="textarea" name="message" placeholder="Message" />
                    </Form.Group>

                    <Button className="m-3" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default About