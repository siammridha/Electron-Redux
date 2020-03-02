const { ipcRenderer } = window.require('electron')

function ipcDispatch(args) {
    return ipcRenderer.send('dispatch', args)
}

function ipcDispatchSync(args) {
    return ipcRenderer.sendSync('dispatch', args)
}

module.exports = { ipcRenderer, ipcDispatch, ipcDispatchSync }