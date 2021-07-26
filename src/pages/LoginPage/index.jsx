import React from "react";
import getRequestAuth from '../../APIv1/auth/'
import { Formik } from 'formik'
import { Input, Button, Select } from '@chakra-ui/react'

export function LoginPage(props) {
    return (
        <div>
            <Formik 
                initialValues={ {user: "Enter your name" }}
                onSubmit={({user}) => {
                   //  console.log(user)
                    getRequestAuth(user);
            }}>   
                {
                    (props) => (
                        <div>
                            <h1>Enter your name!</h1>
                             <form onSubmit={props.handleSubmit}>
                                <Input type="text" name="user" onChange={props.handleChange} defaultValue={"user"} />
                                <Button type="submit" colorScheme="red" children="Update Name" />
                            </form>
                        </div>
                    )
                }
            </Formik>
        </div>
    );
}