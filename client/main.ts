import { app, BrowserWindow } from "electron";
import { createWindow } from "./window";
import { fork } from "child_process";
import * as path from "path";

const apiProcess = fork('./main.js', {
    cwd: path.join(__dirname, 'api', 'src'),
});

apiProcess.on('message', (chunk: Buffer) => {
    const data = chunk.toString();

    if(data === 'ready') {
        app.whenReady().then(() => {
            createWindow();
        
            app.on('activate', () => {
                if (BrowserWindow.getAllWindows().length === 0) {
                    createWindow();
                }
            });
        });
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    };
});

process.on('exit', () => {
    apiProcess.send('SIGINT');
});