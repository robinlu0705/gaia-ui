    let validation = {
      'input1': {
        required: function(input) {
          if (input && input !== '') {
            return true;
          }
          return false
        },
        num: function(input) {
          return !isNaN(input)
        }
      },
      'input2': {
        required: function(input) {
          if (input && input !== '') {
            return true;
          }
          return false
        },
        maxLength: function(input) {
          return (input ? input.length < 5 : true)
        }
      }
    };

    let validationError = {
      'input1': {
        required: 'required!',
        num: 'only numbers!'
      },
      'input2': {
        required: 'required!',
        maxLength: 'too long'
      }
    };

    <Grid fluid={true}>
      <Row>
        <Form validation={validation} validationError={validationError}>
          <Col sm={12} md={5}>
            <Input name='input1' placeholder="enter some numbers" />
          </Col>
          <Col sm={12} md={5}>
            <Input name='input2' placeholder="no longer than 4" />
          </Col>
          <Col sm={12} md={2}>
            <Submit />
          </Col>
        </Form>
      </Row>
    </Grid>
