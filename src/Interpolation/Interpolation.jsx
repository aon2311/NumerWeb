import { Link } from 'react-router-dom';


function Interpolation(){
    return (
        <>
            <h1>Interpolation</h1>
            <h2>Choose Again</h2>
            
            <ul 
                style={{ listStyle: 'none', padding: 0 }}>
                <li><Link to="/Interpolation/Newtondiff"> <h2>Newton Divided-Differences</h2></Link></li>
                <li><Link to="/Interpolation/Lagrange"> <h2>Lagrange Interpolation</h2></Link></li>
                <li><Link to="/Interpolation/Spline"> <h2>Spline Interpolation</h2></Link></li>


            </ul>
        </>
        
    )
}
export default Interpolation;