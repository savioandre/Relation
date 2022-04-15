function getData() {
    let data = {
        type: (document.querySelector('._main form select') as HTMLSelectElement).value,
        date: (document.querySelector('#date') as HTMLSelectElement).value,
        hours: (document.querySelector('#hours') as HTMLInputElement).value,
        publications: (document.querySelector('#publics') as HTMLInputElement).value,
        review: (document.querySelector('#revisits') as HTMLInputElement).value,
        videos: (document.querySelector('#videos') as HTMLInputElement).value,
        studies: (document.querySelector('#study') as HTMLInputElement).value,
        note: (document.querySelector('#note') as HTMLTextAreaElement).value,
    };
    // #d7b55d; #d75d8a; #8d9ff2

    if (data.hours.length === 0 &&
        data.publications.length === 0 &&
        data.review.length === 0 &&
        data.videos.length === 0 &&
        data.studies.length === 0
    ) {
        alert('Preencha pelo menos um campo.')
    } else {
        let color = '#d7b55d';
        switch (data.type) {
            case 'Estudos':
                color = '#8d9ff2'
                break;
            case 'Testemunho Informal':
                color = '#d75d8a'
                break;        
            default:
                color = '#d7b55d'
                break;
        }

        const body = `
    <div class="view">
        <div class="t_tl">
            <h1 class="txt_title" style="background: ${color}">${data.type}</h1>
            <span class="t_note"> ${data.date}</span>
        </div>
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
    </div>
    `;

        const localMain = document.createElement('div');
        const localActivities = document.createElement('div');
        const view = document.createElement('div');

        (document.querySelector('.close') as HTMLSpanElement).click();

        localMain.classList.add('main_act');
        view.innerHTML = body;
        localActivities.appendChild(view);
        localMain.appendChild(localActivities);
        document.querySelector('#activities').appendChild(localMain);
        document.querySelector('#activities').removeAttribute('style');
        document.querySelector('#totals').removeAttribute('style');
        (document.querySelector('#activities').lastChild as HTMLDivElement).setAttribute('style', 'margin-top: 8px');
    };

    data.hours = '';
    data.publications = '';
    data.review = '';
    data.videos = '';
    data.studies = '';
    data.note = '';

    const main = document.querySelector('main');
    if (main.childElementCount > 0) {
        (document.querySelector('.msg') as HTMLElement).style.display = 'none';
    } else (document.querySelector('.msg') as HTMLElement).style.display = 'block';
}

export default getData;