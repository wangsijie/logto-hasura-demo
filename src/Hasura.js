import { useLogto } from "@logto/react";

const Hasura = () => {
  const { getAccessToken } = useLogto();

  const handleClick = async () => {
    const accessToken = await getAccessToken("https://hasura.api");

    const response = await fetch("http://localhost:8080/v1/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "Expected-Role": "bronze",
      },
      body: JSON.stringify({
        query: "query MyQuery {\n  items {\n    id\n    name\n  }\n}\n",
        variables: null,
        operationName: "MyQuery",
      }),
    });

    if (!response.ok) {
      console.error(response);
      return;
    }

    const data = await response.json();
    console.log(data);
  };

  return <button onClick={handleClick}>Test Hasura</button>;
};

export default Hasura;
