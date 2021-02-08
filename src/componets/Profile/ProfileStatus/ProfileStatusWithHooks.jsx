import React, {useState, useEffect} from "react";

const ProfileStatusWithHooks = ({storeStatus, updateStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(storeStatus);

    useEffect(() => {
        setStatus(storeStatus);
    }, [storeStatus]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deActivateEditMode = () => {
        setEditMode(false);
        updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode ?
                <div>
                        <b>Status: </b><span onDoubleClick={activateEditMode}>{storeStatus || 'write your status'}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} autoFocus={true} value={status}
                           onBlur={deActivateEditMode}/>
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks