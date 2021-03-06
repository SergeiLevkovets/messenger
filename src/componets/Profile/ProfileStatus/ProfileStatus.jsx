import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.storeStatus
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.storeStatus !== this.props.storeStatus) {
            this.setState({
                status: this.props.storeStatus
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode}>{this.props.storeStatus || 'write your status'}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}
                               onBlur={this.deActivateEditMode}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus