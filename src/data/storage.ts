const totals = () => {
    let n = 0;
    while (relation.length > n) {
        const body = `
        <div id='totals' style={{ display: 'none' }}>
        <h1>Totais</h1>
        <div>
            <div className="view" id='total'>
                <div className="t_tl">
                    <h1 className="txt_title" style={{ background: '#6cce7a' }}>Total de&nbsp;
                        ${total.month()}
                    </h1>
                    <div className="del_i d_in" id="see_more">
                        <p className='p_el'>Ver mais</p>
                    </div>
                </div>
                <div className="total_activity">
                    <p className="act">
                        <span>{exporTotal.totalSum.hor()}&nbsp;</span>
                        Horas
                    </p>
                    <p className="act">
                        <span>{exporTotal.totalSum.pub()}&nbsp;</span>
                        Publicações
                    </p>
                    <p className="act">
                        <span>{exporTotal.totalSum.rev()}&nbsp;</span>
                        Revisitas
                    </p>
                    <p className="act">
                        <span>{exporTotal.totalSum.vid()}&nbsp;</span>
                        Vídeos
                    </p>
                    <p className="act">
                        <span>{exporTotal.totalSum.est()}&nbsp;</span>
                        Estudos
                    </p>
                </div>
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
        document.querySelector('#activitie').removeAttribute('style');
        document.querySelector('#totals').removeAttribute('style');
        (document.querySelector('#activities').lastChild as HTMLDivElement).setAttribute('style', 'margin-top: 8px');

        n += 1;
    };
}