import React, { useEffect } from 'react';
import ChannelMain from '../Modals/ModalMain/ModalMain';
import LeftBar from '../LeftBar/LeftBar';
import Header from '../Header/Header';
import '../Modals/InitSection/ImgProfile.css';
import total from '../../data/totalData.ts';

const Main = () => {
    useEffect(() => {
        const nameStorage = localStorage.getItem('name');
        const selectStorage = localStorage.getItem('select');
        if (nameStorage != null && selectStorage != null) {
            const name = localStorage.getItem('name');
            document.querySelector('title').innerHTML = `Relatório de Serviço de ${name}`;
            document.querySelector('form.name').setAttribute('style', 'display: none');
            document.querySelector('.mods').setAttribute('style', 'display: none');
            document.querySelector('.cookies').remove();
            document.querySelector('form.name').remove();

            const avatar = `<span class="avatar p_sel_pro" id=${localStorage.getItem('avatar')}>${name.substr(0, 2).toUpperCase()}</span>`;
            const account = document.querySelectorAll('div.account.img');
            account.forEach((banner) => {
                banner.removeChild(banner.children[0]);
                banner.innerHTML = avatar;
            });
        };
    })

    return (
        <>
            <Header></Header>
            <ChannelMain id="modais" />
            <div className="layout">
                <p className="msg" style={{ textAlign: 'center', padding: '8px' }}>Sem atividades ainda</p>

                <div
                    style={{ display: 'none', position: 'absolute', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', top: 0, right: 0 }}>
                </div>

                <main id="main_acts" style={{ position: 'absolute', top: '51px', right: 0, padding: '8px', zIndex: -1 }}>
                    <div id='totals' style={{ display: 'none' }}>
                        <h1>Totais</h1>
                        <div>
                            <div className="view">
                                <div className="t_tl">
                                    <h1 className="txt_title" style={{ background: '#6cce7a' }}>Total de&nbsp;
                                        {total.month()}
                                    </h1>
                                </div>
                                <div className="total_activity">
                                    <p className="act">Horas</p>
                                    <p className="act">Publicações</p>
                                    <p className="act">Revisitas</p>
                                    <p className="act">Vídeos</p>
                                    <p className="act">Estudos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='activities' style={{ display: 'none' }}>
                        <h1>Atividades</h1>
                    </div>
                </main>

                <div className="btns">
                    <button className="btn _act">+ Adicionar atividade</button>
                </div>
            </div>
            <LeftBar />
        </>
    )
}

export default Main;