import { FormControl, FormGroup, InputLabel,Input,styled, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

import {editUsergetData, editUser } from "../service/api";
import {useNavigate, useParams } from "react-router-dom";

const Form = styled(FormGroup)`
    width : 50%;
    margin : 5% auto;
    & > div {
        margin-top : 20px;
    }
`
const initialvalues = {
    name : '',
    username : '',
    email : '',
    phone : '',
}

const EditUser = () => {

    const [user,setuser] = useState(initialvalues);
    let navigate = useNavigate();
    const {id} = useParams();

    useEffect( () => {
        getUserData();
    },[]);

    const getUserData = async () => {
        let response = await editUsergetData(id);
        console.log(response);
        setuser(response.data);
    }

    const OnchangeValue = (e) => {
        setuser({...user, [e.target.name]:e.target.value})
    }

    const editUserNow = async () => {
        await editUser(user,id);
        navigate('/');     
    }

    return (
        <Form>
            <Typography variant="h3"> Add User </Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange= {(e) => OnchangeValue(e) } name = "name" value = {user.name} />
            </FormControl>

            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange= {(e) => OnchangeValue(e)} name = "username" value = {user.username}/>
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange= {(e) => OnchangeValue(e)} name = "email" value = {user.email}/>
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange= {(e) => OnchangeValue(e) } name = "phone" value = {user.phone}/>
            </FormControl>

            <FormControl>
                <Button onClick = { () =>  editUserNow() } variant="contained" color="success">Edit User</Button>
            </FormControl>

        </Form>
    )
}

export default EditUser;