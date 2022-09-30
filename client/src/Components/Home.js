import styles from "./home.module.css";
import Card from "./Card";
import { useEffect, useState } from "react";

const Home = (props) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/testapi")
      .then((res) => res.json())
      .then((res) => setResponse(res))
      .catch((e) => setError(e));
  }, []);

  console.log("responses", response);

  return (
    <div>
      <header className={styles.header}>
        <h1>Fresh Stock</h1>
      </header>
      <main className={styles.body}>
        {response &&
          response.map((arr) => (
            <Card
              key={arr.key}
              category={arr.category}
              image={arr.image}
              description={arr.description}
              title={arr.title}
              price={arr.price}
              rating={arr.rating}
            ></Card>
          ))}
        {error && <p>error</p>}
      </main>
    </div>
  );
};
export default Home;
