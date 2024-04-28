import React from 'react'
import img from ".././ResetPass/Nouveau_projet-ai-brush-removebg-0dyusvph.png"
import Menu from "../Menu";
import Nave from "../Nave";
function Event() {
    return (

            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Menu/>
                    <div className="layout-page">
                        <Nave/>
                        <div className="content-wrapper">
                            <h6 className="pb-1 mb-4 text-muted">Latest Events</h6>
                            <div className="card-group mb-5">
                                <div className="card">
                                    <img className="card-img-top" src="../assets/img/elements/4.jpg"
                                         alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Event "1"</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This
                                            content is a little bit longer.
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Posted 53 mins ago</small>
                                        <button className='btn1' >
                                            <span className="mdi mdi-delete"></span>
                                        </button>
                                        <button className='btn2'>
                                            <span className="mdi mdi-pencil-ruler"></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src="../assets/img/elements/5.jpg"
                                         alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Event "2"</h5>
                                        <p className="card-text">
                                            This card has supporting text below as a natural lead-in to additional
                                            content.
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Posted 3 days ago</small>
                                        <button className='btn3'><span className="mdi mdi-delete"></span></button>
                                        <button className='btn2'><span className="mdi mdi-pencil-ruler"></span></button>
                                    </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src="../assets/img/elements/1.jpg"
                                         alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Event "3"</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This
                                            card has even longer content than the first to show that equal height
                                            action.
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Posted 1 week ago</small>
                                        <button className='btn3'><span className="mdi mdi-delete"></span></button>
                                        <button className='btn2'><span className="mdi mdi-pencil-ruler"></span></button>
                                    </div>
                                </div>
                            </div>

                            <h6 className="pb-1 mb-4 text-muted">Post an Event</h6>
                            <div className="card mb-4">
                                <div className="card-header d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">Post</h5>
                                    <small className="text-muted float-end">Default label</small>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label"
                                                   htmlFor="basic-default-name">Title</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="basic-default-name"
                                                       placeholder="Quick title of the event."/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label"
                                                   htmlFor="basic-default-company">Description</label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="basic-default-company"
                                                    placeholder="Describe your event."/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label"
                                                   htmlFor="basic-default-message">Attachements</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="file" id="formFile"/>
                                            </div>
                                            <div className="row justify-content-end">
                                                <div className="col-sm-10">
                                                    <button type="submit" className="btn btn-primary"
                                                            style={{marginTop: "10px"}}>Post
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>

                </div>


                <div class="layout-overlay layout-menu-toggle"></div>
            </div>
)
}

export default Event