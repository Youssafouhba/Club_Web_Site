import React from 'react'
import './css/resetpass.css'
import img from './Nouveau_projet-ai-brush-removebg-0dyusvph.png'
function ResetPassword() {
    return (
        <div>
            <div className="position-relative">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner py-4">
                        <div className="card p-2">
                            <div className="app-brand justify-content-center mt-5">
                                <a href={""} className="app-brand-link gap-2">
                                    <span className="app-brand-logo demo">
                                      <span style={{color: "#9055fd"}}>
                                        <img src={img} alt={"g"} style={{width: "40px"}} />
                                      </span>
                                    </span>
                                    <span className="app-brand-text demo text-heading fw-semibold">CSEC</span>
                                </a>
                            </div>
                            <div className="card-body mt-2">
                                <h4 className="mb-2">Forgot Password? 🔒</h4>
                                <p className="mb-4">Enter your email and we'll send you instructions to reset your
                                    password</p>
                                <form id="formAuthentication" className="mb-3" action="">
                                    <div className="form-floating form-floating-outline mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            autoFocus/>
                                        <label>Email</label>
                                    </div>
                                    <button className="btn btn-primary d-grid w-100">Send Reset Link</button>
                                </form>
                                <div className="text-center">
                                    <a href="/admin"
                                       className="d-flex align-items-center justify-content-center">
                                        <i className="mdi mdi-chevron-left scaleX-n1-rtl mdi-24px"></i>
                                        Back to login
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResetPassword