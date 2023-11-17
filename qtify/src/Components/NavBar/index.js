import SearchBar from "../SearchBar"
import Button from "../Button"
import "./NavBar.css"

export default () => {
    return(
        <div className="navbar">
            <img src="logo.png"/>
            <SearchBar />
            <Button>Give Feedback</Button>
        </div>
    )
}