import React, { Component } from 'react';
import Link from 'react-router/lib/Link';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import About from './About.jsx';

const style = {
    background: {
        // backgroundColor: "rgba(230, 230, 240, 0.6)",
        backgroundColor: "white",
    },
};


class GridMenu extends Component {
    render() {
        return (
            <div>
                <ol>
                <h3>Connectomics Institute for Reconstructing Cortex:  Understanding Intelligence Together</h3>
                <br />
                CIRCUIT offers Johns Hopkins University students an opportunity to participate in a cutting-edge summer research experience to map the brain at nanoscale resolution, while building skills to make significant contributions to science in a fun, collaborative environment.  Please carefully read the about page to learn more about the institute and the learn page to learn more about connectomics.  
                <br /><br />
                Once you are ready, please apply via the apply link below. Applications will be reviewed on a rolling basis, so apply now!  For questions please contact: 
                <br />
                
                <ul>
                  <li>William Gray Roncal, Ph.D. (william.gray.roncal@jhuapl.edu)</li>
                  <li>Marysol Encarnacion (marysol@jhu.edu)</li>
                </ul>
                </ol>
                <br />
                <br />
                <Row>
                    <Col sm={10} smOffset={1}>
                        <Row>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/synapse_tile.png)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="about">About</Link>
                                </div>
                            </Col>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/membrane_tile.jpg)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="application">Application</Link>
                                </div>
                            </Col>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/seg_test.jpg)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="learn">Learn</Link>
                                </div>
                            </Col>
                        </Row>
                        {/*<Row>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/seg_test.jpg)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="tutorial">Tutorial</Link>
                                </div>
                            </Col>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/seg_test.jpg)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="synapseProof">Synapse Proof</Link>
                                </div>
                            </Col>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/seg_test.jpg)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="neuronProof">Neuron Proof</Link>
                                </div>
                            </Col>
                        </Row>*/}
                    </Col>
                </Row>
                <center>(c)2017 The Johns Hopkins University Applied Physics Laboratory.  All Rights Reserved.</center>
            </div>
        );
    }
}


export default class Homepage extends Component {
    render() {
        return (
            <div style={ style.background }>
                <GridMenu />
            </div>
        )
        const html = marked(text);
        return (
            <Row around="xs">
                <Col xs={10}>
                    <div dangerouslySetInnerHTML={{
                        __html: html
                    }}>
                    </div>
                </Col>
            </Row>
        )
    }
}