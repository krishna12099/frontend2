import React, { useState } from 'react'
import FuncImg from './FuncImg'

function MainFuncState() {
    const [data, setData] = useState({
        name: "Rajesh Nagar",
        number: 1,
        isImage: true
    });

    const [email, setEmail] = useState("raj@gmail.com");

    const plus = () => {
        setData({ ...data, number: data.number + 1 });
    }

    const minus = () => {
        setData({ ...data, number: data.number - 1 });
    }
    return (
        <div>
            <button onClick={() => setData({ ...data, name: "Akash Nagar" })}>change</button>
            <h1>Hi my name is:{data.name} </h1>

            <button onClick={() => plus()}>+</button>
            <h1>{data.number}</h1>
            <button onClick={() => minus()}>-</button>
            <br />
            <br />
            <br />

            <button onClick={() => setData({ ...data, isImage: false })}>Hide</button>
            <button onClick={() => setData({ ...data, isImage: true })}>show</button>
            <button onClick={() => setData({ ...data, isImage: !data.isImage })}>Hide/show</button>

            {
                data.isImage ? <FuncImg /> : null
            }

            <br />
            <hr />
            <br />

            <button onClick={() => setEmail("raj@yahoo.com")}>Change</button>
            <h1>My email is :{email}</h1>
            <br />
            <hr />
            <br />
        </div>
    )
}

export default MainFuncState