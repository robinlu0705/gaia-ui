Powered by [Bootstrap](http://getbootstrap.com/css/#grid).

Inspired by [React-Bootstrap](https://react-bootstrap.github.io/components.html#page-layout).

    let colStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.2)',
      padding: '10px'
    };
    
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
