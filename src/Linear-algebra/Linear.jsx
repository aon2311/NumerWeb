import { Link } from 'react-router-dom';

function Linear (){
    return(
        <>
            <h1>Linear algebra equation</h1>
            <h2>Choose Again</h2>
            
            <ul 
                style={{ listStyle: 'none', padding: 0 }}>
                <li><Link to="/Linear-algebra/Cramer"> <h2>Cramer's Rule</h2></Link></li>
                <li><Link to="/Linear-algebra/G_eli"> <h2>Guass Elimination Methods</h2></Link></li>
                <li><Link to="/Linear-algebra/G_jor"> <h2>Guass Jordan Methods</h2></Link></li>
                <li><Link to="/Linear-algebra/Matrix"> <h2>Matri inversion</h2></Link></li>
                <li><Link to="/Linear-algebra/Lu"> <h2>LU decomposition method</h2></Link></li>
                <li><Link to="/Linear-algebra/Jacobi"> <h2>Jacobi iteration method</h2></Link></li>
                <li><Link to="/Linear-algebra/Conju"> <h2>Conjugate gradient method</h2></Link></li>

            </ul>
        </>
        

    )
}
export default Linear;