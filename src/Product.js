import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Product(props) {

  let [cat, setcat] = useState([]);
  let [pro, setpro] = useState([]);
  let [tmp, settmp] = useState([]);


  useEffect(() => {

    axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        setcat(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })

  }, []);
  useEffect(() => {

    axios.get('https://dummyjson.com/products')
      .then(function (respons) {
        setpro(respons.data.products);
        settmp(respons.data.products);
        props.setdata(respons.data.products);
      })
      .catch(function (error) {
        console.log(error);
      })

  }, []);

  useEffect(()=>{
    if(props.search != null)
    {
      setpro(props.search);
    }
    else
    {
      setpro(tmp);
    }

  },[props.search]);

  let filtr = (d) => {
    let a = [];
    a = tmp.filter((e, b) => {
      return e.category == d;
    })
    setpro(a);
  }


  return (
    <div className="produc bg">
      <div className="main p-1">
        <Container fluid>
          <Row>
            <Col xl={3} className='p-1'>
              <div className="parent">
                <div className="filter white ms-2">
                  <div className="box">
                    <div className="title p-3">
                      <h4>Filters</h4>
                    </div>
                    <div className="cato p-3">
                      <h6>CATEGORIES</h6>
                    </div>
                    <div>
                      <ul className='manu'>
                        {
                          cat.map((ele, ind) => {
                            return (
                              <li className='py-2 px-3' key={ind}><a style={{ cursor: "pointer" }} onClick={() => { filtr(ele) }}>{ele}</a></li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={9} className='p-1'>
              <div className="display white">
                <div className="pro">
                  {
                    pro.map((el, i) => {
                      return (
                        <Link to={`/items/${el.id}`} key={i}>
                          <div className="pro-box p-3" key={i}>
                            <div className="par">
                              <Row>
                                <Col xl={5}>
                                  <div className="img-bx">
                                    <img src={el.thumbnail} className='w-100 object-fit-cover'></img>
                                  </div>
                                </Col>
                                <Col xl={7}>
                                  <div className="info-box">
                                    <div className="tit d-flex">
                                      <div className="tiat w-75">
                                        <span className='pro-tit bold'>{el.title} ({el.description})</span>
                                      </div>
                                      <div className="pric w-25">
                                        <span className='price'>{el.price}</span><br></br>
                                        <span className='bold'>{el.discountPercentage} %Off</span>
                                      </div>
                                    </div>
                                    <div className="review">
                                      <div className="rate mt-2">
                                        <span>{el.rating} <FaStar className='st' /></span>
                                      </div>
                                      <div className="feature mt-3">
                                        <ul className='bold'>
                                          <li className='pb-2'>Brand: {el.brand}</li>
                                          <li className='pb-2'>Category: {el.category}</li>
                                          <li className='pb-2'>Remain Stock: {el.stock}</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default Product;