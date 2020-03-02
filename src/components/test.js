import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { ipcRenderer, ipcDispatch } from '../components/electron'

const Test = () => {
    const name = useSelector(state => state.name)
    const dispatch = useDispatch()

    useEffect(() => {
        ipcRenderer.on("NEW-CHANGES", (event, args) => dispatch(args))
    }, [dispatch])

    return (
        <div>
            <input value={name} onChange={(e) => {
                ipcDispatch({ type: "CHANGE-NAME", payload: e.target.value })
            }} />
        </div>
    );
};

export default React.memo(Test)
