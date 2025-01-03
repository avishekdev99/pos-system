import logo from '../../images/logo.png';
import dashboard_icon from '../../images/dashboard-icon.png';
import Orderview_icon from '../../images/order-view.png';
import ManageItem_icon from '../../images/manage-items.png';
import Settings_icon from '../../images/setting.png';
import Notifications_icon from '../../images/notifications.png';
import Logout_icon from '../../images/logout.png';
import './style.css';

function Sidebar() {
  return (
    <div className='left-sidebar'>
        <div className='sidebarlogo'>
            <img src={logo} alt='logo' />
        </div>
        <div className='sidebar-nav'>
            <ul>
                <li>
                    <a href="/dashboard" className='active'> <img src={dashboard_icon} alt="dashboard" /> Dashboard</a>
                </li>
                <li>
                    <a href="/orderview"> <img src={Orderview_icon} alt="order" /> Order View</a>
                </li>
                <li>
                    <a href="/manageitem"> <img src={ManageItem_icon} alt="manage" /> Manage Items</a>
                </li>
                <li>
                    <a href="/settings"><img src={Settings_icon} alt="setting" /> Settings</a>
                </li>
                <li>
                    <a href="/notifications"> <img src={Notifications_icon} alt="notification" /> Notifications</a>
                </li>
                <li>
                    <a href="/logout"> <img src={Logout_icon} alt="logout" /> Logout</a>
                </li>
            </ul>
        </div>
    </div>    
  );
}

export default Sidebar;
