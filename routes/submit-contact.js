const express = require('express');
const { google } = require('googleapis');
const router = express.Router();
const sheets = google.sheets('v4');
const key = require('./credentials/credentials.json');

const spreadsheetId = '1Hv9QoNyFBc4dutiElFpmIDoJmCK0UXKj8YtDNHRevAA';

router.post('/submit-contact', async (req, res) => {
    try {
        console.log("Incoming request:", req.body);
        const { sheetId, firstName, lastName, email, phone, message } = req.body;

        if (!sheetId) {
            return res.status(400).json({ message: 'Sheet ID is required' });
        }

        // Google Auth setup
        const auth = new google.auth.GoogleAuth({
            credentials: key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });
        const authClient = await auth.getClient();

        // Current EST time
        const estTime = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        // Data row
        const values = [[
            estTime,
            firstName || '',
            lastName || '',
            email || '',
            phone || '',
            message || ''
        ]];

        // Append to next empty row in columns A–F
        const response = await sheets.spreadsheets.values.append({
            auth: authClient,
            spreadsheetId,
            range: `'${sheetId}'!A:F`,
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            requestBody: { values }
        });

        res.status(200).json({
            message: 'Data submitted successfully',
            response: response.data
        });
    } catch (error) {
        console.error('Error submitting form data:', error);
        res.status(500).json({ message: 'Failed to submit form', error: error.message });
    }
});

module.exports = router;
