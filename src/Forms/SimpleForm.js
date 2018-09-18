import React, { Component } from 'react';

class SimpleForm extends Component {
    render() {
        return (
            <div className="container" style={{ width: '315px' }}>
                <h2>Simple Form For Login</h2>
                <form>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
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

export default SimpleForm;
