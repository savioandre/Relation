function getData() {
    let data = {
        type: (document.querySelector('select') as HTMLSelectElement).value,
        hours: (document.querySelector('#hours') as HTMLInputElement).value,
        publications: (document.querySelector('#publics') as HTMLInputElement).value,
        review: (document.querySelector('#revisits') as HTMLInputElement).value,
        videos: (document.querySelector('#videos') as HTMLInputElement).value,
        studies: (document.querySelector('#study') as HTMLInputElement).value,
        note: (document.querySelector('#note') as HTMLTextAreaElement).value,
    };

    if (
        data.hours.length === 0 &&
        data.publications.length === 0 &&
        data.review.length === 0 &&
        data.videos.length === 0 &&
        data.studies.length === 0
    ) {
        alert('Preencha pelo menos um campo.')
    } else {

        const gerDate = () => {
            const date = new Date();
            let day = date.getDate().toString();
            let month = date.getMonth().toString();
            const year = date.getFullYear().toString();

            if (day.length === 1) {
                day = `0${day}`
            }

            if (month.length === 1) {
                month = `0${month}`
            }

            return `${day}/${month}/${year}`
        };

        const body = `
    <div class="view">
        <h1 class="txt_title">${data.type} - ${gerDate()}</h1>
        <div class="main_activity">
            <p class="act">${data.hours} Horas</p>
            <p class="act">${data.publications} Publicações</p>
            <p class="act">${data.review} Revisitas</p>
            <p class="act">${data.videos} Vídeos</p>
            <p class="act">${data.studies} Estudos</p>
            <div class="note">
                <p class="t_note">Anotação:</p>
                <p class="act">${data.note}</p>
            </div>
        </div>
    </div>`;

        const localMain = document.createElement('div');
        const localActivities = document.createElement('div');
        const view = document.createElement('div');

        (document.querySelector('.close') as HTMLSpanElement).click();

        localMain.classList.add('main_act');
        view.innerHTML = body;
        localActivities.appendChild(view);
        localMain.appendChild(localActivities);
        document.querySelector('main#main_acts').appendChild(localMain);

    }

    data.type = '';
    data.hours = '';
    data.publications = '';
    data.review = '';
    data.videos = '';
    data.studies = '';
    data.note = '';
}

export default getData;