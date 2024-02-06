import { Table } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Store/Counter/CounterSlice";


function Cart() {

    let arr = useSelector((state) => state.counter.data);
    let dish = useDispatch();

    let incre = (ele) => {
        dish(increment(ele));
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="text-align-center">
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Product Images</th>
                        <th>Product Price</th>
                        <th>Product Quality</th>
                        <th>Total Price</th>
                        <th>Total Price with Disscount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((ele, ind) => {
                            return (
                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td><img src={ele.thumbnail} className="product" /></td>
                                    <td>{ele.price}</td>
                                    <td><button className="tr-btn" onClick={() => { incre(ele) }}>+</button> {ele.qty} <button className="tr-btn">-</button></td>
                                    <td>{ele.price * ele.qty}</td>
                                    <td>{ele.price-((ele.price*ele.discountPercentage)/100)}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td colSpan={5}></td>
                        <td>Bill:</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>

        </>
    )
}
export default Cart;