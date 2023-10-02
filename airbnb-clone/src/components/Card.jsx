import katie from "../images/katie-zaferes.jpeg"
import star from "../images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img src={katie} className="card--image" />
            <div className="card--stats">
                <img src={star} />
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}