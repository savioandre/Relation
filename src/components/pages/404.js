import React from 'react';
import './notFound.css';

const NotFound = () => {
    return (
        <div className="lay_er">
            <div className="er_not">
                <span className="h_er">4</span>
                <span style={{ lineHeight: 0 }}>
                    <svg width="60" height="60" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0C17.083 0 22 4.928 22 11C22 17.083 17.083 22 11 22C4.928 22 0 17.083 0 11C0 4.928 4.928 0 11 0ZM10.615 5.423C10.164 5.423 9.79 5.786 9.79 6.248V11.803C9.79 12.089 9.944 12.353 10.197 12.507L14.509 15.081C14.641 15.158 14.784 15.202 14.938 15.202C15.213 15.202 15.488 15.059 15.642 14.795C15.873 14.41 15.752 13.904 15.356 13.662L11.44 11.33V6.248C11.44 5.786 11.066 5.423 10.615 5.423Z"
                            fill="#382F70"></path>
                    </svg>
                </span>
                <span className="h_er">4</span>
            </div>
            <div>
                <p className="txt_main">Esta página não existe 😕</p>
            </div>
            <div>
                <a href="../" className="link">Voltar à página inicial</a>
            </div>
        </div>
    )
}

export default NotFound;