import React from 'react'
import img from ".././ResetPass/Nouveau_projet-ai-brush-removebg-0dyusvph.png"
import Menu from "../Menu";
import Nave from "../Nave";
function Team() {
    return (

        <div>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Menu/>
                    <div class="layout-page">
                        <Nave/>
                        <div class="content-wrapper">
                            <div class="container-xxl flex-grow-1 container-p-y">
                                <h4 class="py-3 mb-4"><span class="text-muted fw-light">Team /</span> Members</h4>
                                <div class="card">
                                    <h5 class="card-header">Team Members</h5>
                                    <div class="table-responsive text-nowrap">
                                        <table class="table">
                                            <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                            </tr>
                                            </thead>
                                            <tbody class="table-border-bottom-0" id="niggawatt">

                                            <tr>
                                                <td>
                                                    <span class="fw-medium">Lmati Yasser</span>
                                                </td>
                                                <td>Lmatiyasser@gmail.com</td>
                                                <td>
                                                    +212710247735
                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="container-xxl flex-grow-1 container-p-y">
                                <h4 class="py-3 mb-4"><span class="text-muted fw-light">Forms/</span> Horizontal Layouts</h4>

                                <div class="col-xxl">
                                    <div class="card mb-4">
                                        <div class="card-header d-flex align-items-center justify-content-between">
                                            <h5 class="mb-0">Basic with Icons</h5>
                                            <small class="text-muted float-end">Merged input group</small>
                                        </div>
                                        <div class="card-body">
                                            <form>
                                                <div class="row mb-3">
                                                    <label class="col-sm-2 col-form-label" for="basic-icon-default-fullname">Name</label>
                                                    <div class="col-sm-10">
                                                        <div class="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" class="input-group-text"
                          ><i class="mdi mdi-account-outline"></i
                          ></span>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                id="basic-icon-default-fullname"
                                                                placeholder="John Doe"
                                                                aria-label="John Doe"
                                                                aria-describedby="basic-icon-default-fullname2"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <label class="col-sm-2 col-form-label" for="basic-icon-default-email">Email</label>
                                                    <div class="col-sm-10">
                                                        <div class="input-group input-group-merge">
                                                            <span class="input-group-text"><i class="mdi mdi-email-outline"></i></span>
                                                            <input
                                                                type="text"
                                                                id="basic-icon-default-email"
                                                                class="form-control"
                                                                placeholder="john.doe"
                                                                aria-label="john.doe"
                                                                aria-describedby="basic-icon-default-email2" />
                                                            <span id="basic-icon-default-email2" class="input-group-text">@example.com</span>
                                                        </div>
                                                        <div class="form-text">You can use letters, numbers & periods</div>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <label class="col-sm-2 form-label" for="basic-icon-default-phone">Phone No</label>
                                                    <div class="col-sm-10">
                                                        <div class="input-group input-group-merge">
                          <span id="basic-icon-default-phone2" class="input-group-text"
                          ><i class="mdi mdi-phone"></i
                          ></span>
                                                            <input
                                                                type="text"
                                                                id="basic-icon-default-phone"
                                                                class="form-control phone-mask"
                                                                placeholder="658 799 8941"
                                                                aria-label="658 799 8941"
                                                                aria-describedby="basic-icon-default-phone2" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row justify-content-end">
                                                    <div class="col-sm-10">
                                                        <button type="button" class="btn btn-primary" id="save-information-btn">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            <footer class="content-footer footer bg-footer-theme">
                                <div class="container-xxl">
                                    <div
                                        class="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
                                        <div class="text-body mb-2 mb-md-0">
                                            ©
                                            <script>
                                                document.write(new Date().getFullYear());
                                            </script>
                                            , made with <span class="text-danger"><i
                                            class="tf-icons mdi mdi-heart"></i></span> by Lmati Yasser
                                        </div>
                                    </div>
                                </div>
                            </footer>

                            <div class="content-backdrop fade"></div>
                        </div>

                    </div>

                </div>


                <div class="layout-overlay layout-menu-toggle"></div>
            </div>

        </div>
        </div>
    )
}

export default Team