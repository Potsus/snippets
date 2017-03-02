function formatDate(date) {
    var monthNames = [
        "January", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];

    var day = ("00" + date.getDate()).slice(-2);
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + '-' + monthNames[monthIndex] + '-' + year;
}

document.getElementById('CAT_Custom_2154742_984308').value = formatDate(new Date());
