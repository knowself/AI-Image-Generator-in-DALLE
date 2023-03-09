function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var days = (endDate - beginDate) / (1000 * 60 * 60 * 24);
    return days;
}


// create a list of 100 numbers
var list = [];
for (var i = 0; i < 100; i++) {
    list.push(i);
}
