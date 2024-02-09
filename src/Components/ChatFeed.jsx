// import MessageForm from "./MessafeForm";
// import MyMessage from "./MyMessage";
// import TheirMessage from "./TheirMessage";

// const ChatFeed = (props) => {
//         const {chats, activeChat, userName, messages } = props;
        
//         const chat = cahts && chats[activeChat];

//         const renderMessage = () => {
//             const keys = object.keys(messages);

//             return keys.map( key, index) => {
//                 const message = message[key]
//                 const lastMessageKey = index === 0? null : keys[index - 1]
//                 const isMyMessage = userName === message.sender.username ;
//                 return (
//                     <div key={'msg_${index}'} style={{ width: '100%'}}>
//                         <div className="message-block">
//                         {
//                             isMyMessage
//                              <MyMessage />
//                         }
//                         </div>
//                     </div>
//                 )
//             }
//         }
//         renderMessage()

//         return (
//             <div>
//                 ChatFeed
//             </div>
//         )
// }

// export default ChatFeed;