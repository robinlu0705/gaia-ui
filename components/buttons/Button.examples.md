Buttons are 100% width by default; Use Grid for layout.

    let style = { width: 'auto', margin: '0 10px' };
    
    <div>
      <Button style={style}>default</Button>
      <Button style={style} skin="primary">primary</Button>
      <Button style={style} skin="contrast">contrast</Button>
      <Button style={style} skin="secondary">secondary</Button>
      <Button style={style} skin="tertiary">tertiary</Button>
    </div>