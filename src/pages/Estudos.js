import React from 'react';
import LeftBar from '../components/LeftBar/LeftBar.js';
import Header from '../components/Header/Header.jsx';
import '../components/Modals/InitSection/ImgProfile.css';
import { Totals } from '../components/Totals.jsx';

const Totais = () => {
    return (
        <>
            <Header />
            <div className="layout">
                <p className="msg" style={{ textAlign: 'center', padding: '8px' }}>Sem atividades ainda</p>
                <main id="main_acts" style={{ position: 'absolute', top: '51px', right: 0, padding: '8px', zIndex: -1 }}>
                    <Totals />
                </main>
            </div>
            <LeftBar />
        </>

    )
}

export default Totais;