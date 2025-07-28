const { spawn } = require('child_process');

const server = spawn('node', ['server.js']);

server.stdout.on('data', (data) => {
    console.log(`[server]: ${data}`);
});

server.stderr.on('data', (data) => {
    console.error(`[server error]: ${data}`);
});

const serveo = spawn('ssh', ['-oStrictHostKeyChecking=no', '-R', '80:localhost:3000', 'serveo.net']);

serveo.stdout.on('data', (data) => {
    console.log(`[serveo]: ${data}`);
    const urlMatch = data.toString().match(/https?:\/\/[^\s]+/);
    if (urlMatch) {
        console.log(`Serveo URL: ${urlMatch[0]}`);
    }
});

serveo.stderr.on('data', (data) => {
    console.error(`[serveo error]: ${data}`);
});

serveo.on('close', (code) => {
    console.log(`Serveo process exited with code ${code}`);
});
