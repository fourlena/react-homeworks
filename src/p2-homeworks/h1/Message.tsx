import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessageType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.text}>
                <p>{props.name}</p>
                <p>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
