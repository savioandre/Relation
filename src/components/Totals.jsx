import React from 'react';
import total from '../data/totalData.ts';
import exporTotal from '../data/data.ts';

export const Totals = () => {
    return (
        <div id='totals' style={{ display: 'none' }}>
            <h1>Totais</h1>
            <div>
                <div className="view" id='total'>
                    <div className="t_tl">
                        <h1 className="txt_title" style={{ background: '#6cce7a' }}>Total de&nbsp;
                            {total.month()}
                        </h1>
                        <div className="del_i d_in" id="see_more">
                            <p className='p_el'>Ver mais</p>
                        </div>
                    </div>
                    <div className="total_activity">
                        <p className="act">
                            <span>{exporTotal.totalSum.hor()}&nbsp;</span>
                            Horas
                        </p>
                        <p className="act">
                            <span>{exporTotal.totalSum.pub()}&nbsp;</span>
                            Publicações
                        </p>
                        <p className="act">
                            <span>{exporTotal.totalSum.rev()}&nbsp;</span>
                            Revisitas
                        </p>
                        <p className="act">
                            <span>{exporTotal.totalSum.vid()}&nbsp;</span>
                            Vídeos
                        </p>
                        <p className="act">
                            <span>{exporTotal.totalSum.est()}&nbsp;</span>
                            Estudos
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}