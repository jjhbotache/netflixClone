import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import googleConfig from '../../../oauthGoogle.json';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  // get the client_id
  const {client_id} = googleConfig.web
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
      </GoogleOAuthProvider>
    </div>
  )
};
