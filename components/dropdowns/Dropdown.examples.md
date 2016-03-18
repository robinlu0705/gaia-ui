Dropdowns are 100% width by default; Use Grid for layout.

    let style = { width: '120px', margin: '0 10px' };
    let options = [
      {
        text: 'option_1',
        value: '1'
      },
      {
        text: 'option_2',
        value: '2'
      },
      {
        text: 'option_3',
        value: '3'
      }
    ];

    <div>
      <Dropdown style={style} options={options} value="2" />
      <Dropdown style={style} options={options} value="2" skin="primary" />
      <Dropdown style={style} options={options} value="2" skin="contrast" />
      <Dropdown style={style} options={options} value="2" skin="secondary" />
      <Dropdown style={style} options={options} value="2" skin="tertiary" />
    </div>
