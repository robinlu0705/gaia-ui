ButtonCollections are 100% width by default; Use Grid for layout.

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
      <ButtonCollection caption="Share" style={style} options={options} />
      <ButtonCollection caption="Share" style={style} options={options} skin="primary" />
      <ButtonCollection caption="Share" style={style} options={options} skin="contrast" />
      <ButtonCollection caption="Share" style={style} options={options} skin="secondary" />
      <ButtonCollection caption="Share" style={style} options={options} skin="tertiary" />
    </div>
