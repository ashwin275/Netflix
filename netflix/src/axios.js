import axios from 'axios'
import {baseUrl} from './const/const'

const instance = axios.create({
    baseURL:baseUrl,
   
  });

  export default instance
