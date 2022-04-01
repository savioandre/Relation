import React from 'react';

const Cookies = () => {    
    return (
        <div className="cookies">
            <div className="head">
                <h1>Sua Privacidade 🍪</h1>
                <span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="9" fill="#F1F1F1" />
                        <path d="M5 5L13 13M5 13L13 5" stroke="#382F70" strokeWidth="2" />
                    </svg>
                </span>
            </div>
            <p className="info">
                Utilizamos ferramentas e serviços que utilizam cookies. Essas ferramentas nos ajudam a oferecer uma
                melhor
                experiência de navegação no site. Ao clicar no botão “Aceitar” ou continuar a visualizar nosso site,
                você
                concorda com o uso de cookies em nosso site.
            </p>
            <div className="conc" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="https://www.allaboutcookies.org/privacy-policy.htm" target='_blank' rel='noreferrer'
                    style={{ color: `var(--pri)` }}>Ler mais</a>
                <button type="button" className="btn_cookie" style={{ color: '#f1f1f1' }}>Aceitar</button>
            </div>
        </div>
    )
}

export default Cookies;