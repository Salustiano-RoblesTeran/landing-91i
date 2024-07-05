import React from "react";

const CardApp = ({ item, modoOscuro }) => {
  return (
    <>
      <div className="col-12 col-md my-3">
        <div className={`card h-100 ${modoOscuro?("text-bg-secondary"): ""}`}>
          <div className= "card-body d-flex flex-column align-items-center">
            <i
              className={`fa ${item.icono} fa-3x text-primary`}
              aria-hidden="true"
            ></i>
            <p className={`text-muted fs-3 fs-md-2 ${modoOscuro?("text-white") : ""}`}>{item.texto1}</p>
            <p className={`text-muted ${modoOscuro?("text-white") : ""}`}>{item.texto2}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardApp;
