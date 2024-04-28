import React from 'react'


function Footer() {
    return (
        <div>
            <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl">
                    <div
                        className="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
                        <div className="text-body mb-2 mb-md-0">
                            ©
                            <script>
                                document.write(new Date().getFullYear());
                            </script>
                            , made with <span className="text-danger"><i className="tf-icons mdi mdi-heart"></i></span> by Lmati Yasser
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer