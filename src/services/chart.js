let  data;
const chart = async()=>{
    await( fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=500`)
    .then(response => response.json())
    .then(json => data=json)
    )
    return(data)
}
export default chart