import axios from 'axios'
import * as Constants from '../common/Constants';
import data from '../stories/data';
import { getUserToken } from '../utils/Helper';

let baseURL = Constants.baseURL;

export const GetBalance = async function () {
  let path = "api/Transaction/GetBalance";
  let url = baseURL + path;
  try {
    let token = await getUserToken();
    const response = await axios({
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${token}`,
      },
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

export const GetAllTransaction = async function () {
  let path = "api/Transaction/GetAllTransaction";
  let url = baseURL + path;
  try {
    let token = await getUserToken();
    const response = await axios({
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${token}`,
      },
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

export const DepositWithdrawAmount = async function (data: any) {
  console.log(data)
  let path = "api/Transaction";
  let url = baseURL + path;
  try {
    let token = await getUserToken();
    const response = await axios({
      method: 'POST',
      url: url,
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${token}`,
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