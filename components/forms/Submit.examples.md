The appearance is the same as [Button](#Button).

Use Submit in Form to trigger validation ([see example](#Form)).

    let style = { width: 'auto', margin: '0 10px' };
    
    <div>
      <Submit style={style} value="default" />
      <Submit style={style} value="primary" skin="primary" />
      <Submit style={style} value="contrast" skin="contrast" />
      <Submit style={style} value="secondary" skin="secondary" />
      <Submit style={style} value="tertiary" skin="tertiary" />
    </div>