import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHelloWorldSaga } from '../../actions/actions';

class HelloWorldSaga extends Component {
  componentDidMount() {
    this.props.getHelloWorldSaga();
  }

  render() {
    const { hello_world } = this.props;
    return (
      hello_world ? (
        <div>
          {hello_world}
        </div>
      ) : null
    );
  }
}

const mapStateToProps = (store) => ({
  hello_world: store.helloworld.say_hi_saga
});

const mapDispatchToProps = {
  getHelloWorldSaga,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorldSaga);
