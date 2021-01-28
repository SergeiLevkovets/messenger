import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.storeStatus);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode ?
                <div>
                        <span
                            onDoubleClick={activateEditMode}>{props.storeStatus || 'write your status'}</span>
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