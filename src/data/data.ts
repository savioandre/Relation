import total from './totalData.ts';
let relation = JSON.parse(localStorage.getItem(total.month())) || [];

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
    (document.querySelector('.close') as HTMLSpanElement).click();

    if (data.hours === '00' && data.publications === '00' && data.review === '00' && data.videos === '00' && data.studies === '00') {
        alert('Preencha pelo menos um campo.');
    } else {

        let formatNote = data.note;
        let pto = ``;
        if (window.innerWidth < 500) {
            if (formatNote.length >= (window.innerWidth / 50)) {
                pto = `...`
            }
            formatNote = `${formatNote.substring(0, parseInt(window.innerWidth / 50))}${pto}`;
        } else if (window.innerWidth >= 500) {

            if (formatNote.length >= (window.innerWidth / 18)) {
                pto = `...`
            }
            formatNote = `${formatNote.substring(0, parseInt(window.innerWidth / 18))}${pto}`;
        }

        const utils = {
            formatDate(date) {
                const splittedDate = data.date.split("-");
                return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
            }
        };

        const idNameStorage = `${data.type}(${utils.formatDate()})`;

        relation.push({
            id: idNameStorage,
            modalidade: data.type,
            data: utils.formatDate(),
            horas: data.hours,
            publicaçoes: data.publications,
            revisitas: data.review,
            videos: data.videos,
            estudos: data.studies,
            anotaçao: data.note,
        });

        localStorage.setItem(total.month(), JSON.stringify(relation));
        document.location.reload(true);
    };

    data.hours = '';
    data.publications = '';
    data.review = '';
    data.videos = '';
    data.studies = '';
    data.note = '';

    if (JSON.parse(localStorage.getItem(total.month())).length >= 1) {
        (document.querySelector('.msg') as HTMLElement).style.display = 'none';
    } else (document.querySelector('.msg') as HTMLElement).style.display = 'block';

};

const Relation = () => {
    let n = 0;
    while (relation.length > n) {

        var color = '#d7b55d';
        switch (relation[n].modalidade) {
            case 'Estudos':
                color = '#8d9ff2'
                break;
            case 'Testemunho Informal':
                color = '#d75d8a'
                break;
            default:
                color = '#d7b55d'
                break;
        };

        const body = `
    <div class="view">
        <div class="t_tl">
            <h1 class="txt_title" style="background: ${color}">${relation[n].modalidade}</h1>
            <div class="d_in">
                <span class="t_note"> ${relation[n].data}</span>
                <div class="del_i d_in" title="Apagar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#bb2727" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="main_activity">
            <p class="act">${relation[n].horas} Horas</p>
            <p class="act">${relation[n].publicaçoes} Publicações</p>
            <p class="act">${relation[n].revisitas} Revisitas</p>
            <p class="act">${relation[n].videos} Vídeos</p>
            <p class="act">${relation[n].estudos} Estudos</p>
            <div class="note">
                <p class="t_note">Anotação:</p>
                <p class="act" title="${relation[n].anotaçao}">${relation[n].anotaçao}</p>
            </div>
        </div>
    </div>
    `;

        const localMain = document.createElement('div');
        const localActivities = document.createElement('div');
        const view = document.createElement('div');

        localMain.classList.add('main_act');
        view.innerHTML = body;
        localActivities.appendChild(view);
        localMain.setAttribute('data-index', n);
        localMain.appendChild(localActivities);
        document.querySelector('#activities').appendChild(localMain);
        document.querySelector('#activities').removeAttribute('style');
        document.querySelector('#totals').removeAttribute('style');
        (document.querySelector('#activities').lastChild as HTMLDivElement).setAttribute('style', 'margin-top: 8px');

        n += 1;
    }

    document.querySelectorAll('.del_i').forEach((del_i) => {
        del_i.addEventListener('click', () => {
            const index = del_i.closest('div.main_act').getAttribute('data-index');
            relation.splice(parseInt(index), 1);
            localStorage.setItem(total.month(), JSON.stringify(relation));
            document.location.reload();
        });
    });
};

const totalSum = {
    hor() {
        var hor = 0;
        for (var i = 0; i < relation.length; i++) {
            hor += parseFloat(relation[i].horas);
        };
        return hor;
    },
    pub() {
        var pub = 0;
        for (var i = 0; i < relation.length; i++) {
            pub += parseInt(relation[i].publicaçoes);
        };
        return pub;
    },
    rev() {
        var rev = 0;
        for (var i = 0; i < relation.length; i++) {
            rev += parseInt(relation[i].revisitas);
        };
        return rev;
    },
    vid() {
        var vid = 0;
        for (var i = 0; i < relation.length; i++) {
            vid += parseInt(relation[i].videos);
        };
        return vid;
    },
    est() {
        var est = 0;
        for (var i = 0; i < relation.length; i++) {
            est += parseInt(relation[i].estudos);
        };
        return est;
    }
};

const exporTotal = { getData, Relation, totalSum }

export default exporTotal;