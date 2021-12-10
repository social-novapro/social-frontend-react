import React from "react";
import getPostData from '../../APIv1/get/post/'
import { Formik } from 'formik'
import { Input, Button, Select } from '@chakra-ui/react'

export function PostPage(props) {
    return (
        <div>
            <Formik 
                initialValues={ {postID: "Enter your name" }}
                onSubmit={({postID}) => {
                   //  console.log(user)
                   getPostData(postID);
            }}>   
                {
                    (props) => (
                        <div>
                            <h1>Enter post you want to seach!</h1>
                             <form onSubmit={props.handleSubmit}>
                                <Input type="text" name="postID" onChange={props.handleChange} defaultValue={"postID"} />
                                <Button type="submit" colorScheme="red" children="Update PostID" />
                            </form>
                        </div>
                    )
                }
            </Formik>
        </div>
    );
}