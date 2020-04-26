import React from 'react';
import { emojify } from 'react-emojione';

function strToRGB(str) {
  if (str && str.length > 0) {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
    return `#${"00000".substring(0, 6 - c.length)}${c}`;
  }
}

const Message = (props) => {
  const { created_at, author, content } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i className="author">
        <span style={{ color: strToRGB(author) }}>{props.author}</span>
        <small>{time}</small>
      </i>
      <p>{emojify(content)}</p>
    </div>
  );
};

export default Message;