var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
        return(
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Sample locations you can search for:</p>
                <ol>
                    <li>
                        <Link to="/?location=Cork">Cork, IE
                        </Link>
                    </li>
                    <li>
                        <Link to="/?location=Badajoz">Badajoz, ES
                        </Link>
                    </li>
                </ol>
            </div>
            
        )
    };

module.exports = Examples;