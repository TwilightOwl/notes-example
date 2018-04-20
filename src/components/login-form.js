import React, { Component } from 'react';

class LoginForm extends Component {

	constructor(props) {
		super(props);

		this.state = props.fields.reduce(
			(acc, { name }) => ({ ...acc, [name]: '' }), 
			{ isValid: false }
		)
	}

	onChange = e => {
		const { id, value } = e.nativeEvent.target;
		this.setState({ [id]: value }, this.validate)
	}

	get args() {
		return this.props.fields.map(({ name }) => this.state[name])
	}

	validate = () => {
		this.setState({ isValid: this.props.validate(...this.args) })
	}

	onSubmit = e => {
		e.nativeEvent.preventDefault();
		this.props.onSubmit(...this.args)
	}

	render() {
		const { isValid } = this.state,
			{ buttonTitle, fields } = this.props;

		const content = fields.map(({ title = '', isSecret = false, name }, index) => 
			<div key={index}>
				<label htmlFor={name} style={{ marginRight: '50px' }}>{title}</label>
				<input id={name} value={this.state[name]} onChange={this.onChange} type={isSecret ? 'password' : 'text'}/>
			</div>
		)

		return <form onSubmit={this.onSubmit}>
			{content}
			<input type="submit" disabled={!isValid} value={buttonTitle}/>
		</form>
	}

}

export default LoginForm;