import styles from "./Form.module.css";
import React from "react";
import validate from "./validation"

export default function Form(props) {
    const [userData, setUserData] = React.useState({ 
        username: '', password: '' });
    const [errors, setErrors] = React.useState({
        username: "", password: ""
    });

    function handleInput(e){
    setUserData({
        ...userData,
        [e.target.name]: e.target.value
    })
    setErrors(validate({
        ...userData,
        [e.target.name]: e.target.value
    })
    );
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.login(userData);
      }
  return (
    <div className={styles.box}>
        <form onSubmit={(e) => {
          handleSubmit(e);
        }}>
      <div>
        <h1 className={styles.h1}>Login</h1>
        <br></br>
        <label className={styles.label}>Username</label>
        <br></br>
        <input className={styles.input} name="username" placeholder="( Type your username )" onChange={(e)=>handleInput(e)}></input>
        <p className={styles.danger}>{errors.username && errors.username}</p>
      </div>
      <br></br>
      <div>
        <label className={styles.label}>Password</label>
        <br></br>
        <input className={styles.input} name="password" type="password" placeholder="( Type your password )" onChange={(e)=>handleInput(e)}></input>
        <p className={styles.danger}>{errors.password && errors.password}</p>
      </div>
      <div>
        <br></br>
        <button className={styles.button} type="submit">Log In</button>
      </div>
      </form>
    </div>
  );
}
