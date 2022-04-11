import React, { useEffect } from 'react';
import ChannelMain from '../Modals/ModalMain/ModalMain';
import LeftBar from '../LeftBar/LeftBar';
import Header from '../Header/Header';

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
        }
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

                <main id="main_acts" style={{ position: 'absolute', right: 0, padding: '8px 8px 0', zIndex: -1 }}>
                    <div id='totals' style={{ display: 'none' }}>
                        <h1>Totais</h1>
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