import Leftbar from '../../component/leftSidebar/sidebar';
import Header from '../../component/header/header';
import PendingOrder from '../../component/pendingorder/pending';


import './style.css';

function Orderview() {
  return (
    <div className='dashboard-layout'>
        <Leftbar />
        <div className='dashboard-content'>
            <Header />
            <div className='latest-order'>
                <a href="/latestoreder" className='latestoreder active'>Pending</a>
                <a href="/topselling" className='latestoreder'>Completed</a>
            </div>
            <div className='pending-order-wrapper'>
              <PendingOrder/>
              <PendingOrder/>

              <PendingOrder/>

              <PendingOrder/>

            </div>
            
        </div>
    </div>
  );
}

export default Orderview;
