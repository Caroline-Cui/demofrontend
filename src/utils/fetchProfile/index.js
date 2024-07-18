import axios from "axios";
const {REACT_APP_API} = process.env

export async function fetchProfile() {
    const response = await axios.get(REACT_APP_API + "/api")
    return response.data
}

