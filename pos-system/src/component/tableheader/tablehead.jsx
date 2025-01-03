import dataArrow from '../../images/up-down-arrow.png';

import './style.css';

function Tablehead() {
  return (
    <div className='table-header'>

<table>
      <thead>
        <tr>
          <th>ID <img src={dataArrow} alt="arrow" /></th>
          <th>Product Name <img src={dataArrow} alt="arrow" /></th>
          <th>Price <img src={dataArrow} alt="arrow" /></th>
          <th>Time <img src={dataArrow} alt="arrow" /></th>

        </tr>
      </thead>
  
    </table>

    </div>
  );
}

export default Tablehead;
