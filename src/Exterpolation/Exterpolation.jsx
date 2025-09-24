import { Link } from 'react-router-dom';

function Exterpolation() {
    return (
        
        <>
            <h1>Extrapolation</h1>
            
            <h2>Choose Again</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link to="/Exterpolation/Simple"><h2>Simple Regression</h2></Link></li>
                <li><Link to="/Exterpolation/Multi"><h2>Multiple Regression</h2></Link></li>
            </ul>
        </>
    )
}
export default Exterpolation;
