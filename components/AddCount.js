import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCount } from "../store/count/action";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/CounterSlice";
import { userReq } from "../store/CounterSlice";
const AddCount = ({ count, addCount }) => {
  const counter = useSelector((state) => state.counter.count);
  const name = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        AddCount:
        <span>
          {count}---{counter}
        </span>
      </h1>
      <button>Add To Count</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count.count,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCount);
