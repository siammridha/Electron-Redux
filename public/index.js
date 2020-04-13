const { app, BrowserWindow, ipcMain } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const url = require('url')

let window

function createWindow() {

  window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    }
  })

  const startUrl = isDev ? `http://localhost:3000` : url.format({
    pathname: path.join(__dirname, '../../index.html'),
    protocol: 'file:',
    slashes: true,
  })

  window.loadURL(startUrl)

  window.on('closed', () => {
    window = null
  })
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  } else {
    window.show()
  }
})


let store = {
  name: "test"
}

ipcMain.on('dispatch', (event, { type, payload }) => {
  switch (type) {
    case "CHANGE-NAME":
      store = { ...store, name: payload }
      break
    default:
      return event.returnValue = store
  }
  console.log({ type, payload })
  window.webContents.send("NEW-CHANGES", { type: "NEW-CHANGES", payload: store })
})