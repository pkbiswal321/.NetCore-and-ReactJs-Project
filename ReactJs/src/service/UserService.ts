import axios from 'axios'
import * as Constants from '../common/Constants';

let baseURL = Constants.baseURL;

export const LoginUser = async function (data: any) {
    let path = "api/User/Login";
    let url = baseURL + path;
    try {
        const response = await axios({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'Application/json',
            },
            data: data
        })
        const responseStatus = response.status
        console.log('Status Code for ' + url + ':' + responseStatus)
        return response
		//This is test comment
    } catch (error) {
        if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            return error.response
        }
    }
}

export const RegisterUser = async function (data: any) {
    console.log(data)
    let path = "api/User/Register";
    let url = baseURL + path;
    try {
        const response = await axios({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'Application/json',
            },
            data: data
        })
        console.log(response)
        const responseStatus = response.status
        console.log('Status Code for ' + url + ':' + responseStatus)
        return response
    } catch (error) {
        if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            return error.response
        }
    }
}