export function getNameMonth(index) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return monthNames[index]
}

export function getLocaleDate(date) {
    const dat = new Date(date)

    return dat.toLocaleDateString('en-US', {day: '2-digit'}) + ' ' +
        dat.toLocaleDateString('en-US', {month: 'long'}) + ', ' + dat.getFullYear() + ' year';

}

export function gerTemplateResultArray() {
    const arrMonth = [];
    for (let i = 0; i < 12; i++) {
        arrMonth.push([]);
    }

    return arrMonth;
}
