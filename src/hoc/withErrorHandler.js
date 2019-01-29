import React from 'react';
import Model from '../components/UI/Modal/Modal';

//This is grabbing the component that is param of the function and wrapping it with thhe model to show if anything goes wrong
//Is a class inside the function that is annoymous as it is never named. Using this to access the axios instance on componentDidMount
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null
    };
    
    componentWillMount () {
      axios.interceptors.request.use(req => {
        this.setState({
          error: null
        });
        return req;
      });
      axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    };

    render() {
      return (
        <React.Fragment>
          <WrappedComponent {...this.props} />
          <Model show={this.state.error} modelClose={this.errorConfirmedHandler}>{this.state.error ? this.state.error.message : null}</Model>
        </React.Fragment>
        
      )
    }
  }
}

export default withErrorHandler;