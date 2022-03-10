let  data;
const api = async()=>{
    await( fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24')
    .then(response => response.json())
    .then(json => data=json)
    )
    return(data)
}
export default api