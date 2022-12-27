import { BrowserWindow } from "electron";
import * as path from "path";

export function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.loadFile('./ui/index.html');
};