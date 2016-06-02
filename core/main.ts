//TODO: find another way to imoprt typings

/// <reference path="../typings/globals/github-electron/index.d.ts"/>
/// <reference path="../typings/globals/node/index.d.ts" />
import {app, ipcMain, BrowserWindow} from 'electron';

let browserWindow: Electron.BrowserWindow = undefined;
//
// if (app.dock) {
//     app.dock.setIcon(nativeImage.createFromPath("build/icon.png"));
// }

app.on("open-file", (event: Event, file: string) => getMainWindow().webContents.send("change-working-directory", file));
app.on("ready", getMainWindow);
app.on("activate", getMainWindow);
app.on("mainWindow-all-closed", () => process.platform === "darwin" || app.quit());

ipcMain.on("quit", app.quit);

function getMainWindow(): Electron.BrowserWindow {


    if (!browserWindow) {
        let options: Electron.BrowserWindowOptions = {
            webPreferences: {
                experimentalFeatures: true,
                experimentalCanvasFeatures: true,
            },
            titleBarStyle: "hidden",
            resizable: true,
            minWidth: 500,
            minHeight: 1000,
            show: false,
        };
        browserWindow = new BrowserWindow(options);

        browserWindow.loadURL(`file://${__dirname}/assets/templates/index.html`);
        browserWindow.webContents.openDevTools();

        browserWindow.on("closed", (): void => browserWindow = undefined)
                     .on("focus", (): void => app.dock && app.dock.setBadge(""));

        browserWindow.webContents.on("did-finish-load", () => {
            browserWindow.show();
            browserWindow.focus();
        });
    }
    return browserWindow;
}
