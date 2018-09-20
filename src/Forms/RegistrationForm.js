import React, { Component } from 'react';

class RegistrationForm extends Component {

    constructor() {
        super();
        this.state = {
            formFields: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            errors: {}
        }
        // To bind different events
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // When any field value changed
    handleChange(event) {
        let formFields = this.state.formFields;
        formFields[event.target.name] = event.target.value;
        this.setState({
            formFields
        });
    }

    // To validate all form fields
    validate() {
        let formFields = this.state.formFields;
        let errors = {};
        let IsValid = true;

        if (!formFields["firstName"]) {
            IsValid = false;
            errors["firstName"] = "Enter Your First Name";
        }

        if (typeof formFields["firstName"] !== "undefined") {
            if (!formFields["firstName"].match(/^[a-zA-Z ]*$/)) {
                IsValid = false;
                errors["firstName"] = "Only Alphabet Characters Are Allowed";
            }
        }

        if (!formFields["lastName"]) {
            IsValid = false;
            errors["lastName"] = "Enter Your Last Name";
        }

        if (typeof formFields["lastName"] !== "undefined") {
            if (!formFields["lastName"].match(/^[a-zA-Z ]*$/)) {
                IsValid = false;
                errors["lastName"] = "Only Alphabet Characters Are Allowed";
            }
        }

        if (!formFields["email"]) {
            IsValid = false;
            errors["email"] = "Enter Your Email";
        }

        if (typeof formFields["email"] !== "undefined") {
            var pattern = new RegExp(/^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/);
            if (!pattern.test(formFields["email"])) {
                IsValid = false;
                errors["email"] = "Invalid Email";
            }
        }

        if (!formFields["password"]) {
            IsValid = false;
            errors["password"] = "Enter The Password";
        }

        if (typeof formFields["password"] !== "undefined") {
            if (!formFields["password"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
                IsValid = false;
                errors["password"] = "Enter Valid Password";
            }
        }

        this.setState({
            errors: errors
        });
        return IsValid;
    }

    // When user submits the form after validation
    handleSubmit(event) {
        event.preventDefault();
        if (this.validate()) {
            let formFields = {};
            formFields["firstName"] = "";
            formFields["lastName"] = "";
            formFields["email"] = "";
            formFields["password"] = "";
            this.setState({ formFields: formFields });
        }
    }

    render() {
        return (
            <div className="container" style={{ width: '315px' }}>
                <h3>Employee Registration With Different Validations</h3>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>First Name</label>
                        <input className="form-control"
                            type="text"
                            name="firstName"
                            value={this.state.formFields.firstName}
                            onChange={this.handleChange} />
                        {this.state.errors.firstName &&
                            <div className="alert alert-danger">
                                {this.state.errors.firstName}
                            </div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input className="form-control"
                            type="text"
                            name="lastName"
                            value={this.state.formFields.lastName}
                            onChange={this.handleChange} />
                        {this.state.errors.lastName &&
                            <div className="alert alert-danger">
                                {this.state.errors.lastName}
                            </div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control"
                            type="text"
                            name="email"
                            value={this.state.formFields.email}
                            onChange={this.handleChange} />
                        {this.state.errors.email &&
                            <div className="alert alert-danger">
                                {this.state.errors.email}
                            </div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control"
                            type="text"
                            name="password"
                            value={this.state.formFields.password}
                            onChange={this.handleChange} />
                        {this.state.errors.password &&
                            <div className="alert alert-danger">
                                {this.state.errors.password}
                            </div>
                        }
                    </div>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div >
        );
    }
}

export default RegistrationForm;
