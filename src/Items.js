import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import axios from 'axios';


function Items(props) {

    let [pt, setpt] = useState(0);
    let [itemdata, setitemdata] = useState(null);
    let [tmp, settmp] = useState();
    let i;

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${props.id}`)
            .then(function (respons) {
                console.log(respons.data);
                setitemdata(respons.data);
                settmp(respons.data.thumbnail);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [props.id])
    console.log("Call id=", props.id);

    return (
        itemdata != null && <>
            <div className="mainbox">
                <Container fluid>
                    <Row>
                        <Col xl={6}>
                            <div className="img-pat d-flex my-2">
                                <div className="line w-10">
                                    {
                                        itemdata.images.map((el, i) => {
                                            return (
                                                <div className="img-bx" key={i}>
                                                    <img src={el} onClick={() => { settmp(el)}}></img>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="img">
                                    <img src={tmp}></img>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="info padding">
                                <div className="info-box">
                                    <div className="tit d-flex">
                                        <div className="tiat w-75">
                                            <span className='pro-tit bold'>{itemdata.title} ({itemdata.description})</span>
                                        </div>
                                        <div className="pric w-25">
                                            <span className='price'>{itemdata.price}</span><br></br>
                                            <span className='bold'>{itemdata.discountPercentage} %Off</span>
                                        </div>
                                    </div>
                                    <div className="review">
                                        <div className="rate mt-2">
                                            <span>{itemdata.rating} <FaStar className='st' /></span>
                                        </div>
                                        <div className="feature mt-3">
                                            <ul className='bold'>
                                                <li className='pb-2'>Brand: {itemdata.brand}</li>
                                                <li className='pb-2'>Category: {itemdata.category}</li>
                                                <li className='pb-2'>Remain Stock: {itemdata.stock}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Items;