import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { UseDispatch, useDispatch } from 'react-redux';
import { Cartdata } from './Store/Counter/CounterSlice';


function Items(props) {

    let dispach=useDispatch();

    let [itemdata, setitemdata] = useState(null);
    let [tmp, settmp] = useState();
    let {id} =useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(function (respons) {
                setitemdata(respons.data);
                settmp(respons.data.thumbnail);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [id]);

    return (
        itemdata != null && <>
        <Header></Header>
            <div className="mainbox">
                <Container fluid>
                    <Row>
                        <Col xl={6}>
                            <div className="img-pat d-flex my-2">
                                <div className="line w-25">
                                    {
                                        itemdata.images.map((el, i) => {
                                            return (
                                                <div className="img-bx m-3" key={i}>
                                                    <img src={el} onClick={() => { settmp(el)}}></img>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="img w-100">
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
                                    <div className="shop">
                                        <button onClick={()=>{dispach(Cartdata(itemdata))}}>Add to Cart <BsCart3 className='iac'/></button>
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