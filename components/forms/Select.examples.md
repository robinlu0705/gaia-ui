Selects are 100% width by default; Use Grid for layout.

    class Wrap extends React.Component {
      constructor() {
        super();
        this.handleChangeMonth = this.handleChangeMonth.bind(this);
        this.state = {
          month: 1
        };
      }

      handleChangeMonth(month) {
        this.setState({
          month: parseInt(month) - 1
        });
      }

      render() {
        const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthOption = Array.from({length: 12}, (v, k) => k + 1).map((val) => {
          return {val: val, text: monthList[val - 1]};
        });

        return (
          <Select defaultValue="1" option={monthOption} onChange={this.handleChangeMonth}>
          </Select>
        );
      }
    }

    <Wrap />
