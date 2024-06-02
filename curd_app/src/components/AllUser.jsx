import {Table,TableHead,TableRow,TableCell,FormControl, FormGroup, InputLabel,Input,styled, Typography, Button, TableBody } from "@mui/material";
import {viewUser} from "../service/api";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState , useEffect } from "react";

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width : 90%;
    margin : 50px auto 0 auto;
`

const StyledTableRow = styled(TableRow)`
    background : #000000;
    & > th {
        color : #fff;
        font-size : 22px;
    }
    
`

const Tbody = styled(TableRow)`
    & > td {
        font-size : 17px;
    }`

const AllUser = () => {
    const [user,setuser] = useState([]);

    useEffect( () => {
        getUsersDetails();
    },[])

    const getUsersDetails = async() => {
        let response = await viewUser();
        setuser(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <StyledTableRow>
                    <TableCell> ID </TableCell>
                    <TableCell> Name </TableCell>
                    <TableCell> Email </TableCell>
                    <TableCell> Phone No </TableCell>
                    <TableCell> User Name </TableCell>
                    <TableCell>  </TableCell>
                    
                </StyledTableRow>
            </TableHead>
            <TableBody>
                {
                    user.map( user => (
                        <Tbody>
                            <TableCell> {user.id} </TableCell>
                            <TableCell> {user.name} </TableCell>
                            <TableCell> {user.email} </TableCell>
                            <TableCell> {user.phone} </TableCell>
                            <TableCell> {user.username} </TableCell>
                            <TableCell> 
                                <Button variant="contained" startIcon={<EditIcon />}color="success" style = {{margin : 10}} component = {Link} to={`/edit/${user.id}`} >Edit</Button>
                                <Button variant="contained"  startIcon={<DeleteIcon />} color = "error" component = {Link} to={`/delete/${user.id}`} >Delete</Button>
                            </TableCell>                         
                        </Tbody>

                    )

                    )
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;