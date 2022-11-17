import Content from "../content/Content";
import articles from "../../data/Articles";
import {useState} from "react";
import Search from "../search/Search";
const Main = ()=>{
    const [searchTerm, setSearchTerm] = useState("")

    const handleInputChange = (event)=>{
        setSearchTerm(event.target.value)
    }
    const filteredArticle = articles.filter((article)=>{
        return article.title.includes(searchTerm)
    })

    console.log(filteredArticle)
    return(
        <div className="container px-lg-5">
            <form action="d-flex">
                <Search name="search" onSearch={handleInputChange}/>
            </form>
            <Content articles={filteredArticle}/>
        </div>
    )

}
export default Main;