import axios from "axios";

const {REACT_APP_API} = process.env
export async function updateProfile(data) {
    await axios(
        {
            method: 'POST',
            url: REACT_APP_API + "/api",
            data
        }
    )

}