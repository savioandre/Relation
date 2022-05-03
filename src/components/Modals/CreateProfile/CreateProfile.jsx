import React, { useEffect } from 'react';
import FileSaver from 'file-saver';
import './CreateProfile.css';

const name = localStorage.getItem('name');
const designation = localStorage.getItem('select');

const CreateProfile = () => {
    useEffect(() => {
        document.querySelector('.profile_').addEventListener('click', () => {
            document.querySelector('#profile').classList.remove('off');
            document.querySelector('#profile').removeAttribute('style');
            document.querySelector('.mod_out').setAttribute('style', 'position: absolute;width: 100%;height: 100%');
            document.querySelector('.mods').setAttribute('style', 'align-items: center');
        });

        document.querySelector('#do_backup').addEventListener('click', () => {
            let exportBackup = JSON.stringify(localStorage);
            let blob = new Blob([exportBackup], { type: 'text/plain;charset=utf-8' });
            FileSaver.saveAs(blob, 'Backup-relation.relation');
        })

        document.querySelector('form.set_profile').addEventListener('submit', (e) => {
            e.preventDefault();
            const setName = document.querySelector('#set_profile input').value;
            const setDesignation = document.querySelector('#set_profile select').value;
            localStorage.setItem('name', setName);
            localStorage.setItem('select', setDesignation);
            document.querySelector('#profile ._head span.close').click();
        });

        document.querySelector('#set_profile input').addEventListener('keyup', (e) => {
            const newValue = document.querySelector('#set_profile input').value;
            if (newValue.length > 1 && newValue !== '') {
                document.querySelector('.pre p').innerHTML = newValue;
            } else {
                document.querySelector('.pre p').innerHTML = localStorage.getItem('name');
            }
        });

        document.getElementById('backup').addEventListener('change', function () {
            try {
                var file = new FileReader();
                file.onload = () => {
                    const backup = file.result;
                    let convertBackup = JSON.parse(backup);
                    for (const [key, value] of Object.entries(convertBackup)) {
                        localStorage.setItem(key, value);
                    };
                    document.location.reload();
                }
                file.readAsText(this.files[0]);
            } catch (error) {
                alert('Erro', error);
            }
        });

        document.getElementById('trash').addEventListener('click', () => {
            localStorage.clear();
            document.location.reload();
        })
    })
    return (
        <div className='mod off' id='profile' style={{ display: 'grid', justifyItems: 'center' }}>
            <div className='_head'>
                <p className='txt_bas'>Perfil</p>
                <span className='close'>
                    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='9' cy='9' r='9' fill='#F1F1F1' />
                        <path d='M5 5L13 13M5 13L13 5' stroke='#382F70' strokeWidth='2' />
                    </svg>

                </span>
            </div>
            <div className="_main">
                <div className="pre">
                    <h1 style={{ marginBottom: '8px' }}>Perfil</h1>
                    <div className="account img">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="#382F70" />
                            <path
                                d="M14.2781 17.0593C18.204 17.0593 21.5562 17.6817 21.5562 20.1723C21.5562 22.662 18.2256 23.307 14.2781 23.307C10.3522 23.307 7 22.6846 7 20.195C7 17.7044 10.3307 17.0593 14.2781 17.0593ZM14.2781 5C16.9511 5 19.0943 7.15367 19.0943 9.84318C19.0943 12.5317 16.9511 14.6874 14.2781 14.6874C11.6052 14.6874 9.4619 12.5317 9.4619 9.84318C9.4619 7.15367 11.6052 5 14.2781 5Z"
                                fill="#F1F1F1" />
                        </svg>
                    </div>
                    <div className="pre">
                        <p className='txt_title'>
                            {name}
                        </p>
                        <p className='txt_title'>
                            {designation}
                        </p>
                    </div>

                </div>
                <form method="get" id="set_profile" className="set_profile" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <div className='_label'></div>
                    <div style={{ width: '100%' }}>
                        <label htmlFor='name_pro' className='inp' id="set_name">
                            <p className='txt_title'>Mudar nome:</p>
                            <input className='txt_main s_in' id='name_pro' style={{ outline: 'none' }} defaultValue={name} />
                        </label>
                        <label htmlFor='design' className='inp'>
                            <p className='txt_title'>Designação</p>
                            <select id='design' className='s_in txt_main'>
                                <option>Publicador</option>
                                <option>Pioneiro Auxiliar</option>
                                <option>Pioneiro Regular</option>
                            </select>
                        </label>
                    </div>
                    <div className="btn_ger">
                        <label className="loc_backup" htmlFor="do_backup">
                            <input type="button" className="s_in txt_title" name="do_backup" id="do_backup" defaultValue="Fazer Backup" />
                            <small className="txt_sma">Clique para baixar o arquivo de backup!</small>
                        </label>
                        <label className="loc_backup" htmlFor="backup">
                            <p className="s_in txt_title">Restaurar Backup</p>
                            <small className="txt_sma">Clique ou arraste o arquivo de backup aqui!</small>
                            <input type="file" name="backup" id="backup" style={{ opacity: 0 }} accept=".json" />
                        </label>
                        <button type='button' className='s_in' id='trash'>
                            Apagar Dados
                        </button>
                    </div>
                    <div className="sub">
                        <button type='submit' id='ok' className='btn'>
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

export default CreateProfile;