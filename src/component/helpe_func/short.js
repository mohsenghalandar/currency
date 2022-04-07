function short(title){
    const splitedtitle = title.split('.');
    const newTitle = splitedtitle[0]+splitedtitle[1]+splitedtitle[2]+splitedtitle[3];
    return newTitle;
}
export {short} ; 