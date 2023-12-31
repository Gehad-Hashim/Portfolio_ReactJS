import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../Network/axiosInstance";




const OneSkill = () => {
    const Sid = useParams();
    const [skill, setSkill] = useState({})

    useEffect(() => {
        axiosInstance.get(`/data/${Sid.id}`).then((res) => { setSkill(res.data) }).catch((err) => { console.log(err) })
    }, [])
    return (
        <>
            <h1>
                one Skill Details  no- {Sid.id}
            </h1>

            <p>
                {skill.details}</p>
        </>
    )
}

export default OneSkill;