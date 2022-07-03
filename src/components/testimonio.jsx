import React from 'react';

const Testimonio = (props) => {
    return (
      <div className="container contenedor-testimonio d-flex p-0 bg-white">
        <div className="col-4">
           <img className="w-100 imagen-testimonio" src={props.img} alt={props.name} />
        </div>
        <div className="col-8 contenedor-text-testimonio pb-4 pt-3 px-5">
          <p className="text-center nombre-testimonio mt-4 fs-2"><strong>{props.name}</strong> in {props.country}</p>
          <p className='text-center cargo-testimonio mt-4 fs-2'>{props.charge} at <strong>{props.firma}</strong></p>
          <p className='descripcion-testimonio mt-4 fs-3'>{props.description}</p>
        </div>
      </div>
    );
};

export default Testimonio;