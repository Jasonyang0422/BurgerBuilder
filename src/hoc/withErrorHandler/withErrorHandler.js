import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		}
		
		//if use componentDidMount() and there is sth wrong during rendering child components
		//such as rendering <WrappedComponent>, which includes fetching ingredients data
		//the interceptors will not work, cuz it is expected to be set at the end.
		componentWillMount() {
			this.reqInterceptor = axios.interceptors.request.use(req => {
				this.setState({error: null});
				return req;
			});
			this.resInterceptor = axios.interceptors.response.use(res => res, error => {
				this.setState({error: error});
			});
		}

		errorConfirmedHandler = () => {
			this.setState({error: null});
		}

		//whenever calling withErrorHandler()
		//such as transferring between different pages (burgerbuilder, checkout)
		//it will create new interceptor instance, so we need to get rid of the old instance.
		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}

		render() {
			return (
				<Aux>
					<Modal 
						ifShow={this.state.error}
						modalClosed={this.errorConfirmedHandler}>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props} />
				</Aux>
			);
		}	
	};
};

export default withErrorHandler;