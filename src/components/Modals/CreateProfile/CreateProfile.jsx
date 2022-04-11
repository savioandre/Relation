import React, { useEffect } from 'react';
import './CreateProfile.css';

const CreateProfile = () => {
    return (
        <div className='off' id='profile' style={{ display: 'grid', justifyItems: 'center' }}>
            <h1 style={{ marginBottom: '8px' }}>Perfil</h1>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div className='prof_img' style={{ width: '50px', borderRadius: '50%', height: '50px' }}></div>
                <div>
                    <div className='txt_title' contentEditable='true' style={{ outline: 'none' }}>Sávio André</div>
                    <p className='txt_man'>Publicador</p>
                </div>
            </div>
        </div>
    )
};

export default CreateProfile;