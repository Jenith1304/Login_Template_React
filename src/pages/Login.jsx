import React, { useState } from 'react'
import styles from "../styles/Login.module.css"
import Button from '../components/Button'


export const Login = () => {



    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "8%",
            height: "70vh",
            flexDirection: "column",
            alignItems: "center"
        }}>

            <div className={styles.loginContainer}>
                {/* for blue strip at top  */}
                <div className={styles.blueStrip}></div>
                {/* for heading of login  */}
                <div className={styles.loginHeading}>
                    <h1>Login</h1>
                    <p>
                        Log In and get access to all the features
                    </p>
                </div>
                {/* Login Form */}
                <div className={styles.loginForm}>
                    {/* RoleButtons */}
                    <div className={styles.loginRoles}>
                        <Button text="Interviewer" active="true" />
                        <Button text="Interviewee" active="false" />
                    </div>
                    <div className={styles.loginDetails}>
                        <div className={styles.formLogin}>
                            <input type="email" placeholder='Email' name='email' />
                            <input type="password" placeholder='Password' name='password' />
                            <button >Log In</button>
                        </div>
                    </div>

                </div>
                {/* Login with */}
                <div className={styles.loginWith}>
                    <button type="submit" ><img src="/images/Google.png" /></button>
                </div>
            </div>
        </div >
    )
}
