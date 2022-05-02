function alertTime() {
    const btnSubmmit = document.querySelector('#btn_name');
    const radio = document.querySelectorAll('td input');
    var day;
    var img;
    const date = new Date().getDate().toString();
    radio.forEach((i) => {
        i.addEventListener('click', () => {
            if ((i as HTMLInputElement).checked === true) {
                day = i.getAttribute('id');
                document.querySelector('td.td_on').classList.remove('td_on');
                i.parentElement.classList.add('td_on');
                localStorage.setItem('day', day);
            };
        });
    });

    const avatar = document.querySelectorAll('.sel_pro input');
    avatar.forEach((i) => {
        i.addEventListener('click', () => {
            if ((i as HTMLInputElement).checked === true) {
                img = i.getAttribute('value');
                document.querySelector('.sel_pro.ava_on').classList.remove('ava_on');
                i.parentElement.classList.add('ava_on');
                img = `n_${img}`;
                document.querySelector('.preview_user').setAttribute('id', img);
                localStorage.setItem('avatar', img);
            };
        });
    });

    btnSubmmit.addEventListener('click', (e) => {
        e.preventDefault();
        (document.querySelector('.name') as HTMLDivElement).style.display = "none";
        (document.querySelector('.mods') as HTMLDivElement).style.background = "none";
        document.querySelector('.mods').setAttribute('style', 'display: none');

        const notify = document.querySelector('#mod_pref');

        const totalExportData = {
            name: (document.querySelector('#name') as HTMLInputElement).value,
            select: (document.querySelector('select.s_in') as HTMLSelectElement).value,
        };
        const name = totalExportData.name;
        const select = totalExportData.select;

        JSON.stringify(localStorage.setItem('name', name));
        JSON.stringify(localStorage.setItem('select', select));

        const avatar = document.createElement('span');
        const account = document.querySelector('.account.img');
        avatar.classList.add('avatar');
        avatar.classList.add('p_sel_pro');
        avatar.setAttribute('id', localStorage.getItem('avatar'));
        avatar.innerText = name.substr(0, 2).toUpperCase();
        account.removeChild(account.children[0]);
        account.appendChild(avatar);
        document.querySelector('form.name').remove();

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

            if (date === localStorage.getItem('day')) {
                var notification = new Notification("🔔 Lembrete de Relatório", {
                    icon: 'https://github.com/savioandre/Relation/blob/main/public/assets/Time-Circlelogo.png?raw=true',
                    body: `Hoje já é dia ${formatDate()}, dia de entregar o relatório!`
                });
                notification.onclick = () => {
                    window.open("http://localhost:3000/");
                };
            } else {
                if (date > localStorage.getItem('day')) {
                    alert('Faltam ' + (parseInt(date) - parseInt(day)) + ' dias para entregar o relatório');
                } else {
                    alert('Já passaram ' + (parseInt(day) - parseInt(date)) + ' dias para entregar o relatório');
                };
            };
        }
    });
}

export default alertTime;