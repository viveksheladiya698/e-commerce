import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { BsCart3 } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

    let [sr, setsr] = useState();

    let search = () => {
        if (sr) {
            let arr = props.data.filter((e, i) => {
                return e.title.toLowerCase().includes(sr.toLowerCase());
            })
            props.setsearch(arr);
        }
        else {
            alert("Please select");
        }
    }
    let Back = () => {
        props.setsearch(props.data);
    }

    return (
        <>
            <div className="header white">
                <div className="head">
                    <Container>
                        <Row className='m-auto'>
                            <Col xl={7}>
                                <div className="left">
                                    <div className="logo">
                                        <img src={require(`./images/logo.png`)}></img>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={5}>
                                <div className="right d-flex align-items-center h-100 w-100 justify-content-between">
                                    <button onClick={() => { Back() }}>Back</button>
                                    <div className="search">
                                        <input type="text" className='src' placeholder='Search For Products' onChange={(e) => { setsr(e.target.value) }}></input>
                                        <button onClick={() => { search(); }}><GrSearch className='ic' /></button>
                                    </div>
                                    <div className="ico">
                                        <Link to="/items/Card"><span><BsCart3 /></span></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Header;