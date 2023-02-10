import { Link as Anchor, useParams } from "react-router-dom";
import React, { useEffect } from "react";

import { useDispatch } from 'react-redux'
import userActions from "../store/users/actions"

const VerifyAccount = () => {
  const { user_id, verify_code } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userActions.verifyUser({user_id, verify_code}))
  }, []);
  return (
    <div className="background-container bg-[url('/public/banner1.jpg')] w-screen h-screen bg-no-repeat bg-cover bg-top">
      <div className="verify-div flex items-center justify-center w-full gap-4 h-full bg-transparent">
        <div className="verify-div2 flex flex-col items-center">
          <h1 className="verify-message m-0 bg-transparent text-[4rem] text-white">Tu cuenta fue verificada!</h1>
          <Anchor className="verify-redirect bg-transparent border-0 text-[1.2rem] text-white font-bold cursor-pointer" to="/">
            Iniciá sesión
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
