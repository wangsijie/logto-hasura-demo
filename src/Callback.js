import { useHandleSignInCallback } from "@logto/react";

const Callback = () => {
  useHandleSignInCallback(() => {
    location.href = "/";
  });

  return <div>Redirecting...</div>;
};

export default Callback;
