const {VITE_PAYPAL_CLIENT_ID,VITE_PAYPAL_CLIENT_SECRET} = import.meta.env;
export default async function getAuthToken() {
  return await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Basic ${btoa(`${VITE_PAYPAL_CLIENT_ID}:${VITE_PAYPAL_CLIENT_SECRET}`)}`
    },
    body: "grant_type=client_credentials"
  }).then(res => res.json()).then(data => data.access_token);
};
