import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "../components/Page";
import { addCount } from "../store/count/action";
import { wrapper } from "../store/store";
import { serverRenderClock, startClock } from "../store/tick/action";
import { increment } from "../store/CounterSlice";

const Index = (props) => {
  return <Page title="Index Page" linkTo="/other" />;
};

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(increment());
});

export default Index;
