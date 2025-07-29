const { google } = require("googleapis");
const key = require("./credentials.json"); // same folder

const sheets = google.sheets("v4");
const spreadsheetId = "1Hv9QoNyFBc4dutiElFpmIDoJmCK0UXKj8YtDNHRevAA"; // your sheet

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const { sheetId, firstName, lastName, email, phone, message } = data;

    if (!sheetId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Sheet ID is required" }),
      };
    }

    const auth = new google.auth.GoogleAuth({
      credentials: key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const authClient = await auth.getClient();

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
      [estTime, firstName || "", lastName || "", email || "", phone || "", message || ""],
    ];

    const response = await sheets.spreadsheets.values.append({
      auth: authClient,
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
    console.error("Google Sheets error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to submit form", error: error.message }),
    };
  }
};
