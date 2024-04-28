import React, {useState} from 'react'
import img from ".././ResetPass/Nouveau_projet-ai-brush-removebg-0dyusvph.png"
import Menu from "../Menu";
import Nave from "../Nave";
function Account() {
    const [avatar, setAvatar] = useState("../assets/img/avatars/6.png");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setAvatar(URL.createObjectURL(file));
    };
    return (

        <div>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Menu/>
                    <div class="layout-page">
                        <Nave/>
                        <div className="content-wrapper">

                            <div className="container-xxl flex-grow-1 container-p-y">
                                <h4 className="py-3 mb-4">
                                    <span className="text-muted fw-light">Account Settings /</span> Account
                                </h4>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="nav nav-pills flex-column flex-md-row mb-4 gap-2 gap-lg-0">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="javascript:void(0);">
                                                    <i className="mdi mdi-account-outline mdi-20px me-1"></i>Account
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="card mb-4">
                                            <h4 className="card-header">Profile Details</h4>
                                            <div className="card-body">
                                                <div className="d-flex align-items-start align-items-sm-center gap-4">
                                                    <img
                                                        src={avatar}
                                                        alt="user-avatar"
                                                        className="d-block w-px-120 h-px-120 rounded"
                                                        id="uploadedAvatar"
                                                    />
                                                    <div className="button-wrapper">
                                                        <label htmlFor="upload" className="btn btn-primary me-2 mb-3"
                                                               tabIndex="0">
                                                            <span className="d-none d-sm-block">Upload new photo</span>
                                                            <i className="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                                                            <input
                                                                type="file"
                                                                id="upload"
                                                                className="account-file-input"
                                                                hidden
                                                                accept="image/png, image/jpeg"
                                                                onChange={handleFileChange}
                                                            />
                                                        </label>
                                                        <button type="button"
                                                                className="btn btn-outline-danger account-image-reset mb-3">
                                                            <i className="mdi mdi-reload d-block d-sm-none"></i>
                                                            <span className="d-none d-sm-block">Reset</span>
                                                        </button>

                                                        <div className="text-muted small">Allowed JPG, GIF or PNG. Max
                                                            size of 800K
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body pt-2 mt-1">
                                                <form id="formAccountSettings" method="POST" onSubmit="return false">
                                                    <div className="row mt-2 gy-4">
                                                        <div className="col-md-6">
                                                            <div className="form-floating form-floating-outline">
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    id="firstName"
                                                                    name="firstName"
                                                                    value="John"
                                                                    autoFocus/>
                                                                <label htmlFor="firstName">First Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-floating form-floating-outline">
                                                                <input className="form-control" type="text"
                                                                       name="lastName" id="lastName" value="Doe"/>
                                                                <label htmlFor="lastName">Last Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-floating form-floating-outline">
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    id="email"
                                                                    name="email"
                                                                    value="john.doe@example.com"
                                                                    placeholder="john.doe@example.com"/>
                                                                <label htmlFor="email">E-mail</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="input-group input-group-merge">
                                                                <div className="form-floating form-floating-outline">
                                                                    <input
                                                                        type="text"
                                                                        id="phoneNumber"
                                                                        name="phoneNumber"
                                                                        className="form-control"
                                                                        placeholder="202 555 0111"/>
                                                                    <label htmlFor="phoneNumber">Phone Number</label>
                                                                </div>
                                                                <span className="input-group-text">US (+1)</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="mt-4">
                                                        <button type="submit" className="btn btn-primary me-2">Save
                                                            changes
                                                        </button>
                                                        <button type="reset"
                                                                className="btn btn-outline-secondary">Reset
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                        <div className="card">
                                            <h5 className="card-header fw-normal">Delete Account</h5>
                                            <div className="card-body">
                                                <div className="mb-3 col-12 mb-0">
                                                    <div className="alert alert-warning">
                                                        <h6 className="alert-heading mb-1">Are you sure you want to
                                                            delete your account?</h6>
                                                        <p className="mb-0">Once you delete your account, there is no
                                                            going back. Please be certain.</p>
                                                    </div>
                                                </div>
                                                <form id="formAccountDeactivation" onSubmit="return false">
                                                    <div className="form-check mb-3 ms-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="accountActivation"
                                                            id="accountActivation"/>
                                                        <label className="form-check-label" htmlFor="accountActivation"
                                                        >I confirm my account deactivation</label
                                                        >
                                                    </div>
                                                    <button type="submit" className="btn btn-danger">Deactivate
                                                        Account
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <footer class="content-footer footer bg-footer-theme">
                                <div className="container-xxl">
                                    <div
                                        className="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
                                        <div className="text-body mb-2 mb-md-0">
                                            ©
                                            <script>
                                                document.write(new Date().getFullYear());
                                            </script>
                                            , made with <span className="text-danger"><i
                                            className="tf-icons mdi mdi-heart"></i></span> by Lmati Yasser
                                        </div>
                                    </div>
                                </div>
                            </footer>

                            <div className="content-backdrop fade"></div>
                        </div>

                    </div>

                </div>


                <div class="layout-overlay layout-menu-toggle"></div>
            </div>

        </div>
    )
}

export default Account