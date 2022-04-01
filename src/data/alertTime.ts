function alertTime() {
    const btnSubmmit = document.querySelector('#btn_name');
    const radio = document.querySelectorAll('td input');
    var day;
    radio.forEach((i) => {
        i.addEventListener('click', () => {
            if ((i as HTMLInputElement).checked === true) {
                day = i.getAttribute('id');
                document.querySelector('td.td_on').classList.remove('td_on')
                i.parentElement.classList.add('td_on');
                // const storage = window.localStorage.getItem(day);
            };

        });

    });

    btnSubmmit.addEventListener('click', (e) => {
        e.preventDefault();
        (document.querySelector('.name') as HTMLDivElement).style.display = "none";
        (document.querySelector('.mods') as HTMLDivElement).style.background = "none";
        document.querySelector('.mods').setAttribute('style', 'display: none');

        const date = new Date().getDate().toString();

        const notify = document.querySelector('#mod_pref');

        // Formating Date to show in notification
        if ((notify as HTMLInputElement).checked === true) {
            const formatDate = () => {
                const dates = {
                    day: new Date().getDate().toString(),
                    month: (new Date().getMonth() + 1).toString(),
                };

                if (dates.day.length === 1) {
                    dates.day = `0${dates.day}`;
                };

                if (dates.month.length === 1) {
                    dates.month = `0${dates.month}`;
                };
                return `${dates.day}/${dates.month}`
            }

            Notification.requestPermission();

            if (date === day) {
                var notification = new Notification("🔔 Lembrete de Relatório", {
                    icon: 'https://github.com/savioandre/Relation/blob/main/public/assets/Time-Circlelogo.png?raw=true',
                    body: `Hoje já é dia ${formatDate()}, dia de entregar o relatório!`
                });
                notification.onclick = () => {
                    window.open("http://localhost:3000/");
                };
            } else {
                console.log('date 1');
                if (date > day) {
                    alert('Faltam ' + (parseInt(date) - parseInt(day)) + ' dias para entregar o relatório');
                } else {
                    alert('Já passaram ' + (parseInt(day) - parseInt(date)) + ' dias para entregar o relatório');
                };
            };
        }
    });
}


export default alertTime;