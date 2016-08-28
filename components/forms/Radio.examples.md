Radio is a stateless element.

    let style = { margin: '10px 0' };
    let options1 = ['test1', 'test2', 'test3'];
    let options2 = ['test1', 'test2', 'test3'];

    let Wrap = React.createClass({
      getInitialState: function() {
        return {
          radio1Checked: 'test1',
          radio2Checked: 'test2'
        };
      },

      render: function() {
        return (
          <div>
            <div style={style}>
              <p>Group 1</p>
              <Radio
                choices={options1}
                radioName="radio3"
                checked={this.state.radio1Checked}
                onInputChange={(newChecked) => this.setState({ radio1Checked: newChecked })}
              />
            </div>
            <div style={style}>
              <p>Group 2</p>
              <Radio
                choices={options2}
                radioName="radio4"
                checked={this.state.radio2Checked}
                disabled={['test1']}
                onInputChange={(newChecked) => this.setState({ radio2Checked: newChecked })}
              />
            </div>
          </div>
        );
      }
    });

    <Wrap />
