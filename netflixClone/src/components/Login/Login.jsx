import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import googleConfig from '../../../oauthGoogle.json';
import { jwtDecode } from 'jwt-decode';

import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";




export default function Login() {
  // get the client_id
  const {client_id} = googleConfig.web

  function responseFacebook(response) { console.log(response);}
  
  return(
    <div>
      <h1>Login</h1>
      <br />
      <GoogleOAuthProvider clientId={client_id}>

      <GoogleLogin
        onSuccess={credentialResponse => {
          const info = jwtDecode(credentialResponse.credential);
          console.log(credentialResponse.credential);
          console.log(info);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      <button className="btn btn-warning" onClick={googleLogout}> logout </button>

      <hr />
        
      </GoogleOAuthProvider>
      <hr />
      {/* using react-facebook-login */}
      {/* <FacebookLogin
      appId="871835057742399"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      /> */}
      {/* using react social login */}
      <div className="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button><strong>doesn't work</strong> this doesn't work idwhy</div>
      <LoginSocialFacebook
        appId="871835057742399"
        onResolve={r=>console.log(r)}
        >
          
        

        
      <FacebookLoginButton />
      </LoginSocialFacebook>

    </div>
  )
};
