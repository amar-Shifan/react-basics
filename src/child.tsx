import React from "react";

interface childProp {
    sendData: (data: string) => void
}
const Child: React.FC<childProp> = ({sendData}) => {
    const data: string = "Hello from Child!";

    return (
        <div>
            <h3>Child Component</h3>
            <button onClick={() => sendData(data)}>Send Data to Parent</button>
        </div>
    )
}

export default Child