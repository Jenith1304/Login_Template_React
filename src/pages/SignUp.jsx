import React, { useState } from 'react'
import styles from "../styles/Signup.module.css"
import Button from '../components/Button'

const SignUp = () => {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "8%",
            height: "80vh",
            flexDirection: "column",
            alignItems: "center"
        }}>

            <div className={styles.signupContainer}>
                {/* for blue strip at top  */}
                <div className={styles.blueStrip}></div>
                {/* for heading of signup  */}
                <div className={styles.signupHeading}>
                    <h1>Sign Up</h1>
                    <p>
                        Sign Up and get access to all the features
                    </p>
                </div>
                {/* signup Form */}
                <div className={styles.signupForm}>
                    {/* RoleButtons */}
                    <div className={styles.signupRoles}>
                        <Button text="Interviewer" active="true" />
                        <Button text="Interviewee" active="false" />
                    </div>
                    <div className={styles.signupDetails}>
                        <div className={styles.formSignup}>
                            {/* <input type="text" name="fullName" placeholder='Full Name*' /> */}
                            <input type="email" placeholder='Email*' name="email"
                            />
                            {/* <input type="text" placeholder='Mobile*' name="mobile" /> */}
                            <input type="password" placeholder='Password*' name="password"
                            />
                            <input type="password" placeholder=' Confirm Password*' name="confirmPassword"
                            />

                            <button>Sign Up</button>
                        </div>
                    </div>

                </div>
                {/* signup with */}
                {/* <div className={styles.signupWith}>
                    <button type="submit" ><img src="/images/Google.png" /></button>
                </div> */}
            </div>
        </div >
    )
}

export default SignUp