import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { getParametersFromURL } from "../../functions/tokenFromUrl";


export default function LoginWithCognito() {
  const { id_token } = getParametersFromURL(window.location.href);
  const decodedToken = jwtDecode(id_token);
  const cognitoUrlHostedUI = "https://netflixclone.auth.us-east-2.amazoncognito.com/oauth2/authorize?client_id=1ctmh3oskg945pgpj3ledg2f09&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F"

  useEffect(() => {
    const userPoolId = 'us-east-2_WnGu7Vb3h';
    const region = 'us-east-2';
    console.log(decodedToken);



  }, []);
  return (
    <div>
      <h1>LoginWithCognito</h1>
      <a className="btn btn-primary mt-2" href={cognitoUrlHostedUI} role="button" >login</a>
      <p>{decodedToken.email}</p>
    </div>
  );
};
