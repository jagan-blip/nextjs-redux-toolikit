import { wrapper } from "../store/store";
import Layout from "../layout/layout";
const WrappedApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(WrappedApp);
