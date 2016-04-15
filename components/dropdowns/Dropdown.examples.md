Dropdowns are 100% width by default; Use Grid for layout.

    let style = { width: '120px', margin: '0 10px' };
    let options = [
      {
        text: 'facebook',
        action: '#1'
      },
      {
        text: 'twitter',
        action: '#2'
      },
      {
        text: 'alert',
        action() {
          alert('some action')
        }
      }
    ];

    <div>
      <Dropdown caption="Share" style={style} options={options} />
      <Dropdown caption="Share" style={style} options={options} skin="primary" />
      <Dropdown caption="Share" style={style} options={options} skin="contrast" />
      <Dropdown caption="Share" style={style} options={options} skin="secondary" />
      <Dropdown caption="Share" style={style} options={options} skin="tertiary" />
    </div>
