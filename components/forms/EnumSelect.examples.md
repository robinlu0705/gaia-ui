EnumSelect is a stateless element. Wrap it with an element holding the state of selected value for interaction.

An unique name must be provided.

direction: row

    let options = [
      { value: 'option1', text: 'test1' },
      { value: 'option2', text: 'test2' },
      { value: 'option3', text: 'test3' }
    ];

    class Wrap extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          selectedValue: options[0].value
        };

        this.handleChange = this.handleChange.bind(this);
      }
      
      render() {
        return <EnumSelect skin="contrast" name="some-select" options={options} value={this.state.selectedValue} onChange={this.handleChange} />;
      }

      handleChange(value) {
        this.setState({
          selectedValue: value
        });
      }
    };

    <Wrap />

direction: column

    let options = [
      { value: 'option1', text: 'test1' },
      { value: 'option2', text: 'test2' },
      { value: 'option3', text: 'test3' }
    ];

    class Wrap extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          selectedValue: options[0].value
        };

        this.handleChange = this.handleChange.bind(this);
      }
      
      render() {
        return <EnumSelect direction="column" skin="contrast" name="some-select2" options={options} value={this.state.selectedValue} onChange={this.handleChange} />;
      }

      handleChange(value) {
        this.setState({
          selectedValue: value
        });
      }
    };

    <Wrap />
