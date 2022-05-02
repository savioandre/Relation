import React from 'react';
import './Alerts.css';

export function alert() {
    document.querySelector('.btn_cancel').addEventListener('click');
} 

const AlertDelete = () => {
    return (
        <div className='mod alert' style={{display: 'none'}}>
            <div className='_head'>
                <p className='txt_bas'>Apagar Atividade</p>
                <span className='close'>
                    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='9' cy='9' r='9' fill='#F1F1F1' />
                        <path d='M5 5L13 13M5 13L13 5' stroke='#382F70' strokeWidth='2' />
                    </svg>

                </span>
            </div>
            <div className='_main'>
                <p className='txt_title'>Apagar esta atividade definitivamente.</p>
                <div className='inp'>
                    <input type='button' className='s_in btn_cancel' defaultValue='Cancelar'/>
                    <input type='button' className='btn_confirm' defaultValue='Confirmar'/>
                </div>
            </div>
        </div>
    )
}

export default AlertDelete;