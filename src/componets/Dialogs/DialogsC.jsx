import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

class DialogsC extends React.Component {

   /* constructor(props) {
        debugger
        super(props);
        this.props.setDialogsState({
            dialogs: [
                {id: 1, name: 'Sergei'},
                {id: 2, name: 'Dimych'},
                {id: 3, name: 'Andrei'},
                {id: 4, name: 'Sergei'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'How are you?'},
            ],
            newMessageText: ''
        })

    }

    componentDidMount() {
        debugger
        this.props.setDialogsState({
            dialogs: [
                {id: 1, name: 'Sergei'},
                {id: 2, name: 'Dimych'},
                {id: 3, name: 'Andrei'},
                {id: 4, name: 'Sergei'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'How are you?'},
            ],
            newMessageText: ''
        })
    }
*/
    addMessage = () => {
        this.props.addMessage();
    }

    onMessageChange = (e) => {
        let text = e.target.value;
        this.props.onMessageChange(text);
    }

    render() {
        debugger
        return (
            <div className={css.dialogs}>
                <div className={css.dialogsItem}>{
                    this.props.dialogs.map(
                        d => <DialogItem name={d.name} id={d.id}/>
                    )}
                </div>
                <div className={css.messages}>
                    <div>{
                        this.props.messages.map(
                            m => <Message message={m.message}/>
                        )}
                    </div>
                    <div>
                        <div><textarea placeholder='enter your message'
                                       value={this.props.newMessageText}
                                       onChange={this.onMessageChange}/></div>
                        <div>
                            <button onClick={this.addMessage}>send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DialogsC;