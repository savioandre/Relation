import React, { useEffect } from 'react';
import CreateActivity from '../CreateActivity/CreateActivity.jsx';
import InitSection from '../InitSection/InitSection.jsx';
import Cookies from '../Cookies/Cookies';
import createFile from '../../../scripts/createFile';

const ChannelMain = () => {
    useEffect(() => {
        document.querySelector('.btn._act').addEventListener('click', () => {
            document.querySelector('.mod.activity').removeAttribute('style');
            document.querySelector('.mod_out').setAttribute('style', 'position: absolute;width: 100%;height: 100%');
            document.querySelector('.mods').setAttribute('style', 'align-items: center');
        })        

        const close = document.querySelector('._head span.close')
        close.addEventListener('click', () => {
            close.closest('.mods').style.display = "none";
        })

        document.querySelectorAll('.cookies button, .cookies .head span').forEach((i) => {
            i.onclick = function cookie() {
                document.querySelector('.cookies').style.display = "none";
            }
        })

        document.querySelectorAll('.it').forEach((i) => {
            i.addEventListener('click', () => {
                i.classList.add('on')
                const input = document.querySelectorAll('.inp .it.on input')
                input.forEach((a) => {
                    a.style.opacity = 1;
                });

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
                    const val = document.querySelector('#hour input').value;
                    const format = val.slice(0, 2) + ":" + val.slice(2, 10);
                    const format0 = "0" + val.slice(0, 1) + ":" + val.slice(1, 10);
                    if (val.length === 3) {
                        document.querySelector('p.s_in').innerHTML = format0;
                    } else document.querySelector('p.s_in').innerHTML = format;
                });

                document.addEventListener('keyup', (e) => {
                    const k = e.key
                    if (k === 'Enter') {
                        e.preventDefault();
                        input.forEach((a) => { a.style.opacity = 0 })
                    }
                })

                // document.body.addEventListener('click', () => {
                // document.querySelectorAll('input.s_in').forEach((i) => {
                //     if (i.style.opacity = 1) {
                //         console.log('aqui 1')
                //         i.style.opacity = 0;
                //     } else {
                //         console.log('aqui 2')
                //         i.style.opacity = 1;
                //     }
                // })
                // })

                i.classList.remove('on')
            })
        })

        document.querySelector('.btn').addEventListener('click', (event) => {
            event.preventDefault();
            // console.log(document.querySelector('form').values);
        })

        document.querySelector('.mod_out').addEventListener('click', () => {
            document.querySelector('.mods').style.display = 'none';
        })

        createFile();
    })
    return (
        <div className="mods" style={{ position: 'absolute', width: '100%', height: '100%', background: `var(--mod)`, zIndex: 9}}>
            <div className="mod_out" style={{ display: 'none', width: '100%', height: '100%'  }}></div>
            <Cookies />
            <InitSection />
            <CreateActivity />
        </div>
    )
}

export default ChannelMain;