const { app, ipcMain } = require('electron')
const mainWindow = require('./windows/mainWindow')

let window = null

function createWindow() {

  window = new mainWindow()

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