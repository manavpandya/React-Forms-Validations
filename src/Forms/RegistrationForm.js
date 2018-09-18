import React, { Component } from 'react';

class RegistrationForm extends Component {
    render() {
        return (
            <div className="container" style={{ width: '430px' }}>
                <h2>Simple Form For Registration</h2>
                <form>
                    <div className="form-group">
                        <label for="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Enter first name" name="firstname" />
                    </div>
                    <div className="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Enter last name" name="lastname" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                    </div>
                    <div className="form-group">
                        <label for="cpwd">Confirm Password</label>
                        <input type="password" className="form-control" id="cpwd" placeholder="Enter confirm password" name="cpwd" />
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="remember" />Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
