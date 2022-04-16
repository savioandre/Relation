import React, { useEffect } from 'react';
import CreateActivity from '../CreateActivity/CreateActivity.jsx';
import InitSection from '../InitSection/InitSection.jsx';
import Cookies from '../Cookies/Cookies';
// import createFile from '../../../scripts/createFile';
import RegisterNew from '../../Students/RegisterNew/Register.jsx';
import CreateProfile from '../CreateProfile/CreateProfile.jsx';

const ModalMain = () => {
    useEffect(() => {
        document.querySelector('.btn._act').addEventListener('click', () => {
            document.querySelector('.mod.activity').removeAttribute('style');
            document.querySelector('.mod_out').setAttribute('style', 'position: absolute;width: 100%;height: 100%');
            document.querySelector('.mods').setAttribute('style', 'align-items: center');
        });

        const close = document.querySelectorAll('._head span.close');
        close.forEach((close) => {
            close.setAttribute('aria-label', 'Fechar');
            close.addEventListener('click', () => {
                close.closest('.mods').style.display = "none";
                close.closest('.mod').setAttribute('style', 'display: none');
            });
        })

        document.querySelectorAll('.cookies button, .cookies .head span').forEach((i) => {
            i.addEventListener('click', () => {
                document.querySelector('.cookies').style.display = "none";
            });
        });

        let input = document.querySelectorAll('label.inp .it.on input');

        document.querySelectorAll('.it').forEach((it) => {
            it.addEventListener('click', () => {
                it.classList.add('on');
                it.children[1].style.opacity = 1;

                document.querySelectorAll('label').forEach((label) => {
                    label.addEventListener('keyup', (e) => {
                        const val = input.forEach((i) => {
                            let value_End = i.value;
                            const index = label.children[1].children[0];
                            if (value_End.length <= 0) {
                                index.innerHTML = '00';
                            } else if (value_End.length === 1) {
                                index.innerHTML = '0' + value_End;
                            } else {
                                index.innerHTML = value_End;
                            }
                        });
                    });
                });

                document.querySelector('label#hour').addEventListener('keyup', (e) => {
                    const val = document.querySelector('#hours').value;
                    const format = val.slice(0, 2) + ":" + val.slice(2, 10);
                    const format0 = "0" + val.slice(0, 1) + ":" + val.slice(1, 10);
                    if (val.length === 3) {
                        document.querySelector('p.s_in').innerHTML = format0;
                    } else document.querySelector('p.s_in').innerHTML = format;
                });                
            })
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    input.forEach((a) => { a.style.opacity = 0 });
                };
            });
        });

        const btn = document.querySelectorAll('form')
        btn.forEach((btn) => {
            btn.addEventListener('submit', (event) => {
                event.preventDefault();
            });
        });

        document.querySelector('.mod_out').addEventListener('click', () => {
            document.querySelector('.mods').style.display = 'none';
        });

        // createFile();
    })
    return (
        <div className="mods" style={{ position: 'absolute', width: '100%', height: '100%', background: `var(--mod)`, zIndex: 9 }}>
            <div className="mod_out" style={{ display: 'none', width: '100%', height: '100%' }}></div>
            <Cookies />
            <InitSection />
            <CreateActivity />
            <RegisterNew />
            <CreateProfile />
        </div>
    )
}

export default ModalMain;