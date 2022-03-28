import React, { useEffect } from 'react';
import './ManageSettings.css';

const ManageSettingsHeader = () => {
    useEffect(() => {
        document.querySelector('._more').addEventListener('click', () => {
            document.querySelector('html').style.fontSize = '63.5%';
        });

        document.querySelector('._short').addEventListener('click', () => {
            document.querySelector('html').style.fontSize = '61.5%';
        })
    });

    return (
        <div className="man_head" style={{ display: 'none'}}>
            <ul className="list_man">
                <li className="el_man">
                    <p className="p_el">Modo Escuro</p>
                    <div className="manager">
                        <div className="theme-toggle">
                            {/* <span className="icon icon-sun-fill">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="0" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                                </svg>
                            </span> */}
                            <label className="switch" id="switch" htmlFor="dark_mode">
                                <input type="checkbox" name="dark_mode" id="dark_mode" />
                                <span className="slider"></span>
                            </label>
                            {/* <span className="icon icon-moon-fill ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brightness-up"
                                    width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <line x1="12" y1="5" x2="12" y2="3"></line>
                                    <line x1="17" y1="7" x2="18.4" y2="5.6"></line>
                                    <line x1="19" y1="12" x2="21" y2="12"></line>
                                    <line x1="17" y1="17" x2="18.4" y2="18.4"></line>
                                    <line x1="12" y1="19" x2="12" y2="21"></line>
                                    <line x1="7" y1="17" x2="5.6" y2="18.4"></line>
                                    <line x1="6" y1="12" x2="4" y2="12"></line>
                                    <line x1="7" y1="7" x2="5.6" y2="5.6"></line>
                                </svg>
                            </span> */}
                        </div>
                    </div>
                </li>
                <li className="el_man">
                    <p className="p_el">Tamanho da Fonte</p>
                    <div className="tam_" style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                        <span className="_more txt_bas">+</span>
                        <span className="_short txt_bas">-</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ManageSettingsHeader;