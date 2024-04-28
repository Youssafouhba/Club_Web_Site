import React from 'react'
import Menu from "../Menu";
import Nave from "../Nave";


function Cells() {
    
    const cellsData = [
        {
            "id": 1,
            "name": "Cellule 1",
            "description": "Description de la cellule 1"
        },
        {
            "id": 2,
            "name": "Cellule 2",
            "description": "Description de la cellule 2"
        },
        {
            "id": 3,
            "name": "Cellule 3",
            "description": "Description de la cellule 3"
        }
    ]
    
    return (

        <div>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Menu/>
                    <div class="layout-page">
                        <Nave/>
                        <div class="content-wrapper">
                            <div class="container-xxl flex-grow-1 container-p-y">
                                <h4 class="py-3 mb-4"><span class="text-muted fw-light">Cells /</span> Information</h4>
                                <div class="card">
                                    <h5 class="card-header">Cells</h5>
                                    <div class="table-responsive text-nowrap">
                                        <table class="table">
                                            <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                            </tr>
                                            </thead>
                                            <tbody class="table-border-bottom-0" id="niggawatt">


                                                {cellsData.map((cell) => (
                                                    <tr>
                                                        <td key={cell.id}>
                                                            <span className="fw-medium">{cell.name}</span>
                                                        </td>
                                                        <td key={cell.id} >{cell.description}</td>
                                                    </tr>
                                                ))}

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
                                                <label class="col-sm-2 col-form-label" for="basic-icon-default-fullname">Describe</label>
                                                <div class="form-floating form-floating-outline mb-4">
                      <textarea
                          class="form-control h-px-100"
                          id="exampleFormControlTextarea1"
                          placeholder="Comments here..."></textarea>
                                                    <label for="exampleFormControlTextarea1">Example textarea</label>
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
                        </div>

                    </div>

                </div>


                <div class="layout-overlay layout-menu-toggle"></div>
            </div>

        </div>
        </div>
    )
}

export default Cells