import React, { useEffect, useRef} from "react";
// import getRequestAuth from '../../APIv1/auth/'
import { Formik } from 'formik'
// import { Input, Button, Select } from '@chakra-ui/react'
import { useCookies } from 'react-cookie';

export function LoginPage(props) {
    const [cookies, setCookie] = useCookies(['interactToken']);
    const ref = useRef(null);

    // const handleSubmit = async (values) => {
    //     const data = await getRequestAuth(values)
    //     console.log(data)
    // }


    const tryLogin = async (values) => {
        console.log(values)
        values.preventDefault()
        const name = document.getElementById("username-input").value

        localStorage.setItem("name", JSON.stringify(name));

        // values.onSubmit.pr
        setCookie('interactToken', {
            token: 'atsignin',
            userid: '123',
            username: name
        });
        // this function aint working
    };

    return (
        <div>
            <div>
                <form onSubmit={tryLogin}>
                {/* {/* <form onSubmit={() => tryLogin(values)}>   */} 
                    <h1>Login</h1>
                    <label>
                        <p>Username:</p>
                        <input type="text" id="username-input" name="username" />
                    </label>
                    <label>
                        {/* <button type="submit" onClick={tryLogin}>Log In</button> */}
                    </label>
                </form>
            </div>
        </div>
    );
}