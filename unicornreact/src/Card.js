import profilePic from './Images/Invis.png';
import './index.css';
function Card(){
    return (
        <div className="card">
            <img className='card-image' src = {profilePic}></img>
            <h2 className='card-title'>Marian :D</h2>
            
        </div>
    );
}
export default Card;