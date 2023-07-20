import axios from "axios";
import { useEffect, useState } from "react";
import MyCard from "../components/card/MyCard";




const Blogs = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=food&apiKey=5bb3f7c3d7c049dea9425d57e5561caa")
            .then((res) => setArticles(res.data.articles))
            .catch((err) => console.log(err))
    }, [])

    return (<>
        <h1>Blogs</h1>

        { articles.map((article,index)=>{
            return(
                <div key={index}>
                    <MyCard arid={article.source.id} image={article.urlToImage} name={article.title} />
                </div>
            )
        })}

    </>)
}

export default Blogs;