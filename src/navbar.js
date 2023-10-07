// Navbar.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function Navbar() {
    return (
        <nav className="navbar idp_Navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#myNavbar"
                    >
                        <img
                            src="https://images.railyatri.in/ry_images_prod/Group-968902x-1660711245.png"
                            alt="icon bar"
                            width="24px"
                        />
                    </button>
                    <a className="navbar-brand" href="/">
                        <img
                            className=""
                            alt="intrcity logo"
                            src="https://images.railyatri.in/ry_images_prod/logo-1601537442.png"
                        />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="/idp/price-pulse"> Price Pulse </a>
                        </li>
                        <li className="">
                            <a href="/idp/command-center"> Command Center </a>
                        </li>
                        <li className="dropdown nestLi">
                            <a
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                href="true"
                            >SRP Metrics <span className="caret"></span
                            ></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="/idp/rating-review-srp-metric">Ratings & Reviews</a>
                                </li>
                                <li><a href="/idp/slip-srp-metric">Major SRP Slips</a></li>
                                <li>
                                    <a href="/idp/service-availability">Service Availability</a>
                                </li>
                            </ul>
                        </li>

                        <li className="dropdown nestLi">
                            <a
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                href="true"
                            >Demand Calendar <span className="caret"></span
                            ></a>
                            <ul className="dropdown-menu">
                                <li className=""><a href="/idp/seed-price">Seed Price</a></li>
                            </ul>
                        </li>

                        <li className="dropdown nestLi">
                            <a
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                href="true"
                            >Intelligence <span className="caret"></span
                            ></a>
                            <ul className="dropdown-menu">
                                <li><a href="/idp/seat-inventory">Seat Inventory</a></li>
                                <li><a href="/idp/service-stress">Service Stress</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="newAdminBtn"></div>
                </div>
            </div>
            <Helmet>
                <link
                    rel="stylesheet"
                    media="all"
                    href="/assets/manifests-7a868194d0d7d4acfbfef2730d2ecf57a5360a4c4d7a3573561459f84ada48ff.css"
                />

                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
                />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script
                    type="text/javascript"
                    src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"
                ></script>
                <link
                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    rel="stylesheet"
                    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                    crossorigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:400,500"
                    rel="stylesheet"
                />
                <link
                    href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.16/css/bootstrap-multiselect.min.css"
                    integrity="sha512-wHTuOcR1pyFeyXVkwg3fhfK46QulKXkLq1kxcEEpjnAPv63B/R49bBqkJHLvoGFq6lvAEKlln2rE1JfIPeQ+iw=="
                    crossorigin="anonymous"
                />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                ></script>
            </Helmet>
        </nav>
    );
}

export default Navbar;
