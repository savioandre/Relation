import React from 'react';
import ChannelMain from '../Modals/ChannelMain/ChannelMain';
import LeftBar from '../LeftBar/LeftBar';
import Header from '../Header/Header';

const Main = () => {

    return (
        <>
            <Header></Header>
            <ChannelMain id="modais" />
            <div className="layout">
                <p className="msg" style={{ textAlign: 'center', padding: '8px' }}>Sem atividades ainda</p>

                <div
                    style={{ display: 'none', position: 'absolute', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', top: 0, right: 0 }}>
                </div>

                <main id="main_acts" style={{ position: 'absolute', right: 0, padding: '8px 8px 0', zIndex: -1 }}></main>

                <div className="btns">
                    <button className="btn _act">+ Adicionar atividade</button>
                </div>
            </div>
            <LeftBar />
        </>
    )
}

export default Main;