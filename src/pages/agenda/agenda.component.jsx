import React from 'react';

import './agenda.styles.scss';

const Agenda = () => (
   <div className='agenda block'>
        <h1 className='title h'>AGENDA DO ESPAÇO CYDA GODOY</h1>

        <table>
            <thead>
                <tr className='sh main-color-bg'>
                    <th>Datas Atendimento Xamânico</th>
                    <th>Datas Atendimento Exu Marabô</th>
                    <th>Cursos</th>
                    <th>Eventos</th>
                </tr>
                <tr>
                    <th colSpan='4' class='month sub-color-bg sh'>JUNHO</th>
                </tr>
            </thead>

            <tbody>
                <tr className='t'>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                </tr>

                <tr className='t'>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                </tr>

                <tr className='t'>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                </tr>

                <tr className='t'>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                </tr>

                <tr className='t'>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                    <td>ipsum ipsum</td>
                </tr>
            </tbody>
        </table>
   </div>
);

export default Agenda;