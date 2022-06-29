import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props);

        this.state={};
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expendmd navbar-dark" style={{backgroundColor:"#E3CEF6"}}>
                        <div>
                            <a href="/" className="navbar-brand">Toy Project</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;