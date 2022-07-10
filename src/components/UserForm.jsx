import React, {useState} from "react";
const UserForm = () => {
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmpassword, setconfirmpassword] = useState("");

    // display error message of each field
    const [firstnameError, setFirstnameError] = useState(true);
    const [lastnameError, setLastnameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);
    const [confirmpasswordError, setConfirmPasswordError] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!firstnameError && !lastnameError && !emailError && !passwordError && !confirmpasswordError){
            setIsSubmitted(true);
        }else{
            alert("Fix the form")
        }
    }

    const handleFirstname = (e) => {
        const valToUpdate = e.target.value
        setFirstname(e.target.value)
        if(valToUpdate.length < 2) {
            setFirstnameError(" First Name should be at least 2 characters")
        }else{
            setFirstnameError("")
        }
    }

    const handleLastname = (e) => {
        const valToUpdate = e.target.value
        setLastname(e.target.value)
        if(valToUpdate.length < 2) {
            setLastnameError(" Last Name should be at least 2 characters")
        }else{
            setLastnameError("")
        }
    }

    const handleEmail = (e) => {
        const valToUpdate = e.target.value
        setEmail(e.target.value)
        if(valToUpdate.length < 2) {
            setEmailError("Email should be at least 2 characters")
        }else{
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        const valToUpdate = e.target.value
        setPassword(e.target.value)
        if(valToUpdate.length < 8) {
            setPasswordError(" First Name should be at least 8 characters")
        }else{
            setPasswordError("")
        }
    }

    const handleConfirmPassword = (e) => {
        const valToUpdate = e.target.value
        setconfirmpassword(e.target.value)
        if(valToUpdate != password) {
            setConfirmPasswordError("Passwords must match!")
        }else{
            setConfirmPasswordError("")
        }
    }

return(
        <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
        <p>
        <label>First Name: </label>
        <input type="text" name="firstname" onChange={handleFirstname} value={firstname}/>
        </p>
        <span style={{color: "red"}}>{firstnameError}</span>
        <p>
        <label>Last Name: </label>
        <input type="text" name="lastname" onChange={handleLastname} value={lastname}/>
        </p>
        <span style={{color: "red"}}>{lastnameError}</span>
        <p>
            <label>Email: </label>
            <input type="text" name="email" onChange={handleEmail} value={email} />
        </p>
        <span style={{color: "red"}}>{emailError}</span>
        <p>
            <label>Password: </label>
            <input type="password" name="password" onChange={handlePassword} value={password}/>
        </p>
        <span style={{color: "red"}}>{passwordError}</span>
        <p>
            <label>Confirm Password: </label>
            <input type="password" name="confirmpassword" onChange={handleConfirmPassword} value={confirmpassword}/>
        </p>
        <span style={{color: "red"}}>{confirmpasswordError}</span>
        <button type="submit" > Submit</button>
        </form>
        </div>
)
}

export default UserForm;