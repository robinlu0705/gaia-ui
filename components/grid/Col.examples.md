## Offset

    let content = (
      <div
        style={{
          backgroundColor: '#007FFF',
          padding: '10px',
          marginBottom: '10px'
        }}
      />
    );

    <Grid fluid={true}>
      <Row>
        <Col xs={1} xsOffset={11}>{content}</Col>
      </Row>
      <Row>
        <Col xs={2} xsOffset={10}>{content}</Col>
      </Row>
      <Row>
        <Col xs={3} xsOffset={9}>{content}</Col>
      </Row>
    </Grid>

## Reordering

### first

    let rowStyle = {
      backgroundColor: '#007FFF',
      padding: '10px'
    };

    let Content = (props) => {
      return (
        <div
          style={{
            backgroundColor: '#06C',
            padding: '10px',
            color: 'white',
            textAlign: 'center'
          }}
        >
          {props.children}
        </div>
      )
    };

    let Highlighted = (props) => {
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
      <Row style={rowStyle}>
        <Col xs={2}><Content>1</Content></Col>
        <Col xs={2}><Content>2</Content></Col>
        <Col xs={2}><Content>3</Content></Col>
        <Col xs={2}><Content>4</Content></Col>
        <Col xs={2}><Content>5</Content></Col>
        <Col xs={2} first="xs"><Highlighted>6</Highlighted></Col>
      </Row>
    </Grid>

### last

    let rowStyle = {
      backgroundColor: '#007FFF',
      padding: '10px'
    };

    let Content = (props) => {
      return (
        <div
          style={{
            backgroundColor: '#06C',
            padding: '10px',
            color: 'white',
            textAlign: 'center'
          }}
        >
          {props.children}
        </div>
      )
    };

    let Highlighted = (props) => {
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
      <Row style={rowStyle}>
        <Col xs={2}><Content>1</Content></Col>
        <Col xs={2}><Content>2</Content></Col>
        <Col xs={2}><Content>3</Content></Col>
        <Col xs={2}><Content>4</Content></Col>
        <Col xs={2}><Content>5</Content></Col>
        <Col xs={2} last="xs"><Highlighted>6</Highlighted></Col>
      </Row>
    </Grid>
