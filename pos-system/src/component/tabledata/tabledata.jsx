import product_img from '../../images/product.png';
import './style.css';

function TableData() {
  return (
    <div className='table-data'>

<table>
     
        <tr>
          <td>#ORD130 </td>

          <td>
            <div className='product-info'>  
                <div className='product-img'>
                    <img src={product_img} alt="product" />
                </div>
                <div className='product-name'>
                    <p>I Phone 15 Pro Max</p>
                    <span>256GB, Gray</span>
                </div>
                </div>
          </td>


            <td>$1,199.00 </td>
          <td>Thu, 23 May 2024 </td>

        </tr>
      
  
    </table>

    </div>
  );
}

export default TableData;
