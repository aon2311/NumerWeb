import { Link } from 'react-router-dom';


function RootE (){
    return(
        <>
            <h1>Root Of Equation</h1>
            <h2>Choose Again</h2>
            <ul 
                style={{ listStyle: 'none', padding: 0 }}>
                <li><Link to="/Root-of-Equation/graph"> <h2>Graphical Methods</h2></Link></li>
                <li><Link to="/Root-of-Equation/bisec"> <h2>Bisection Search</h2></Link></li>
                <li><Link to="/Root-of-Equation/false"> <h2>False PositionMethods</h2></Link></li>
                <li><Link to="/Root-of-Equation/one-point"> <h2>One-Point Iteration Methods</h2></Link></li>
                <li><Link to="/Root-of-Equation/newton-r"> <h2>Newton-Raphson Methods</h2></Link></li>
                <li><Link to="/Root-of-Equation/secant"> <h2>Secant Methods</h2></Link></li>
            </ul>
        </>
        

    )
}
export default RootE;