const { BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const url = require('url')


module.exports = class MainWindow extends BrowserWindow {
    constructor() {
        super({
            webPreferences: {
                nodeIntegration: true
            }
        })

        // isDev ? this.webContents.openDevTools() : null

        this.startUrl = isDev ? `http://localhost:3000/#` : url.format({
            pathname: path.join(__dirname, '../../index.html'),
            protocol: 'file:',
            slashes: true,
        })

        this.loadURL(this.startUrl)
    }
}