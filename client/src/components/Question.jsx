import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useSelector} from "react-redux";


const Question = ({children}) => {

    const cards = useSelector(state => state.cards)

    // const cardShort = cards.slice(0, 10)
    // console.log(cards)

    const [show, setShow] = useState(true);
    const [inputText, setInputText] = useState('');


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCheck = () => {

    }

    console.log(inputText)

    return (
        <>
 <span variant="primary" onClick={handleShow}>
        {children}
      </span>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>Modal title</Modal.Title>
                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>
                    <Form.Control
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        type="text"
                        id="answer"
                        aria-describedby="passwordHelpBlock"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={handleCheck}
                        style={{margin: 'auto'}}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Question;