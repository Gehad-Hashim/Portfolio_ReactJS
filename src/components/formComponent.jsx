import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const FormComponent = (props) => {

const history=useHistory()


    const [user, setUser] = useState({
        name: "", age: 0
    })
    const [errors, setErr] = useState({
        nameErr: "", ageErr: ""
    })

    const changeData = (e) => {
        if (e.target.name === "userName") {
            setUser({ ...user, name: e.target.value })
            setErr({
                ...errors, nameErr: e.target.value.length == 0 ? "this field is required" :
                e.target.value.length <3 && "can't be less than 3 letters"
            })
        } else {
            setUser({ ...user, age: e.target.value })
            setErr({ ...errors, ageErr: e.target.value.length == 0 ? "this field is required":
            e.target.value ==0 && "not valid age"
        })
        }
    }


    const submitData = (e) => {
        console.log(e);
        e.preventDefault();

        // props.history.push("/submit")    // using props
        history.push("/submit")       // using useHistory hook
    }
    return (
        <>
            <form className="container my-3 border border-dark py-3 px-0 w-50 vh-50"
                onSubmit={(e) => submitData(e)}>
                <div className="mb-3">
                    <label className="form-label me-3">Name</label>
                    <input className={`form-control ${errors.nameErr && 'border-danger'}`} 
                    type="text" value={user.name} name="userName"
                        onChange={(e) => changeData(e)}
                    />
                    <p className="text-danger">{errors.nameErr}</p>
                </div>
                <div className="mb-3">
                    <label className="form-label me-2">age</label>
                    <input className={`form-control ${errors.ageErr && 'border-danger'}`}
                    type="number" value={user.age} name="userAge"
                        onChange={(e) => changeData(e)}
                    />
                    <p className="text-danger">{errors.ageErr}</p>
                </div>

                <button type="submit" className="btn btn-primary"
                disabled={errors.ageErr || errors.nameErr}
                >submit
                </button>
            </form>
        </>
    )
}

export default FormComponent;