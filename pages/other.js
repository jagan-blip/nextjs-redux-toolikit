import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "../components/Page";
import { addCount } from "../store/count/action";
import { wrapper } from "../store/store";
import { serverRenderClock, startClock } from "../store/tick/action";
import { increment } from "../store/CounterSlice";

const Other = (props) => {
  return <Page title="Other Page" linkTo="/" />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => (context) => {
    store.dispatch(increment());
    console.log("server!!");
  }
);

export default Other;
