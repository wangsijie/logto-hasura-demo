import { useLogto } from "@logto/react";
import Hasura from "./Hasura";
import SignIn from "./SignIn";

const Home = () => {
  const { isAuthenticated } = useLogto();

  return (
    <div>
      <h1>Hello world!</h1>
      <SignIn />
      {isAuthenticated && <Hasura />}
    </div>
  );
};

export default Home;
