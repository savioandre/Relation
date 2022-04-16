import React from 'react';
import getData from '../../../data/data.ts';
import total from '../../../data/totalData.ts';

let day = total.exportDate.day;
let month = total.exportDate.month;
const year = total.exportDate.year;

if (day.length === 1) {
    day = `0${day}`
}

if (month.toString().length === 1) {
    const forDate = parseInt(month + 1);
    month = `0${forDate}`;
}

const CreateActivity = () => {
    return (
        <div className='mod activity' style={{ display: 'none' }} >
            <div className='_head'>
                <p className='txt_bas'>Adicionar Atividades</p>
                <span className='close'>
                    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='9' cy='9' r='9' fill='#F1F1F1' />
                        <path d='M5 5L13 13M5 13L13 5' stroke='#382F70' strokeWidth='2' />
                    </svg>

                </span>
            </div>

            <div className='_main'>
                <form action='' method='get'>
                    <label htmlFor='select' className='inp'>
                        <p className='txt_title'>Modalidade</p>
                        <select id='select' className='s_in txt_main'>
                            <option>Pregação</option>
                            <option>Estudos</option>
                            <option>Testemunho Informal</option>
                        </select>
                    </label>

                    <label htmlFor='hours' className='inp' id='hour'>
                        <p className='txt_title'>Horas</p>
                        <div className='it' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <p className='s_in txt_main' aria-placeholder='00:00'>00:00</p>
                            <input type='number' className='s_in txt_main' name='hours' id='hours' maxLength='4'
                                placeholder='00:00' style={{ position: 'absolute', placeSelf: 'end', opacity: 0 }} />
                        </div>
                    </label>

                    <label htmlFor='publics' className='inp' id='public'>
                        <p className='txt_title'>Publicações</p>
                        <div className='it' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <p className='s_in txt_main' aria-placeholder='00'>00</p>
                            <input type='number' className='s_in txt_main' name='publics' id='publics' maxLength='3'
                                placeholder='00' style={{ position: 'absolute', placeSelf: 'end', opacity: 0 }} />
                        </div>

                    </label>

                    <label htmlFor='revisits' className='inp' id='revisit'>
                        <p className='txt_title'>Revisitas</p>
                        <div className='it' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <p className='s_in txt_main' aria-placeholder='00'>00</p>
                            <input type='number' className='s_in txt_main' name='revisits' id='revisits' maxLength='3'
                                placeholder='00' style={{ position: 'absolute', placeSelf: 'end', opacity: 0 }} />
                        </div>

                    </label>

                    <label htmlFor='videos' className='inp'>
                        <p className='txt_title'>Vídeos</p>
                        <div className='it' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <p className='s_in txt_main' aria-placeholder='00'>00</p>
                            <input type='number' className='s_in txt_main' name='videos' id='videos' maxLength='3'
                                placeholder='00' style={{ position: 'absolute', placeSelf: 'end', opacity: 0 }} />
                        </div>

                    </label>

                    <label htmlFor='study' className='inp' id='studies'>
                        <p className='txt_title'>Estudos</p>
                        <div className='it' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <p className='s_in txt_main' aria-placeholder='00'>00</p>
                            <input type='number' className='s_in txt_main' name='study' id='study' maxLength='3'
                                placeholder='00' style={{ position: 'absolute', placeSelf: 'end', opacity: 0 }} />
                        </div>

                    </label>

                    <label htmlFor='note' className='inp' id='add_note'>
                        <p className='txt_title'>Anotação</p>
                        <div className='it' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <textarea className='s_in txt_main' id='note' placeholder='Anotação'></textarea>
                        </div>

                    </label>

                    <div className="inp">
                        <label htmlFor="date">
                            <input type='date'
                                className='s_in txt_main'
                                name='date' id='date'
                                min={`${year}-${month}-01`}
                                max={`${year}-${month}-${total.lastDay()}`}
                                defaultValue={`${year}-${month}-${day}`} />
                        </label>
                        <button type='submit' id='ok' className='btn' onClick={getData}>
                            <span className='txt_btn'>Ok</span>
                            <span>
                                <svg width='16' height='12' viewBox='0 0 16 12' fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M1 5.5L5.5 10L14.5 1' stroke='#F1F1F1' strokeWidth='2' />
                                </svg>
                            </span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
};

export default CreateActivity;