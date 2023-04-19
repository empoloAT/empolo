import type { ReactElement } from "react";
import { Layout } from "components";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.component}>
      <h1>Первая страница</h1>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Home;
