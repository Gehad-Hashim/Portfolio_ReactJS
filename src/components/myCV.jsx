import { useEffect, useState } from "react"





const MYCV = () => {
    const [user, setUser] = useState({
        name: "ali", age: 15, isAdmin: true
    })
    function changeInfo(newName) {
        setUser({
            ...user,
            name: newName, age: 25
        })
    }

    useEffect(() => {
            console.log("did mount");
    }, [user])
    useEffect(() => {
            console.log("did update");
    }, [user])
    useEffect(() => {
        return ()=>{
            console.log("un mount");
        }
    }, [])


    return (
        <>
            <p>hello from function component</p>
            <span>
                {user.name} - {user.age}
            </span>

            <h2>
                {user.isAdmin && <button className="btn btn-primary" onClick={() => changeInfo("super")} >change info</button>}
            </h2>
        </>
    )
}


export default MYCV;