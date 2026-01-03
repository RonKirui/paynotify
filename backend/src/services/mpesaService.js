import axios from "axios";

const baseURL =
  process.env.MPESA_ENV === "sandbox"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";

export const getAccessToken = async () => {
  const auth = Buffer.from(
    `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
  ).toString("base64");

  const response = await axios.get(
    `${baseURL}/oauth/v1/generate?grant_type=client_credentials`,
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  return response.data.access_token;
};
