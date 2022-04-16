const date = new Date();
const exportDate = {
    day: date.getDate().toString(),
    month: date.getMonth(),
    year: date.getFullYear().toString(),
};

const month = () => {
    let intoMonth = exportDate.month;
    switch (intoMonth) {
        case 0:
            intoMonth = 'Janeiro';
            break;
        case 1:
            intoMonth = 'Fevereiro';
            break;
        case 2:
            intoMonth = 'Março';
            break;
        case 3:
            intoMonth = 'Abril';
            break;
        case 4:
            intoMonth = 'Maio';
            break;
        case 5:
            intoMonth = 'Junho';
            break;
        case 6:
            intoMonth = 'Julho';
            break;
        case 7:
            intoMonth = 'Agosto';
            break;
        case 8:
            intoMonth = 'Setembro';
            break;
        case 9:
            intoMonth = 'Outubro';
            break;
        case 10:
            intoMonth = 'Novembro';
            break;
        case 11:
            intoMonth = 'Dezembro';
            break;
    }
    return intoMonth;
};

const lastDay = () => {
    const ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const split = ultimoDia.toString().split(' ');
    return split[2];
}

const total = {
    exportDate,
    month,
    lastDay,
}

export default total;