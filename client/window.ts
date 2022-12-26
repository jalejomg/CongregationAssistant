import { ipcMain, BrowserWindow } from "electron";
import axios from "axios";
import * as path from "path";

export function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
    });

    /* ipcMain.handle('getHelloFromAPI', async () => {
        const { data } = await axios.get('http://localhost:3000/');
        console.log(data);
        return data;
    });

    ipcMain.handle('getPubs', async () => {
        const { data } = await axios.get('http://localhost:3000/publishers');
        console.log(data);
        return data;
    }); */

    win.loadFile('./ui/index.html');
};