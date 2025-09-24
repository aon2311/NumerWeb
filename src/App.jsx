import { Link } from 'react-router-dom';

import './App.css'

function App() {
  return (
    <>
      <h1>Numerical Project</h1>
      <h2>Choose one</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/Root-of-Equation/Root"> <h2>Root of Equation</h2></Link></li>
        <li><Link to="/Linear-algebra/linear"> <h2>Linear Algebra Equation</h2></Link></li>
        <li><Link to="/Interpolation/Interpolation"> <h2>Interpolation</h2></Link></li>
        <li><Link to="/Exterpolation/Exterpolation"> <h2>Extrapolation</h2></Link></li>
        <li><Link to="/Integration/Integration"> <h2>Integration</h2></Link></li>
        <li><Link to="/Diff/Diff"> <h2>Numerical Differentiation</h2></Link></li>
      </ul>
    </>
  );
}

export default App;
