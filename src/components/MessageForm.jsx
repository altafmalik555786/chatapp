import { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine"
import { PictureOutlined, SendOutlined } from '@ant-design/icons';


const MessageForm = (props) => {
    const { chatId, creds } = props;
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, { text });
        
        setValue(' ');

    }

    const handleChange = (event) => {
        setValue(event.target.value)

        isTyping(props, chatId);
        
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.value , text: ''});
    }

    return (
        <form onSubmit={handleSubmit} className="message-form">
            <input className="message-input"
             type="text" 
             placeholder="Send Message"
             onChange={handleChange}  
             onSubmit={handleSubmit}
             value={value}
            
             />
             <label htmlFor="image-button">
                <span  className="upload-image" >
                    <PictureOutlined className="upload-icon"/>
                </span>
             </label>
             <input 
             type="file" 
             multiple={false}
             id="imaxge-button"
             style={{ display: "none" }}
             onSubmit={handleUpload}
             />
             <button type="submit">
                <SendOutlined className="send-icon" />
             </button>
        </form>
    )
}

export default MessageForm;