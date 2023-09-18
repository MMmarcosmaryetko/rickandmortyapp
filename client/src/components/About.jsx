import unnamed from "../images/unnamed.png"

const About = () => {
    return (
        <div>
        <h2 >Creador: <b>Marcos J. Maryetko</b></h2>
        <img src= {unnamed}
        alt=""
        style={{ width: '250px', borderRadius: '50%' }} 
        />
        </div>
    );
}

export default About;
