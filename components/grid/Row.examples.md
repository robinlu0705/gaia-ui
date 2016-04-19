## Alignment

### start

    let rowStyle = {
      backgroundColor: '#007FFF',
      padding: '10px'
    };

    let content = (
      <div
        style={{
          backgroundColor: '#036',
          padding: '10px'
        }}
      />
    );

    <Grid fluid={true}>
      <Row start="xs" style={rowStyle}>
        <Col xs={6}>{content}</Col>
      </Row>
    </Grid>

### center

    let rowStyle = {
      backgroundColor: '#007FFF',
      padding: '10px'
    };

    let content = (
      <div
        style={{
          backgroundColor: '#036',
          padding: '10px'
        }}
      />
    );

    <Grid fluid={true}>
      <Row center="xs" style={rowStyle}>
        <Col xs={6}>{content}</Col>
      </Row>
    </Grid>

### end

    let rowStyle = {
      backgroundColor: '#007FFF',
      padding: '10px'
    };

    let content = (
      <div
        style={{
          backgroundColor: '#036',
          padding: '10px'
        }}
      />
    );

    <Grid fluid={true}>
      <Row end="xs" style={rowStyle}>
        <Col xs={6}>{content}</Col>
      </Row>
    </Grid>

### top

    let rowStyle = {
      backgroundColor: '#007FFF',
      padding: '10px'
    };

    let content1 = (
      <div
        style={{
          backgroundColor: '#036',
          height: '60px'
        }}
      />
    );

    let content2 = (
      <div
        style={{
          backgroundColor: '#036',
          height: '20px'
        }}
      />
    );

    <Grid fluid={true}>
      <Row top="xs" style={rowStyle}>
        <Col xs={6}>{content1}</Col>
        <Col xs={6}>{content2}</Col>
      </Row>
    </Grid>

### middle

    let rowStyle = {
      backgroundColor: '#007FFF',
      padding: '10px'
    };

    let content1 = (
      <div
        style={{
          backgroundColor: '#036',
          height: '60px'
        }}
      />
    );

    let content2 = (
      <div
        style={{
          backgroundColor: '#036',
          height: '20px'
        }}
      />
    );

    <Grid fluid={true}>
      <Row middle="xs" style={rowStyle}>
        <Col xs={6}>{content1}</Col>
        <Col xs={6}>{content2}</Col>
      </Row>
    </Grid>

### bottom

    let rowStyle = {
      backgroundColor: '#007FFF',
      padding: '10px'
    };

    let content1 = (
      <div
        style={{
          backgroundColor: '#036',
          height: '60px'
        }}
      />
    );

    let content2 = (
      <div
        style={{
          backgroundColor: '#036',
          height: '20px'
        }}
      />
    );

    <Grid fluid={true}>
      <Row bottom="xs" style={rowStyle}>
        <Col xs={6}>{content1}</Col>
        <Col xs={6}>{content2}</Col>
      </Row>
    </Grid>

## Distribution

### around

    let rowStyle = {
      backgroundColor: '#007FFF',
      padding: '10px'
    };

    let content = (
      <div
        style={{
          backgroundColor: '#036',
          padding: '10px'
        }}
      />
    );

    <Grid fluid={true}>
      <Row around="xs" style={rowStyle}>
        <Col xs={2}>{content}</Col>
        <Col xs={2}>{content}</Col>
        <Col xs={2}>{content}</Col>
      </Row>
    </Grid>

### between

    let rowStyle = {
      backgroundColor: '#007FFF',
      padding: '10px'
    };

    let content = (
      <div
        style={{
          backgroundColor: '#036',
          padding: '10px'
        }}
      />
    );

    <Grid fluid={true}>
      <Row between="xs" style={rowStyle}>
        <Col xs={2}>{content}</Col>
        <Col xs={2}>{content}</Col>
        <Col xs={2}>{content}</Col>
      </Row>
    </Grid>

## Reversing

    let rowStyle = {
      backgroundColor: '#007FFF',
      padding: '10px'
    };

    let Content = (props) => {
      return (
        <div
          style={{
            backgroundColor: '#036',
            padding: '10px',
            color: 'white',
            textAlign: 'center'
          }}
        >
          {props.children}
        </div>
      )
    };

    <Grid fluid={true}>
      <Row reverse style={rowStyle}>
        <Col xs={2}><Content>1</Content></Col>
        <Col xs={2}><Content>2</Content></Col>
        <Col xs={2}><Content>3</Content></Col>
        <Col xs={2}><Content>4</Content></Col>
        <Col xs={2}><Content>5</Content></Col>
        <Col xs={2}><Content>6</Content></Col>
      </Row>
    </Grid>
