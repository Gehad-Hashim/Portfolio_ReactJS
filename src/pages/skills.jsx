import { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "../components/card/MyCard";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../Store/Actions/listAction";

const Skills = () => {

    // const [skills, setSkills] = useState([])

    // useEffect(() => {
    //     axios.get("https://retoolapi.dev/O7ApQx/data")
    //         .then((res) => { setSkills(res.data) })
    //         .catch((err) => { console.log("looooooooo ", err) })
    // }, [])

    const skills = useSelector((state) => state.listRed.list)
   


    return (
        <>
            <h1>Here are my skills</h1>
            {skills.map((skill) => {
                return (
                    <div key={skill.id}>
                        <MyCard id={skill.id} name={skill.name} image={skill.image} />
                    </div>
                )
            })}
        </>
    )
}

export default Skills;