const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // Add methods for file handling if needed
});
