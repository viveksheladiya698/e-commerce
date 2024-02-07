import { Table } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Store/Counter/CounterSlice";


function Cart() {

    let arr = useSelector((state) => state.counter.data);
    let bill = useSelector((state) => state.counter.bill);
    let dish = useDispatch();

    let incre = (el) => {
        dish(increment(el));
    }
    let decre = (el,id) => {
        dish(decrement(el));
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
                        <th>discount Price</th>
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
                                    <td><button className="tr-btn" onClick={() => { incre(ele.id) }}>+</button> {ele.qty} <button className="tr-btn" onClick={()=>{ decre(ele.id) }}>-</button></td>
                                    <td>{ele.price * ele.qty}</td>
                                    <td>{ele.disscount}</td>
                                    <td>{ele.disscountprice}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td colSpan={6}></td>
                        <td>Bill:</td>
                        <td>{bill}</td>
                    </tr>
                </tbody>
            </Table>

        </>
    )
}
export default Cart;