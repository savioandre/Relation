import React, { useEffect } from 'react';
import FileSaver from 'file-saver';
import html2canvas from 'html2canvas';
import exporTotal from '../../../data/data.ts';
import './ViewTotal.css';

const minus = () => {
    let hoursCurrent = '00.00';
    if (parseFloat(exporTotal.totalSum.hor()) > 0) {
        hoursCurrent = exporTotal.totalSum.hor().replace(':', '.');
    };
    const resolve = (50 - parseFloat(hoursCurrent)).toString();
    return `${resolve.replace('.', ':')}`;
}

const ViewTotal = () => {
    useEffect(() => {
        document.querySelector('#see_more').addEventListener('click', () => {
            document.querySelector('.total_more').classList.remove('off');
            document.querySelector('.total_more').removeAttribute('style');
            document.querySelector('.mod_out').setAttribute('style', 'position: absolute;width: 100%;height: 100%');
            document.querySelector('.mods').setAttribute('style', 'align-items: center');
        });

        document.getElementById('copy_m').addEventListener('click', () => {
            const txt = document.querySelector('.relat_');
            txt.select();
            document.execCommand('copy');
            alert('Copiado!');
        });

        document.getElementById('save_img').addEventListener('click', () => {
            html2canvas(document.getElementById('l_relat_')).then(canvas => {
                // var canvas = canvas;
                // canvas.toBlob(function (blob) {
                //     FileSaver.saveAs(blob, 'relatório.png');
                // });
                alert('Disponível apenas na próxima versão!');
            });
        });

    })
    return (
        <div className='mod total_more' style={{ display: 'none' }} >
            <div className='_head'>
                <p className='txt_bas'>Atividades Totais</p>
                <span className='close'>
                    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='9' cy='9' r='9' fill='#F1F1F1' />
                        <path d='M5 5L13 13M5 13L13 5' stroke='#382F70' strokeWidth='2' />
                    </svg>

                </span>
            </div>
            <div className='_main'>
                <div id='l_relat_'>
                    <textarea className='s_in relat_' id='relat_' defaultValue={exporTotal.totalSum.total()}>
                    </textarea>
                </div>

                <div className='min'>
                    <span className='t_note'>
                        Faltam&nbsp;{minus()}, para sua meta!
                    </span>
                </div>

                <div className='inp'>
                    <label htmlFor='copy_m' className='s_in p_el'>
                        <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M12.961 5.58337H7.62764C6.89127 5.58337 6.29431 6.18033 6.29431 6.91671V12.25C6.29431 12.9864 6.89127 13.5834 7.62764 13.5834H12.961C13.6974 13.5834 14.2943 12.9864 14.2943 12.25V6.91671C14.2943 6.18033 13.6974 5.58337 12.961 5.58337Z' stroke='#382F70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M11.6276 5.58329V4.24996C11.6276 3.89634 11.4871 3.5572 11.237 3.30715C10.987 3.0571 10.6479 2.91663 10.2942 2.91663H4.9609C4.60727 2.91663 4.26814 3.0571 4.01809 3.30715C3.76804 3.5572 3.62756 3.89634 3.62756 4.24996V9.58329C3.62756 9.93691 3.76804 10.2761 4.01809 10.5261C4.26814 10.7762 4.60727 10.9166 4.9609 10.9166H6.29423' stroke='#382F70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                        <input type='button' id='copy_m' defaultValue='Copiar' />
                    </label>
                    <label htmlFor='save_img' className='s_in p_el'>
                        <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M3.62756 11.3334V12.6667C3.62756 13.0203 3.76804 13.3595 4.01809 13.6095C4.26814 13.8596 4.60727 14 4.9609 14H12.9609C13.3145 14 13.6537 13.8596 13.9037 13.6095C14.1538 13.3595 14.2942 13.0203 14.2942 12.6667V11.3334' stroke='#382F70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M5.62756 7.33337L8.9609 10.6667L12.2942 7.33337' stroke='#382F70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M8.96094 2.66663V10.6666' stroke='#382F70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                        <input type='button' id='save_img' defaultValue='Baixar' />
                    </label>
                    <label htmlFor='send_m' className='s_in p_el'>
                        <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_107_85)'>
                                <path d='M6.87756 9.58333L14.2109 2.25' stroke='#382F70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                                <path d='M14.211 2.25L9.87765 14.25C9.8484 14.3138 9.80144 14.3679 9.74235 14.4058C9.68326 14.4438 9.61453 14.4639 9.54432 14.4639C9.47411 14.4639 9.40537 14.4438 9.34628 14.4058C9.28719 14.3679 9.24023 14.3138 9.21098 14.25L6.87765 9.58333L2.21098 7.25C2.14716 7.22075 2.09307 7.17379 2.05515 7.1147C2.01723 7.05561 1.99707 6.98688 1.99707 6.91667C1.99707 6.84646 2.01723 6.77772 2.05515 6.71863C2.09307 6.65954 2.14716 6.61258 2.21098 6.58333L14.211 2.25Z' stroke='#382F70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                            </g>
                            <defs>
                                <clipPath id='clip0_107_85'>
                                    <rect width='16' height='16' fill='white' transform='translate(0.210938 0.25)' />
                                </clipPath>
                            </defs>
                        </svg>
                        <input type='button' id='send_m' defaultValue='Enviar' />
                    </label>
                </div>
            </div>
        </div>
    )
};

export default ViewTotal;