import React from 'react';

const RegisterNew = () => {
    return (
        <div className='mod register' style={{display: 'none'}}>
            <div className='_head'>
                <p className='txt_bas'>Adicionar estudo ou revisita</p>
                <span className='close'>
                    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='9' cy='9' r='9' fill='#F1F1F1' />
                        <path d='M5 5L13 13M5 13L13 5' stroke='#382F70' strokeWidth='2' />
                    </svg>

                </span>
            </div>

            <div className='_main'>
                <form action='' method='get' id='register_new'>
                    <label htmlFor='register' className='inp'>
                        <p className='txt_title'>Novo</p>
                        <select id='register' className='s_in txt_main'>
                            <option>Estudante</option>
                            <option>Revisita</option>
                        </select>
                    </label>

                    <label htmlFor='new_name' className='inp'>
                        <p className='txt_title'>Nome</p>
                        <div className='it' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <input type='text' className='s_in txt_main' name='new_name' id='new_name' placeholder='Ex.: João, Maria, etc... ' />
                        </div>
                    </label>

                    <label htmlFor='rev_day' className='inp'>
                        <p className='txt_title'>Revisitar </p>
                        <div className='l_in'>
                            <select id='rev_day' className='s_in txt_main'>
                                <option>Segunda-feira</option>
                                <option>Terça-feira</option>
                                <option>Quarta-feira</option>
                                <option>Quinta-feira</option>
                                <option>Sexta-feira</option>
                                <option>Sábado</option>
                                <option>Domingo</option>
                            </select>

                            <label htmlFor='hours_revisit' className='l_in'>
                                <div className='it'>
                                    <input type='time' className='s_in txt_main' name='hours_revisit' id='hours_revisit' style={{ width: 'unset', margin: '0 0 0 2px'}}/>
                                </div>
                            </label>
                        </div>
                    </label>

                    <label htmlFor='pub' className='inp'>
                        <p className='txt_title'>Publicação</p>
                        <div className='it' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <input type='text' className='s_in txt_main' name='pub' id='pub' placeholder='Livro, Brochura, etc...' />
                        </div>
                    </label>

                    <label htmlFor='note' className='inp' id='add_note'>
                        <p className='txt_title'>Anotação</p>
                        <div className='it' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <textarea className='s_in txt_main' id='note' placeholder='Anotação'></textarea>
                        </div>

                    </label>

                    <button type='submit' id='ok' className='btn'>
                        <span className='txt_btn'>Ok</span>
                        <span>
                            <svg width='16' height='12' viewBox='0 0 16 12' fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M1 5.5L5.5 10L14.5 1' stroke='#F1F1F1' strokeWidth='2' />
                            </svg>
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
};

export default RegisterNew;