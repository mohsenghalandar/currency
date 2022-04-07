import axios from "axios";
const info = async()=>{
    const data = await(axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin`));
    return data ;
}
export default info