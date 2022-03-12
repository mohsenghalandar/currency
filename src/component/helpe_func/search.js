function search(list,str){
    if (str !== null)
    {
    const data = list.filter(item => item.name.toLowerCase().includes(str));
    return (data);
    }

}
export default search ;
