const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


let mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  console.log(__dirname);
  mainWindow = new BrowserWindow({width: 1280, height: 720, icon: __dirname + '/assets/logos/app.icns'});

  mainWindow.loadURL(`file://${__dirname}/assets/public_html/index.html`);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

