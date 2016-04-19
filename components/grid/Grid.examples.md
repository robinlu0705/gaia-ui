Powered by [flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid).

### Responsive Grid
    
    let contentStyle = {
      backgroundColor: '#007FFF',
      padding: '10px',
      textAlign: 'center',
      color: 'white',
      marginBottom: '10px'
    };

    let content = (
      <div style={contentStyle}></div>
    );
    
    <Grid fluid={true}>
      <Row>
        <Col xs={12} sm={3} md={2} lg={1}>{content}</Col>
        <Col xs={6} sm={6} md={8} lg={10}>{content}</Col>
        <Col xs={6} sm={3} md={2} lg={1}>{content}</Col>
      </Row>
      <Row>
        <Col xs={12} sm={3} md={2} lg={1}>{content}</Col>
        <Col xs={12} sm={9} md={10} lg={11}>{content}</Col>
      </Row>
      <Row>
        <Col xs={10} sm={6} md={8} lg={10}>{content}</Col>
        <Col xs={2} sm={6} md={4} lg={2}>{content}</Col>
      </Row>
    </Grid>
