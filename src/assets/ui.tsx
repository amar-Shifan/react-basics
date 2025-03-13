import React from "react"
interface user{
    name: string;
    email: string;
}
const ui: React.FC<user> = ({name , email}) => {
    return (
        <div className="flex flex-col justify-around items-center w-full max-w-md h-52 bg-white rounded-lg shadow-md p-6">
            <h1>name : {name}</h1>
            <h1>email : {email}</h1>
        </div>
    )
}

export default ui;