import { ipcDispatchSync } from '../electron'

export default (state, args) => {
    switch (args.type) {
        case "NEW-CHANGES":
            return args.payload
        default:
            return ipcDispatchSync(args)
    }
}
