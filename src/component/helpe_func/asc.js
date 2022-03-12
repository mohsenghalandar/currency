const asc  = (data)=>{
    const ff = ( data.sort((a,b)=> a.current_price - b.current_price ).reverse() )
    return (ff)
}
export default asc;