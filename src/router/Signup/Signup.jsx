import { Link, Outlet } from "react-router-dom";

import React from "react";

function Signup() {
  return (
      <div className="flex min-h-screen bg-[url('/public/ataraxia-signupbanner.png')] bg-no-repeat bg-right object-cover">
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="flex flex-col justify-center items-center w-full">
            <Outlet />
          </div>
          <div className="flex flex-row justify-center items-center p-4 gap-2">
            <p>Ya tenés una cuenta?</p>
            <Link className="no-underline text-primary-500 font-bold" to="/signin">
              Logueate!
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <p>Volver al</p>
            <Link className="no-underline text-primary-500 font-bold" to="/">
              inicio
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Signup;
