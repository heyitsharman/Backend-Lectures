function formatDate(date) {
    let formatedDate = new Date().toISOString();
    return formatedDate;
}

function dateConverter(date){
    let newDate = new Date().toLocaleTimeString();
    return newDate;
}

// module.exports = formatDate  ; when only 1 functions /variable is to be returned
// exporting function
module.exports = {formatDate,dateConverter};   //multiple functions to be returned


