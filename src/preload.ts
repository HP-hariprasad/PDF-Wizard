import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  // Add methods for file handling if needed
});
