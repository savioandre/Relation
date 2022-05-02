import React, { useEffect } from 'react';
import ChannelMain from '../Modals/ModalMain/ModalMain';
import LeftBar from '../LeftBar/LeftBar';
import Header from '../Header/Header';
import '../Modals/InitSection/ImgProfile.css';
import total from '../../data/totalData.ts';
import exporTotal from '../../data/data.ts';

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
                    <div id='totals' style={{ display: 'none' }}>
                        <h1>Totais</h1>
                        <div>
                            <div className="view" id='total'>
                                <div className="t_tl">
                                    <h1 className="txt_title" style={{ background: '#6cce7a' }}>Total de&nbsp;
                                        {total.month()}
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