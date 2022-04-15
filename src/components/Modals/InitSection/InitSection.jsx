import React, { useEffect } from 'react';
import alertTime from '../../../data/alertTime.ts';
import './InitSection.css';
import './ImgProfile.css';

const InitSection = () => {
    useEffect(() => {
        var index = 1;
        document.querySelector('#n_step').addEventListener('click', (i) => {
            var nome = document.querySelector('.name input').value;
            document.querySelector('.p_sel_pro').innerText = nome.substr(0, 2).toUpperCase();

            if (nome.length >= 1) {
                document.querySelector('#name').setAttribute('style', 'border');
                document.querySelector('span._on').setAttribute('style', 'background');
                document.querySelector('span._on').classList.remove('_on');
                index += 1;

                if (index <= 3) {
                    const p_mod = document.querySelectorAll('.pass');
                    p_mod.forEach((i) => {
                        i.children[index].children[0].children[0].classList.add('_on');
                    });
                    const form_mod = document.querySelector('form.name');
                    form_mod.children[index - 1].classList.add('off');
                    form_mod.children[index].classList.remove('off');
                };

                if (index === 3) {
                    document.querySelector('#btn_name').removeAttribute('disabled');
                    document.querySelector('#btn_name').removeAttribute('style');
                    document.querySelector('#n_step').setAttribute('style', 'opacity: 0.5');
                    document.querySelector('#n_step').setAttribute('disabled', '');
                }

            } else {
                document.querySelector('#name').style.border = '1px solid #ff8d8d';
                document.querySelector('span._on').style.background = '#ff8d8d';
            }

        });

        document.querySelector('.date svg').addEventListener('click', () => {
            document.querySelector('.calendar').setAttribute('style', 'display: grid');
        });

        alertTime();
    })

    return (
        <form method='get' className='name'>
            <div className='wel' style={{ textAlign: 'center' }}>
                <h1>Seja Bem Vindo(a)!</h1>
                <span className='deg' style={{ color: `var(--txt)` }}>Dê os seguintes passos para configurar seu acesso:</span>

                <div className='pass' style={{ height: '75px' }}>
                    <div style={{ position: 'absolute', zIndex: -1, lineHeight: 0, height: '26px', width: '231px' }}>
                        <svg width='180' height='2' viewBox='0 0 180 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M0 1H220' stroke='#382F70' />
                        </svg>
                    </div>
                    <div className='deg_opt'>
                        <div className='view_pass' id='v_o'>
                            <span className='p_as _on'>1</span>
                        </div>
                        <span className='ref_name'>Perfil</span>
                    </div>
                    <div className='deg_opt'>
                        <div className='view_pass' id='v_w'>
                            <span className='p_as'>2</span>
                        </div>
                        <span className='ref_name'>Foto</span>
                    </div>
                    <div className='deg_opt'>
                        <div className='view_pass' id='v_t'>
                            <span className='p_as'>3</span>
                        </div>
                        <span className='ref_name'>Alertas</span>
                    </div>
                </div>
            </div>

            <div className='getName' style={{ width: '100%' }}>
                <label className='_label' style={{ marginBottom: '8px' }}>
                    <p id='l_name'>Coloque seu nome: </p>
                    <input type='text' name='name' id='name' placeholder='Nome' />
                </label>
                <label className='_label'>
                    <p id='l_name'>Sua designação: </p>
                    <select className='s_in t_note' style={{ width: '174px' }}>
                        <option value='Publicador'>Publicador</option>
                        <option value='Pioneiro Auxiliar'>Pioneiro Auxiliar</option>
                        <option value='Pioneiro Regular'>Pioneiro Regular</option>
                    </select>
                </label>
            </div>

            <div className='getImage off'>
                <div className='sel_user' htmlFor='img'>
                    <div style={{ textAlign: 'center' }}>
                        <div className='preview'>
                            <span style={{userSelect: 'none'}}>
                                <div className="preview_user" id="n_yl">
                                    <p className="p_sel_pro font_tit"></p>
                                </div>
                            </span>
                            <span className='upload'>Selecione uma Imagem para o perfil</span>
                        </div>
                    </div>

                    <div className='choose _label'>
                        <label className="sel_pro ava_on" style={{ background: 'var(--yl)' }} htmlFor="yl">
                            <input type="radio" name="choose_r" id="yl" value="yl" defaultChecked="true" />
                        </label>

                        <label className="sel_pro" style={{ background: 'var(--bl)' }} htmlFor="bl">
                            <input type="radio" name="choose_r" id="bl" value="bl" />
                        </label>

                        <label className="sel_pro" style={{ background: 'var(--gn)' }} htmlFor="gn">
                            <input type="radio" name="choose_r" id="gn" value="gn" />
                        </label>

                        <label className="sel_pro" style={{ background: 'var(--pk)' }} htmlFor="pk">
                            <input type="radio" name="choose_r" id="pk" value="pk" />
                        </label>
                    </div>

                </div>
            </div>

            <div className='getManager off' style={{ width: '280px', gap: '8px' }}>
                <div className='_label' id='rem'>
                    <p className='txt_man'>Avisar envio do relatório</p>
                    <div className='pref'>
                        <label className='switch' htmlFor='mod_pref'>
                            <input type='checkbox' name='mod_pref' id='mod_pref' defaultChecked />
                            <span className='def_slider'></span>
                        </label>
                    </div>
                </div>
                <div className='_label' id='data'>
                    <p className='txt_man'>Data para enviar relatório</p>
                    <div className='date' style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-calendar-event' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='var(--pri)' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                            <rect x='4' y='5' width='16' height='16' rx='2'></rect>
                            <line x1='16' y1='3' x2='16' y2='7'></line>
                            <line x1='8' y1='3' x2='8' y2='7'></line>
                            <line x1='4' y1='11' x2='20' y2='11'></line>
                            <rect x='8' y='15' width='2' height='2'></rect>
                        </svg>
                        <div className='calendar' style={{ display: 'none' }}>
                            <table>
                                <tbody>
                                    <tr className='t_col _o'>
                                        <td>
                                            <label htmlFor='1'>1</label>
                                            <input type='radio' name='1' id='1' />
                                        </td>
                                        <td>
                                            <label htmlFor='2'>2</label>
                                            <input type='radio' name='2' id='2' />
                                        </td>
                                        <td>
                                            <label htmlFor='3'>3</label>
                                            <input type='radio' name='3' id='3' />
                                        </td>
                                        <td>
                                            <label htmlFor='4'>4</label>
                                            <input type='radio' name='4' id='4' />
                                        </td>
                                        <td>
                                            <label htmlFor='5'>5</label>
                                            <input type='radio' name='5' id='5' />
                                        </td>
                                        <td>
                                            <label htmlFor='6'>6</label>
                                            <input type='radio' name='6' id='6' />
                                        </td>
                                        <td>
                                            <label htmlFor='7'>7</label>
                                            <input type='radio' name='7' id='7' />
                                        </td>
                                    </tr>
                                    <tr className='t_col _t'>
                                        <td>
                                            <label htmlFor='8'>8</label>
                                            <input type='radio' name='8' id='8' />
                                        </td>
                                        <td>
                                            <label htmlFor='9'>9</label>
                                            <input type='radio' name='9' id='9' />
                                        </td>
                                        <td>
                                            <label htmlFor='10'>10</label>
                                            <input type='radio' name='10' id='10' />
                                        </td>
                                        <td>
                                            <label htmlFor='11'>11</label>
                                            <input type='radio' name='11' id='11' />
                                        </td>
                                        <td>
                                            <label htmlFor='12'>12</label>
                                            <input type='radio' name='12' id='12' />
                                        </td>
                                        <td>
                                            <label htmlFor='13'>13</label>
                                            <input type='radio' name='13' id='13' />
                                        </td>
                                        <td>
                                            <label htmlFor='14'>14</label>
                                            <input type='radio' name='14' id='14' />
                                        </td>
                                    </tr>
                                    <tr className='t_col _th'>
                                        <td>
                                            <label htmlFor='15'>15</label>
                                            <input type='radio' name='15' id='15' />
                                        </td>
                                        <td>
                                            <label htmlFor='16'>16</label>
                                            <input type='radio' name='16' id='16' />
                                        </td>
                                        <td>
                                            <label htmlFor='17'>17</label>
                                            <input type='radio' name='17' id='17' />
                                        </td>
                                        <td>
                                            <label htmlFor='18'>18</label>
                                            <input type='radio' name='18' id='18' />
                                        </td>
                                        <td>
                                            <label htmlFor='19'>19</label>
                                            <input type='radio' name='19' id='19' />
                                        </td>
                                        <td>
                                            <label htmlFor='20'>20</label>
                                            <input type='radio' name='20' id='20' />
                                        </td>
                                        <td>
                                            <label htmlFor='21'>21</label>
                                            <input type='radio' name='21' id='21' />
                                        </td>
                                    </tr>
                                    <tr className='t_col _f'>
                                        <td>
                                            <label htmlFor='22'>22</label>
                                            <input type='radio' name='22' id='22' />
                                        </td>
                                        <td>
                                            <label htmlFor='23'>23</label>
                                            <input type='radio' name='23' id='23' />
                                        </td>
                                        <td>
                                            <label htmlFor='24'>24</label>
                                            <input type='radio' name='24' id='24' />
                                        </td>
                                        <td>
                                            <label htmlFor='25'>25</label>
                                            <input type='radio' name='25' id='25' />
                                        </td>
                                        <td>
                                            <label htmlFor='26'>26</label>
                                            <input type='radio' name='26' id='26' />
                                        </td>
                                        <td>
                                            <label htmlFor='27'>27</label>
                                            <input type='radio' name='27' id='27' />
                                        </td>
                                        <td>
                                            <label htmlFor='28'>28</label>
                                            <input type='radio' name='28' id='28' />
                                        </td>
                                    </tr>
                                    <tr className='t_col _fi'>
                                        <td>
                                            <label htmlFor='29'>29</label>
                                            <input type='radio' name='29' id='29' />
                                        </td>
                                        <td>
                                            <label htmlFor='30'>30</label>
                                            <input type='radio' name='30' id='30' />
                                        </td>
                                        <td className='td_on'>
                                            <label htmlFor='31'>31</label>
                                            <input type='radio' name='31' id='31' />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className='conf' style={{ marginTop: '8px', width: '100%' }}>
                <button type='button' className='_label' id='n_step'>
                    <p className='p_n_step'>Próximo</p>
                    <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-chevron-right'
                        width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none'
                        strokeLinecap='round' strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                        <polyline points='9 6 15 12 9 18'></polyline>
                    </svg>
                </button>
                <button type='submit' className='btn_name' id='btn_name' disabled style={{ opacity: 0.5 }}>Salvar</button>
            </div>
        </form>
    )
}

export default InitSection;