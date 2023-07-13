import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Btn from "../components/Btn";

function UserView() {

    // const [users, setUsers] = useState([]);

    // const getUsers = () => {
    //     fetch("http://159.65.21.42:9000/users")
    //         .then((resp) => resp.json())
    //         .then((result) => {
    //             setUsers(result);
    //             console.log(result);
    //         })
    //         .catch((err) => console.log((err.message)));
    // }

    // useEffect(() => {
    //     getUsers();
    // }, []);

    // const deleteUser = (id) => {
    //     if (window.confirm("Do you want to delete?")) {
    //         fetch(`http://159.65.21.42:9000/user/${id}`, {
    //             method: "DELETE",
    //         })
    //         .then((resp) => {
    //             alert("User Deleted Successfully");
    //         })
    //         .catch((err) => console.log((err.message)));
    //     }
    // };


    return (
        <div>
            <Navigation />
            <div className="admin-dashboard">
                <Sidebar />
                <div className="main-dash">
                    <div className="header">
                        <h2>Agents</h2>
                    </div>
                    <table className="userview" >
                        <tr>
                            <th>S/No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                        {/* i used reverse here and the spread operator so that it will give me the most recent users at the top of the list and not below and also we added index parameter so that my s/no will be doing in order as 1,2,3 etc else it would have just been direct as {users && usera.map((data) =>{})} */}
                        {/* {
                            users && [...users].reverse().map((data, index) => ( */}
                                <tr>
                                    <td>1</td>
                                    <td>Debby Inyang</td>
                                    <td>debbyinyang@gmail.com</td>
                                    <td>09056784567</td>
                                    <td>0000</td>
                                    <td>
                                        <Btn title="Edit" bgColor="rgb(125, 75, 28)" />
                                        <Btn title="Delete" bgColor="#ac0d0d" />
                                    </td>
                                </tr>
                            {/* ))
                        } */}
                    </table>

                </div>
            </div>
        </div>
    )
}

export default UserView;