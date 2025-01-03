import Leftbar from '../../component/leftSidebar/sidebar';
import Header from '../../component/header/header';
import Dolllor_img from '../../images/dollor.png';
import Order_img from '../../images/orders.png';
import Walk_ins from '../../images/walk-in.png';
import Online_orders from '../../images/online-order.png';
import Tablehead from '../../component/tableheader/tablehead';
import TableData from '../../component/tabledata/tabledata';

import './style.css';

function Dashboard() {
  return (
    <div className='dashboard-layout'>
        <Leftbar />
        <div className='dashboard-content'>
            <Header />
            <div className='revenue-container'>
                <div className='revenue-card'>
                    <div className='revenue-img'>
                        <img src={Dolllor_img} alt="price" />
                    </div>
                    <div className='revenue-info'>
                        <p>
                        $123456.00
                        </p>
                        <span>
                        Revenue
                        </span>
                    </div>
                </div>
                <div className='revenue-card'>
                    <div className='revenue-img'>
                        <img src={Order_img} alt="price" />
                    </div>
                    <div className='revenue-info'>
                        <p>
                        1309
                        </p>
                        <span>
                        Orders
                        </span>
                    </div>
                </div>
                <div className='revenue-card'>
                    <div className='revenue-img'>
                        <img src={Walk_ins} alt="price" />
                    </div>
                    <div className='revenue-info'>
                        <p>
                        840
                        </p>
                        <span>
                        Walk-ins
                        </span>
                    </div>
                </div>
                <div className='revenue-card'>
                    <div className='revenue-img'>
                        <img src={Online_orders} alt="price" />
                    </div>
                    <div className='revenue-info'>
                        <p>
                        199
                        </p>
                        <span>
                        Online Orders
                        </span>
                    </div>
                </div>
            </div>

            <div className='latest-order'>
                <a href="/latestoreder" className='latestoreder'>Latest Orders</a>
                <a href="/topselling" className='latestoreder'>Top Selling</a>
            </div>


            <div className='order-table'>
                <Tablehead />
                <TableData />
                <TableData />
                <TableData />   
                <TableData />
                <TableData />   

            </div>

        </div>
    </div>
  );
}

export default Dashboard;
