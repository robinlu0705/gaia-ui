import React from 'react';
import { Grid, Row, Col } from 'grid/Grid';

let description = `
Powered by Bootstrap. Inspired by React-Bootstrap.\n
\`import { Grid, Row, Col } from 'grid/Grid';\`
`;

let code = `
<Grid fluid={true}>
  <Row>
    <Col xs={12} md={8}>
      <code>"&lt;{'Col xs={12} md={8}'} /&gt;"</code>
    </Col>
    <Col xs={6} md={4}>
      <code>"&lt;{'Col xs={6} md={4}'} /&gt;"</code>
    </Col>
  </Row>

  <Row>
    <Col xs={6} xsOffset={6}>
      <code>"&lt;{'Col xs={6} xsOffset={6}'} /&gt;"</code>
    </Col>
  </Row>

  <Row>
    <Col md={6} mdPush={6}>
      <code>"&lt;{'Col md={6} mdPush={6}'} /&gt;"</code>
    </Col>
    <Col md={6} mdPull={6}>
      <code>"&lt;{'Col md={6} mdPull={6}'} /&gt;"</code>
    </Col>
  </Row>
</Grid>
`;

let colStyle = {
  backgroundColor: 'rgba(86,61,124,.15)',
  border: '1px solid rgba(86,61,124,.2)',
  padding: '10px'
};

let element = (
  <Grid fluid={true}>
    <Row>
      <Col xs={12} md={8} style={colStyle}>
        <code>"&lt;{'Col xs={12} md={8}'} /&gt;"</code>
      </Col>
      <Col xs={6} md={4} style={colStyle}>
        <code>"&lt;{'Col xs={6} md={4}'} /&gt;"</code>
      </Col>
    </Row>

    <Row>
      <Col xs={6} xsOffset={6} style={colStyle}>
        <code>"&lt;{'Col xs={6} xsOffset={6}'} /&gt;"</code>
      </Col>
    </Row>

    <Row>
      <Col md={6} mdPush={6} style={colStyle}>
        <code>"&lt;{'Col md={6} mdPush={6}'} /&gt;"</code>
      </Col>
      <Col md={6} mdPull={6} style={colStyle}>
        <code>"&lt;{'Col md={6} mdPull={6}'} /&gt;"</code>
      </Col>
    </Row>
  </Grid>
);

class GridSG extends React.Component {
  static styleguide = {
    index: '3.1',
    category: 'Grid',
    title: 'Grid Systen',
    description: description,
    code: code
  }

  render() {
    return element;
  }
};

export default GridSG;
