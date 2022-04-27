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
            document.querySelector('html').style.overflow = 'hidden';
        });

        const close = document.querySelectorAll('._head span.close');
        close.forEach((close) => {
            close.setAttribute('aria-label', 'Fechar');
            close.addEventListener('click', () => {
                close.closest('.mods').style.display = "none";
                close.closest('.mod').setAttribute('style', 'display: none');
                document.querySelector('html').style.overflow = 'auto';
            });
        })

        document.querySelectorAll('.cookies button, .cookies .head span').forEach((i) => {
            i.addEventListener('click', () => {
                document.querySelector('.cookies').style.display = "none";
            });
        });

        document.querySelector('._main form').addEventListener('click', (e) => {
            e.preventDefault();
        });

        document.querySelector('.mod_out').addEventListener('click', () => {
            document.querySelector('._head span.close').click();
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