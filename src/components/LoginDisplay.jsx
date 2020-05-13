import React from 'react';

const LoginDisplay = props => {
    const {firstName, lastName, email, password, confirmPassword} = props.user

return(
    <div className="container">
        <div className="row">
            <div className="col-6 offset-3">
                <h6 className="text-center">Your form data:</h6>
            </div>
        </div>

        <div className="row">    
            <div className="col-3 offset-3"><p>First Name:</p></div>
            <div className="col-3"><p>{firstName}</p></div>
        </div>

        <div className="row">    
            <div className="col-3 offset-3"><p>Last Name:</p></div>
            <div className="col-3"><p>{lastName}</p></div>
        </div>
        <div className="row">    
            <div className="col-3 offset-3"><p>Email:</p></div>  
            <div className="col-3"><p>{email}</p></div>
        </div>

        <div className="row">    
            <div className="col-3 offset-3"><p>Password:</p></div>
            <div className="col-3"><p>{password}</p></div>
        </div>
        
        <div className="row">    
            <div className="col-3 offset-3"><p>Confirm Password:</p></div>   
            <div className="col-3"><p>{confirmPassword}</p></div>
        </div>

    </div>
    )
}

export default LoginDisplay
