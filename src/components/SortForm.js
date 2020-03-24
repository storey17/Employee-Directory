import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/SortForm.css";

function SortForm(){

    const location = useLocation();

    return (
        <div className= "jumbotron">
            <div className="container d-flex justify-content-around flex-wrap">
                    <Link to="/employee-directory">
                        <button className={location.pathname === "/employee-directory" || location.pathname === "/employee-directory/" ? "btn btn-warning" : "btn btn-success"}>
                            Default
                        </button>
                    </Link>
                    <Link to="/employee-directory/male">
                        <button className={location.pathname === "/employee-directory/male" ? "btn btn-warning" : "btn btn-success"}>
                            Filter for Men
                        </button>
                    </Link>
                    <Link to="/employee-directory/female">
                        <button className={location.pathname === "/employee-directory/female" ? "btn btn-warning" : "btn btn-success"}>
                            Filter for Women
                        </button>
                    </Link>
                    <Link to="/employee-directory/sort">
                        <button className={location.pathname === "/employee-directory/sort" ? "btn btn-warning" : "btn btn-success"}>
                            Sort Alphabetically
                        </button>
                    </Link>
            </div>
        </div>
    );
}

export default SortForm;