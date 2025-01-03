import Product_img from '../../images/product.png';
import './style.css';

function PendingOrder() {
  return (
   <div className='pending-order'>
        <div className='pending-order-header'>
            <div className='pending-order-details'>
                <div className='pending-order-image'>
                    <img src={Product_img} alt="product" />
                </div>
                <div className='pending-order-info'>
                    <p>
                        I Phone 15 Pro Max
                    </p>
                    <span>
                        256GB, Gray
                    </span>
                </div>
            </div>
            <div className='pending-order-text'>
                <p>
                    #ORD130
                </p>
            </div>  
            <div className='pending-order-text'>
                <p>
                $1,199.00
                </p>
            </div>  
            <div className='pending-order-text'>
                <p>
                12:30 PM, Thu, 23 May 2024
                </p>
            </div>  
        </div>
        <div className='pending-order-footer'>
            <div className='pending-order-quanity  pending-order-width'>
                <p>
                Number of items : <span> 2</span>
                </p>
            </div>
            <div className='pending-order-status pending-order-width'>
                <p>
                Pending
                </p>
            </div>
            <div className='pending-order-quanity  pending-order-width'>
                <p>
                Customer : <span> Johan</span>
                </p>
            </div>
            <div className='pending-order-action pending-order-width'>
                <button>
                    Cancel
                </button>
            </div>
        </div>
   </div>
  );
}

export default PendingOrder;
