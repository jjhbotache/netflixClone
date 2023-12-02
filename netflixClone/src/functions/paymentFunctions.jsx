const base = "https://api-m.sandbox.paypal.com";
const getTokenFromCookie = () => {
  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.startsWith("accessToken"));
  if (!cookie) return null;
  return cookie.split("=")[1];
};

export async function buyBot() {
  console.log("buyBot");
  const accessToken = await generateAccessToken();
  // save the token in a cookie
  document.cookie = `accessToken=${accessToken}`;
  const order = await createOrder(accessToken);
  // open a new window with the PayPal payment URL
  window.open(order.links.find((link) => link.rel === "approve").href);
}

const generateAccessToken = async () => {
  const PAYPAL_CLIENT_ID = import.meta.env.VITE_APP_PAYPAL_CLIENT_ID;
  const PAYPAL_CLIENT_SECRET = import.meta.env.VITE_APP_PAYPAL_CLIENT_SECRET;
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS");
    }

    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(
          `${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`
        )}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    const data = await response.json();
    console.log("data", data);
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

const createOrder = async () => {
  const data = await fetch(`${base}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenFromCookie(),
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "10",
          },
        },
      ],
      application_context: {
        brand_name: "Example Inc",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: "http://localhost:5173",
      },
    }),
  });
  const order = await data.json();
  console.log("order", order);
  return order;
};

export const captureOrder = async (token) => {
  const data = await fetch(`${base}/v2/checkout/orders/${token}/capture`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenFromCookie(),
    },
  });
  const order = await data.json();
  alert("Payment successful");
  console.log("order", order);
  // redirect to success page
  window.location.href = "/";
  return order;
};
