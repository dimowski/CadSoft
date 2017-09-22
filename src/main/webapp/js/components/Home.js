import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-3">Applications</h1>
                    <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus
                        ac cursus
                        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
                </div>

                <div className="row marketing">
                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
                    </div>

                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
                    </div>
                </div>
            </div>
        );
    }
}
