
import users from '../users/users'
import Header from './headerComponent/header'
const Home=({title,age})=>{
return (
<div >
    <Header/>
    {title}
    <br/>

    
{age? <p> {title} is <b > {age>50?'senior':'junior'}</b></p>:'no age sent'}

<p>{users.map(
    (user)=>{
        return(
            <div key={users.id}>
               <p style={{color:'red',fontStyle:'italic'}}>{user.name}</p>
            </div>
            )
    }
)}</p>


{title}
</div>
)}

export default Home;