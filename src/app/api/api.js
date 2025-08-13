import axios from "axios";

export async function fetchUser(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
}

