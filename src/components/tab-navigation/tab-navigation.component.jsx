import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './tab-navigation.styles.scss';

const TabNavigation = ({ history }) => {

  return(
  <div className='tab-navigation'>
    <div className='tab-header'>
      <Link 
      className='sh sub-color-bg und-effect'>
      CARACTERÍSTICAS
      </Link>
      {history.location.hash === '' ?
      <div className='t tab-content'>
        <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
      </div> : null
      }
      <Link className='sh sub-color-bg und-effect' to='#prazos'>
      PRAZO DE ENTREGA
      </Link>
      {history.location.hash === '#prazos' ?
      <div className='t tab-content'>
        <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
      </div> : null
      }
      <Link className='sh sub-color-bg und-effect' to='#formas-de-pagamento'>
      FORMAS DE PAGAMENTO
      </Link>
      {history.location.hash === '#formas-de-pagamento' ?
      <div className='t tab-content'>
        <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
      </div> : null
      }
    </div>
  </div>
)};

export default withRouter(TabNavigation);