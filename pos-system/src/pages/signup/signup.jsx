import logo from '../../images/logo.png';
import Google_logo from '../../images/google-logo.png';
import facebook_logo from '../../images/facebook-logo.png';
import '../login/login.css';

function Signup() {
  return (
    <div className="Login-main">
        <div className="Login-container">
            <div className="Login-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="Login-form">
                <form >
                <div className="Login-form-group">
                        <input type="text" id="login-name" placeholder='Full Name'/>
                    </div>
                    <div className="Login-form-group">
                        <input type="email" id="login-email" placeholder='Email'/>
                    </div>
                    <div className="Login-form-group">
                        <input type="password" id="login-password" placeholder='Password'/>
                    </div>
                    <div className="Login-form-group">
                        <input type="password" id="login-conform-password" placeholder='Conform Password'/>
                    </div>
                    <div className="Login-form-group">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
            <div className="Login-footer">
                <p>Already have an account  <a href="/login">Log In</a></p>
                <div className="login-divider">
                    <p>
                        OR
                    </p>
                </div>
                <div className="Login-google">
                    <div className="Login-google-logo">
                        <a href="#">
                            <img src={Google_logo} alt="google-logo" />
                            Sign up with Google
                        </a>
                    </div>
                    <div className="Login-google-logo">
                        <a href="#">
                            <img src={facebook_logo} alt="google-logo" />
                            Sign up with Facebook
                        </a>
                    </div>
                    <div className="login-term">
                        <p>
                            By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Signup;
