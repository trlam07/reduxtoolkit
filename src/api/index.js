import axios from "axios";
import { PRODUCT_URL } from "../constants";

const fakeAPI = () => {
    return axios.create({
        baseURL: PRODUCT_URL,
    })
}

export default fakeAPI;