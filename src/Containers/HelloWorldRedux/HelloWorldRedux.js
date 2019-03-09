import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHelloWorld } from '../../actions/actions';

class HelloWorldRedux extends Component {
  componentDidMount() {
    this.props.getHelloWorld();
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
  hello_world: store.helloworld.say_hi
});

const mapDispatchToProps = {
  getHelloWorld,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorldRedux);
