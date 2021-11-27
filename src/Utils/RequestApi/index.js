import axios from "axios";

export default function requestApi(endpoint, method = 'GET', body, accessToken) {
    return axios({
        method: method,
        url: `${process.env.REACT_APP_API_URL}/${endpoint}`,
        data: body,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    })
        .catch(err => {
            console.error(err)
        })
}
