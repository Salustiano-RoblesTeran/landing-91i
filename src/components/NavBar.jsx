import React, { useEffect, useState } from "react";
//importar funcion obtenerClima
import { obtenerClima } from "../helpers/obtener-clima";
import "../css/navbar.css";

const NavBar = ({cambiarModoOscuro, modoOscuro}) => {
  //hooks - useState y useEffect

  const [tiempo, setTiempo] = useState(null);

  useEffect(() => {
    clima();
  }, []);

  const clima = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      const lat = coords.latitude;
      const long = coords.longitude;

      // console.log(coords);

      obtenerClima(lat, long)
        .then((respuesta) => {
          // const { main, weather } = respuesta;

          setTiempo({
            // temp: main.temp,
            // clima: weather[0],
            temp: respuesta.main.temp,
            clima: respuesta.weather[0],
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <div className="fixed-top">
        <nav className={`navbar navbar-expand-lg  ${modoOscuro?("bg-dark navbar-dark") : ("bg-body-tertiary")}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <i className="fa fa-ravelry" aria-hidden="true"></i>
              97iRobots
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contacto
                  </a>
                </li>
              </ul>
              {tiempo && (
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={`http://openweathermap.org/img/wn/${tiempo.clima.icon}@2x.png`}
                    alt=""
                    className="icon-tiempo"
                  />
                  <span className={modoOscuro? "text-white": ""}>{Math.round(tiempo.temp)}°C</span>
                </div>
              )}
            </div>


            {modoOscuro? (<i className="fa fa-moon-o text-white" aria-hidden="true"></i> ) : (<i className="fa fa-sun-o " aria-hidden="true"></i>)}
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onChange={cambiarModoOscuro}
                />
              </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
