    let columns = [
      {
        text: '訂單編號',
        key: 'orderId'
      },
      {
        text: '蘋果',
        key: 'apple'
      },
      {
        text: '大腸花',
        key: 'banana'
      },
      {
        text: '桃子',
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
      }
    ];

    <Table skin="primary" columns={columns} data={data}/>
