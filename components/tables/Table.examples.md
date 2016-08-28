    let columns = [
      {
        text: 'Order',
        key: 'orderId'
      },
      {
        text: 'Apple',
        key: 'apple'
      },
      {
        text: 'Banana',
        key: 'banana'
      },
      {
        text: 'Peach',
        key: 'peach'
      }
    ];

    let data = [
      {
        orderId: '0001',
        apple: 1,
        banana: 2,
        peach: 3
      },
      {
        orderId: '0002',
        apple: 100,
        banana: 101,
        peach: 102
      },
      {
        orderId: '0003',
        apple: 1000,
        banana: 1001,
        peach: 1002
      }
    ];

    <Table skin="primary" columns={columns} data={data}/>
