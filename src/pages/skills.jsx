import { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "../components/card/MyCard";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../Store/Actions/listAction";
import { Container } from "react-bootstrap";

const Skills = () => {

    // const [skills, setSkills] = useState([])

    // useEffect(() => {
    //     axios.get("https://retoolapi.dev/O7ApQx/data")
    //         .then((res) => { setSkills(res.data) })
    //         .catch((err) => { console.log("looooooooo ", err) })
    // }, [])

    const skills = useSelector((state) => state.listRed.list)
    const isloader = useSelector((state) => state.loadRed.loader)
   


    return (
        <>
            <h1>Here are my skills</h1>
          <div>  {isloader?
          <Container>
          <Loader/>
          </Container>
          :
           <Container>
            
           {skills.map((skill) => {
               return (
                   <div>
                    <div key={skill.id}>
                        <MyCard id={skill.id} name={skill.name} image={skill.image} />
                    </div>
                    </div>
                )
            })}
            </Container>
        }
        </div>
        </>
    )
}

export default Skills;