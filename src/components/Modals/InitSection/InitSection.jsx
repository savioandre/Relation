import React, { useEffect } from 'react';

const InitSection = () => {

    useEffect(() => {
        var index = 1;
        document.querySelector('#n_step').addEventListener('click', (i) => {
            const nome = document.querySelector('.name input').value;

            if (nome.length >= 1) {
                document.querySelector('#name').setAttribute('style', 'border');
                document.querySelector('span._on').setAttribute('style', 'background');
                document.querySelector('span._on').classList.remove('_on');
                document.querySelector('.getName').classList.add('off');
                document.querySelector('.getImage').classList.remove('off');
                index += 1;

                if (index <= 3) {
                    const p_mod = document.querySelectorAll('.pass');
                    p_mod.forEach((i) => {
                        i.children[index].children[0].classList.add('_on');
                    });
                };

                if (index === 3) {
                    document.querySelector('#btn_name').removeAttribute('disabled');
                    document.querySelector('#btn_name').removeAttribute('style');
                    document.querySelector('#n_step').setAttribute('style', 'opacity: 0.5');
                    document.querySelector('#n_step').setAttribute('disabled', '');
                }
                
            } else {
                document.querySelector('#name').style.border = "1px solid #ff8d8d";
                document.querySelector('span._on').style.background = "#ff8d8d";
            }

        })
    })

    return (
        <div className="name">
            <div className="wel" style={{ textAlign: 'center' }}>
                <h1>Seja Bem Vindo(a)!</h1>
                <span className="deg" style={{ color: `var(--txt)` }}>Dê os seguintes passos para configurar seu acesso:</span>

                <div className="pass" style={{ height: '75px' }}>
                    <div style={{ position: 'absolute', zIndex: -1, lineHeight: 0 }}>
                        <svg width="220" height="2" viewBox="0 0 220 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H220" stroke="#382F70" />
                        </svg>
                    </div>

                    <div className="view_pass">
                        <span className="p_as _on">1</span>
                        <span className="ref_name">Nome</span>
                    </div>
                    <div className="view_pass">
                        <span className="p_as">2</span>
                        <span className="ref_name">Foto</span>
                    </div>
                    <div className="view_pass">
                        <span className="p_as">3</span>
                        <span className="ref_name">Preferências</span>
                    </div>
                </div>
            </div>

            <div className="getName" style={{ width: '100%' }}>
                <label className="_label" style={{ marginBottom: '8px' }}>
                    <p id="l_name">Coloque seu nome: </p>
                    <input type="text" name="name" id="name" placeholder="Nome" />
                </label>
                <label className="_label">
                    <p id="l_name">Sua designação: </p>
                    <select className="s_in t_note" style={{ width: '174px' }}>
                        <option value="Publicador">Publicador</option>
                        <option value="Pioneiro Auxiliar">Pioneiro Auxiliar</option>
                        <option value="Pioneiro Regular">Pioneiro Regular</option>
                    </select>
                </label>
            </div>

            <div className="getImage off">
                <label className="_label" htmlFor="img">
                    <div style={{ textAlign: 'center' }}>
                        <div className="_label">
                            <span style={{ marginRight: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera-plus"
                                    width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#7a7a7a"
                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="12" cy="13" r="3"></circle>
                                    <path
                                        d="M5 7h2a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h2m9 7v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2">
                                    </path>
                                    <line x1="15" y1="6" x2="21" y2="6"></line>
                                    <line x1="18" y1="3" x2="18" y2="9"></line>
                                </svg>
                            </span>
                            <span className="upload">Selecione uma Imagem para o perfil</span>
                        </div>
                        <div>
                            <p>Clique ou arraste uma imagem aqui.</p>
                        </div>
                    </div>
                    <div className="preview">
                        <p></p>
                    </div>

                    <input type="file" accept=".jpg, .jpeg, .png" id="img" alt="Imagem de Perfil"
                        style={{ opacity: 0, position: 'absolute' }} multiple />
                </label>
            </div>

            <div className="getManager off" style={{ width: '280px', gap: '8px' }}>
                <div className="_label" id="rem">
                    <p className="txt_man">Avisar envio do relatório</p>
                    <div className="pref">
                        <label className="switch" htmlFor="mod_pref">
                            <input type="checkbox" name="mod_pref" id="mod_pref" />
                            <span className="def_slider"></span>
                        </label>
                    </div>
                </div>
                <div className="_label" id="data">
                    <p className="txt_man">Data para enviar relatório</p>
                    <input type="date" name="data-time" id="data-time" />
                </div>
            </div>

            <div className="conf" style={{ marginTop: '8px', width: '100%' }}>
                <button className="_label" id='n_step'>
                    <p className="p_n_step">Próximo</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right"
                        width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="9 6 15 12 9 18"></polyline>
                    </svg>
                </button>
                <button type="button" className="btn_name" id='btn_name' disabled style={{ opacity: 0.5 }}>Salvar</button>
            </div>
        </div>
    )
}

export default InitSection;