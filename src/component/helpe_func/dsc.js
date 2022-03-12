const dsc  = (data)=>{
    const ff = ( data.sort((a,b)=> a.current_price - b.current_price ) )
    return (ff)
}
export default dsc;