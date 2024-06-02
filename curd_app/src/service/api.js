import axios from 'axios';

const API = 'https://api.jsonbin.io/v3/b/65bf564cdc74654018a00bc7?meta=false';

export const addUser = async (data) => {
    try{
        return await axios.post(API,data);
    }catch(error){
        console.log(error.message);
    }
    
}

export const viewUser = async () => {
    try{
        return await axios.get(API);
    }catch(error){
        console.log(error.message);
    }
    
}

export const editUsergetData = async (data) => {
    try{
        return await axios.get(`${API}/${data}`);
    }catch(error){
        console.log(error.message);
    }
    
}

export const editUser = async (data,id) => {
    try{
        return await axios.put(`${API}/${id}`,data);
    }catch(error){
        console.log(error.message);
    }
}

export const deleteUser = async (data,id) => {
    try{
        return await axios.delete(`${API}/${id}`,data);
    }catch(error){
        console.log(error.message);
    }
}