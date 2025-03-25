import axios from "axios";

export const getAllTask = async  () =>{
try {
    const resp =  await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/component/sections/api`);
    console.log('fetch data', resp.data)
    return resp.data
} catch (error) {
    return []
}
}

