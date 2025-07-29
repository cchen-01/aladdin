const { google } = require("googleapis");
const { GoogleAuth } = require("google-auth-library");

const spreadsheetId = "1Hv9QoNyFBc4dutiElFpmIDoJmCK0UXKj8YtDNHRevAA";

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { sheetId, firstName, lastName, email, phone, message } = body;

    if (!sheetId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Sheet ID is required" }),
      };
    }

    const credentials = {
      type: process.env.GOOGLE_TYPE,
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: process.env.GOOGLE_AUTH_URI,
      token_uri: process.env.GOOGLE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
    };

    const auth = new GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    const estTime = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const values = [
      [
        estTime,
        firstName || "",
        lastName || "",
        email || "",
        phone || "",
        message || "",
      ],
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `'${sheetId}'!A:F`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Data submitted successfully",
        response: response.data,
      }),
    };
  } catch (error) {
    console.error("Error submitting form data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to submit form",
        error: error.message,
      }),
    };
  }
};
