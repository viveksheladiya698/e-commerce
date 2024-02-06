import { Table } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Store/Counter/CounterSlice";


function Cart() {

    let arr = useSelector((state) => state.counter.data);
    let dish = useDispatch();
    let sum=0, data=0;

    let incre = (el) => {
        dish(increment(el));
    }
    let decre = (el) => {
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
                        <th>Total Price with Disscount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((ele, ind) => {
                            data=(ele.price - ((ele.price * ele.discountPercentage) / 100)) * ele.qty;
                            sum += data;
                            console.log("data=",data);
                            console.log("sum=",sum);
                            return (
                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td><img src={ele.thumbnail} className="product" /></td>
                                    <td>{ele.price}</td>
                                    <td><button className="tr-btn" onClick={() => { incre(ele) }}>+</button> {ele.qty} <button className="tr-btn" onClick={()=>{ decre(ele) }}>-</button></td>
                                    <td>{ele.price * ele.qty}</td>
                                    <td>{data}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td colSpan={5}></td>
                        <td>Bill:</td>
                        <td>{sum}</td>
                    </tr>
                </tbody>
            </Table>

        </>
    )
}
export default Cart;