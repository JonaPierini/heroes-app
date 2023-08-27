import { useContext } from "react";
import { Link, NavLink,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { NewContext } from "../../context/NewContext";



export const NavBar = () => {
  //   El navigate tiene dos parametro el to (ruta) y opciones
  const navigate = useNavigate()
    
    //Uso el contexto
    const {authState, logout} = useContext(AuthContext)
    // console.log(authState)
    // const {log, name} = useContext(NewContext)
    // console.log(name)
   
  const handleLogout = () => {
        // El replace es para que no se pueda volver. Evita que pueda regresar al historial anterior
        logout()
        // localStorage.clear();
        navigate('/login', {replace: true});
  }
  
   
 

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/marvel">
            Marvel
          </NavLink>

          <NavLink  className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/dc">
            DC
          </NavLink>
 
          <NavLink  className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
           {
            authState.logged == true ? <span className="nav-item nav-link text-primary">{authState.user.name}</span> : <></>
          } 
          {/* { //Aca si usaria el otro contexto con el estado
            log == true || name != '' ? <span className="nav-item nav-link text-primary">{name}</span> : <></>
          }  */}
          <button className="nav-item nav-link btn" onClick={handleLogout}>LogOut</button>
        </ul>
      </div>
    </nav>
  );
};
