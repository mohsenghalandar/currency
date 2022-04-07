let  data;
const ss = async(str)=>{
    await( fetch(`https://api.coingecko.com/api/v3/search?query=${str}`)
    .then(response => response.json())
    .then(json => data=json)
    )
    return(data)
}
export default ss