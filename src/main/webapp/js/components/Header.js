import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills float-right">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Applications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <h3 className="text-muted">CadSoft</h3>
            </div>
        );
    }
}
