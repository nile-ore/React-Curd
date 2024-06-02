import { FormControl, FormGroup, InputLabel,Input,styled, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {addUser} from "../service/api";

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

const AddUser = () => {

    const [user,setuser] = useState(initialvalues);

    let navigate = useNavigate();

    const OnchangeValue = (e) => {
        setuser({...user, [e.target.name]:e.target.value})
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/');    
    }

    return (
        <Form>
            <Typography variant="h3"> Add User </Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange= {(e) => OnchangeValue(e) } name = "name" />
            </FormControl>

            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange= {(e) => OnchangeValue(e)} name = "username"/>
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange= {(e) => OnchangeValue(e)} name = "email"/>
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange= {(e) => OnchangeValue(e) } name = "phone"/>
            </FormControl>

            <FormControl>
                <Button onClick = { () =>  addUserDetails() }variant="contained" color="success">Add User</Button>
            </FormControl>

        </Form>
    )
}

export default AddUser;