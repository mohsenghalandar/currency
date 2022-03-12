let  data;
const api = async(filter)=>{
    await( fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=&order=${filter.market_rank}&per_page=${filter.per_page}&page=${filter.page}&sparkline=false&price_change_percentage=24`)
    .then(response => response.json())
    .then(json => data=json)
    )
    return(data)
}
export default api