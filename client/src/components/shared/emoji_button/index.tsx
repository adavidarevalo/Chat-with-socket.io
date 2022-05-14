import React from 'react';
import Popup from 'reactjs-popup';
import Picker, { IEmojiData } from 'emoji-picker-react'
import 'reactjs-popup/dist/index.css';
import './emoji_button.css'

interface IProps {
    trigger: JSX.Element,
    onClick: (event: React.MouseEvent<Element, MouseEvent>, data: IEmojiData) => void
}

export default function EmojiButton({ trigger, onClick }: IProps) {
    return (
        <Popup trigger={<button> {trigger}</button>} position="top center">
            <Picker onEmojiClick={onClick} />
        </Popup>
    )
}
