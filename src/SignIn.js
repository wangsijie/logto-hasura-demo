import { useLogto } from "@logto/react";

export default SignIn = () => {
  const { signIn, isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return <div>Signed in</div>;
  }

  return (
    <button onClick={() => signIn("http://localhost:1234/callback")}>
      Sign In
    </button>
  );
};
