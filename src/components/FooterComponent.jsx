import React, { Component } from 'react';

class FooterComponent extends Component {

    constructor(props){
        super(props)

        this.state={};
    }

    render() {
        return (
            <div>
                <footer className="footer" style={{backgroundColor:"#E3CEF6", color:"white"}}>
                    <span className="text-muted">made by hee : )</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;