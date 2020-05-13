import React from 'react';

const LoginForm = (props) => {
    const {user, setUser} = props

    const onFirstNameChange = e => {setUser( {...user, firstName: e.target.value})}
    const onLasttNameChange = e => {setUser( {...user, lastName: e.target.value})}
    const onEmailChange = e => {setUser( {...user,  email: e.target.value})}
    const onPasswordChange = e => {setUser( {...user, password: e.target.value})}
    const onConfirmPasswordChange = e => {setUser( {...user, confirmPassword: e.target.value})}

    return(
        <div className="row">
            <div className="col-6 offset-3">
                <form>
                    <label>First Name:</label>
                    <input onChange={ onFirstNameChange } type="text" className="form-control"/>
                    <label>Last Name:</label>
                    <input onChange={ onLasttNameChange } type="text" className="form-control"/>
                    <label>Email:</label>
                    <input onChange={ onEmailChange } type="text" className="form-control"/>
                    <label>Password:</label>
                    <input onChange={ onPasswordChange } type="password" className="form-control"/>
                    <label>Confirm Password:</label>
                    <input onChange={ onConfirmPasswordChange } type="password" className="form-control"/>
                    <div className="form-group text-right">
                        <button className="btn btn-primary btn-sm">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default LoginForm