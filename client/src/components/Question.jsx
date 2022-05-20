import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addScore} from "../redux/scoreAction";
import useSound from 'use-sound';
import losesound from '../sound/z_uk-proigrysha.mp3';
import winSound from '../sound/zvuki-pravilnogo-otveta-2.mp3';




const Question = ({children, question, category, answer}) => {
  
  const [play1] = useSound(losesound);
  const [play2] = useSound(winSound);


    const [show, setShow] = useState(false);
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCheck = () => {
        if (inputText === answer) {
            dispatch(addScore(children * 1))
            play2()
        }else{
          play1()
        }
        //
        handleClose()
    }


    return (
        <>
 <span variant="primary" onClick={handleShow}>
        {children}
      </span>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>{category}</Modal.Title>
                    <Modal.Body>
                        <p>{question}</p>
                        <p>Value: {children}</p>
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
