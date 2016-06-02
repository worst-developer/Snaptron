"use strict";
/// <reference path="../typings/globals/github-electron/index.d.ts"/>
/// <reference path="../typings/globals/node/index.d.ts" />
var electron_1 = require('electron');
var browserWindow = undefined;
//
// if (app.dock) {
//     app.dock.setIcon(nativeImage.createFromPath("build/icon.png"));
// }
electron_1.app.on("open-file", function (event, file) { return getMainWindow().webContents.send("change-working-directory", file); });
electron_1.app.on("ready", getMainWindow);
electron_1.app.on("activate", getMainWindow);
electron_1.app.on("mainWindow-all-closed", function () { return process.platform === "darwin" || electron_1.app.quit(); });
electron_1.ipcMain.on("quit", electron_1.app.quit);
function getMainWindow() {
    if (!browserWindow) {
        var options = {
            webPreferences: {
                experimentalFeatures: true,
                experimentalCanvasFeatures: true
            },
            titleBarStyle: "hidden",
            resizable: true,
            minWidth: 500,
            minHeight: 1000,
            show: false
        };
        browserWindow = new electron_1.BrowserWindow(options);
        browserWindow.loadURL("file://" + __dirname + "/assets/templates/index.html");
        browserWindow.webContents.openDevTools();
        browserWindow.on("closed", function () { return browserWindow = undefined; })
            .on("focus", function () { return electron_1.app.dock && electron_1.app.dock.setBadge(""); });
        browserWindow.webContents.on("did-finish-load", function () {
            browserWindow.show();
            browserWindow.focus();
        });
    }
    return browserWindow;
}
