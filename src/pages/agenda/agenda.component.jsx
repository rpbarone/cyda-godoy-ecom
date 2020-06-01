import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';

import './agenda.styles.scss';

const Agenda = () => (
   <div className='agenda block'>
        <h1 className='title hl'>AGENDA ESPAÇO CYDA GODOY</h1>
        
        <div className='calendary-filter'>
            <div className='month-calendary main-color-bg t'>
                <span>&#10094;</span>
                <span>Junho 2020</span>
                <span>&#10095;</span>
            </div>
            <div className='filter main-color-bg t'>
                <span><FilterIcon /></span>
                <span>Filtrar</span>
            </div>
        </div>
        
        <div className='infos'>
        <div className='events'>
            <div className='event-details'>
                <div className='day'>
                    <span className='t'>Seg</span>
                    <h3 className='h'>10</h3>
                </div>

                <div className='info-divider'></div>

                <div className='details'>
                    <div className='title h'>Atendimento Xamânico</div>
                    <div className='price sh'>R$44,00</div>
                    <div className='type t'>Presencial</div>
                </div>

                <div className='hour'>
                    <span className='t'>9:00</span>
                </div>

            </div>

            <div className='event-details'>
                <div className='day'>
                    <span className='t'>Seg</span>
                    <h3 className='h'>10</h3>
                </div>

                <div className='info-divider'></div>

                <div className='details'>
                    <div className='title h'>Atendimento Xamânico</div>
                    <div className='price sh'>R$44,00</div>
                    <div className='type t'>Presencial</div>
                </div>

                <div className='hour'>
                    <span className='t'>9:00</span>
                </div>

            </div>

            <div className='event-details'>
                <div className='day'>
                    <span className='t'>Seg</span>
                    <h3 className='h'>10</h3>
                </div>

                <div className='info-divider'></div>

                <div className='details'>
                    <div className='title h'>Atendimento Xamânico</div>
                    <div className='price sh'>R$44,00</div>
                    <div className='type t'>Presencial</div>
                </div>

                <div className='hour'>
                    <span className='t'>9:00</span>
                </div>

            </div>

            <div className='event-details'>
                <div className='day'>
                    <span className='t'>Seg</span>
                    <h3 className='h'>10</h3>
                </div>

                <div className='info-divider'></div>

                <div className='details'>
                    <div className='title h'>Atendimento Xamânico</div>
                    <div className='price sh'>R$44,00</div>
                    <div className='type t'>Presencial</div>
                </div>

                <div className='hour'>
                    <span className='t'>9:00</span>
                </div>

            </div>

            <div className='event-details'>
                <div className='day'>
                    <span className='t'>Seg</span>
                    <h3 className='h'>10</h3>
                </div>

                <div className='info-divider'></div>

                <div className='details'>
                    <div className='title h'>Atendimento Xamânico</div>
                    <div className='price sh'>R$44,00</div>
                    <div className='type t'>Presencial</div>
                </div>

                <div className='hour'>
                    <span className='t'>9:00</span>
                </div>

            </div>

            <div className='event-details'>
                <div className='day'>
                    <span className='t'>Seg</span>
                    <h3 className='h'>10</h3>
                </div>

                <div className='info-divider'></div>

                <div className='details'>
                    <div className='title h'>Atendimento Xamânico</div>
                    <div className='price sh'>R$44,00</div>
                    <div className='type t'>Presencial</div>
                </div>

                <div className='hour'>
                    <span className='t'>9:00</span>
                </div>

            </div>

            <div className='event-details'>
                <div className='day'>
                    <span className='t'>Seg</span>
                    <h3 className='h'>10</h3>
                </div>

                <div className='info-divider'></div>

                <div className='details'>
                    <div className='title h'>Atendimento Xamânico</div>
                    <div className='price sh'>R$44,00</div>
                    <div className='type t'>Presencial</div>
                </div>

                <div className='hour'>
                    <span className='t'>9:00</span>
                </div>

            </div>
            
            </div>
         

        <div className='card-event'>
            <div className='card-header'>
                <h3 className='card-title h'>Atendimento Xamânico</h3>
                <span className='card-description t'>Lorem ipsum amet sili dolor nosom. Lorem ipsum amet silir dolor
                nosom. Lorem ipsum amet silir dolor nosom.
                </span>
            </div>

            <div className='card-body'>
                <div className='card-date'>
                    <div className='icon-date'>icone</div>
                    <div className='date'>
                        <h4 className='sh'>11 de Junho de 2020</h4>
                        <span className='t'>Data</span>
                    </div>
                </div>

                <div className='card-time'>
                    <div className='icon-time'>icone</div>
                    <div className='time'>
                        <h4 className='sh'>9:00 - 9:45</h4>
                        <span className='t'>Hora</span>
                    </div>
                </div>

                <div className='card-duration'>
                    <div className='icon-duration'>icone</div>
                    <div className='duration'>
                        <h4 className='sh'>45 min</h4>
                        <span className='t'>Duração</span>
                    </div>
                </div>

                <div className='card-price'>
                    <div className='icon-price'>icone</div>
                    <div className='price'>
                        <h4 className='sh'>R$44,00</h4>
                        <span className='t'>Custo do atendimento</span>
                    </div>
                </div>

                <div className='card-divider'></div>

                <CustomButton>Comprar ingresso</CustomButton>
            </div>
        </div>
        </div>
  
        </div>
);

export default Agenda;