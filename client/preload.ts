import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('apiService', {
    get: async () => await ipcRenderer.invoke('getHelloFromAPI'),
    getPublishers: async () => await ipcRenderer.invoke('getPubs'),
});