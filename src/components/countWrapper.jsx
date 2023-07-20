import Count from "./counter/count";
import ActionBtns from "./counter/actionBtns";
import { useState } from "react"
import { useHistory ,useParams} from "react-router-dom"
import { useLocation } from "react-router-dom/cjs/react-router-dom";

const CountWrapper=(props)=>{
 

    return(
        <div>
            <p className="text-primary fs-2 mx-5">count Wwrapper</p>

        </div>
    )
}

export default CountWrapper;