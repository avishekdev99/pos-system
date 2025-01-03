import user_img from '../../images/user.png';

import './header.css';

function Header() {
  return (
    <div className='site-header'>
        <div className='user-wrapper'>
            <div className='logo-wrapper'>
                <img src={user_img} alt='user logo' />
            </div>
            <div className='user-info'>
                <div className='user-name'>Welcome, Gorry</div>
                <div className='current-time'>Thursday, Jun 6, 2024</div>
            </div>
        </div>
        <div className='order-btn'>
            <a href="/neworder">New Order</a>
        </div>
    </div>  
  );
}

export default Header;
