/*
    NoMatch -> Function Components
    1. This is used to display 404 messages if route doesn't match

    props { }
*/

import React from "react";

const NoMatch = () => {
    return (
        <div className="NoMatch">
    	    <h1>Not found <span>:(</span></h1>
			<p>Sorry, but the page you were trying to view does not exist.</p>
			<i>404</i>
            <br />
            <a href="/">Go Home</a>
		</div>
    )
};

export default NoMatch;
