 import { useState } from "react";
import { API_HOST } from "../../common";

export default function MessagePage ({data}) {
    const [message, setMessage] = useState('');

    const messageHandler = (event) => {
        setMessage(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        fetch(`${API_HOST}/message?message=${message}`, {
            method: 'POST'
        }).then(res => res.json()).then(data => console.log(data))
    }

    return (
        <div>
            {data.map((messageData, index) => {
                return (
                    <div key={`message-${index}`}>
                        {messageData.message}
                    </div>
                )
            })}
            <form onSubmit={submitHandler}>
                <input type="text" value={message} onChange={messageHandler} />
                <input type="submit" />
            </form>
        </div>
    )
    
}

export async function getServerSideProps () {
    const res = await fetch(`${API_HOST}/message`, {method: 'GET'});
    const data = await res.json();

    return {props: {data}}
}