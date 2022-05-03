import React, { useEffect } from 'react';
import ChannelMain from '../Modals/ModalMain/ModalMain';
import LeftBar from '../LeftBar/LeftBar';
import Header from '../Header/Header';
import '../Modals/InitSection/ImgProfile.css';
import total from '../../data/totalData.ts';
import exporTotal from '../../data/data.ts';
import { Totals } from '../Totals.jsx';

const sumTotal = () => {
    let sum = exporTotal.totalSum.hor();
    return sum;
}
sumTotal();

const Main = () => {
    useEffect(() => {
        document.querySelector('form.name').setAttribute('style', 'display: none');
        document.querySelector('.mods').setAttribute('style', 'display: none');
        document.querySelector('.cookies').remove();
        document.querySelector('form.name').remove();
        exporTotal.Relation();
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
                    <Totals/>
                    <div id='activitie' style={{ display: 'none' }}>
                        <h1>Atividades</h1>
                        <div id='activities'></div>
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