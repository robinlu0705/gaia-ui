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

    <Form validation={validation} validationError={validationError}>
      <Input style={{ width: '250px', marginRight: '20px' }} name='input1' placeholder="enter some numbers" />
      <Input style={{ width: '250px', marginRight: '20px' }} name='input2' placeholder="no longer than 4" />
      <Submit style={{ width: 'auto' }} value="submit" />
    </Form>
