import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        background: 'rgba(0, 0, 0, 0.75)',
        zIndex: "400"
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

interface IProps {
    trigger: JSX.Element,
    content: (x: React.Dispatch<React.SetStateAction<boolean>>) => JSX.Element,
}

export default function SimpleModal({ trigger, content }: IProps) {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>{trigger}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {content(setIsOpen)}
            </Modal>
        </div>
    )
}
