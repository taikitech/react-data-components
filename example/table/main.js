require('../../css/table-twbs.css');

var React = require('react');
var { DataTable } = require('react-data-components');
var d3 = require('d3');

function buildTable(reqData) {
  var renderMapUrl =
    (val, row) =>
      <a href={`https://www.google.com/maps?q=${row['LAT']},${row['LON']}`}>
        Google Maps
      </a>;

  /*var tableColumns = [
    { title: 'Name', prop: 'NAME' },
    { title: 'City', prop: 'CITY' },
    { title: 'Street address', prop: 'STREET ADDRESS' },
    { title: 'Phone', prop: 'PHONE NUMBER', defaultContent: '<no phone>' },
    { title: 'Map', render: renderMapUrl, className: 'text-center' }
  ];*/

  var tableColumns = [
    { title: 'Hour', prop: 'hour', type: 'ELEMENT_NUMBER'},
    { title: 'Name', prop: 'name', type: 'ELEMENT_STRING'},
    { title: 'City', prop: 'city', type: 'STRING' },
    { title: 'Street address', prop: 'address', type: 'STRING' },
    { title: 'Phone', prop: 'phone', defaultContent: '<no phone>', type: 'NUMBER' }
  ];

  var data = [
    { ukey: 1, hour: <span sortValue={null}></span>, name:  <div sortValue={null}><span></span><span></span></div>, city: 'city value2', address: 'address value', phone: '1,000,000' },
    { ukey: 2, hour: <span sortValue="10,100">10,100</span>,name: <div sortValue="0"><span>0</span><span></span></div>, city: 'city value5', address: 'address value', phone: '9' },
    { ukey: 3, hour: <span sortValue="1,100,100">1,100,100</span>,name: <div sortValue="a"><span>a</span><span></span></div>, city: 'city value1', address: 'address value', phone: '1' },
    { ukey: 4, hour: <span sortValue="60">60</span>,name: <div sortValue="b"><span>b</span><span></span></div>, city: 'city value1', address: 'address value', phone: '300' },
    { ukey: 5, hour: <span sortValue="0">0</span>, name: <div sortValue={null}><span></span><span></span></div>, city: 'city value1', address: 'address value', phone: '500' },
    { ukey: 6, hour: <span sortValue="10">10</span>, name: <div sortValue="cc"><span>cc</span><span></span></div>, city: 'city value6', address: 'address value', phone: '9,999' },
    { ukey: 7, hour: <span sortValue="50">50</span>, name: <div sortValue="xx"><span>xx</span><span></span></div>, city: 'city value6', address: 'address value', phone: '9,999' }
  ];

  return (
    <DataTable
      className="container"
      keys={[ 'ukey' ]}
      columns={tableColumns}
      initialData={data}
      initialPageLength={50}
      initialSortBy={{ prop: 'name', order: 'ascending' }}
      pageLengthOptions={[ 5, 20, 50 ]}
    />
  );
}

d3.csv('/sample_data.csv', function(error, rows) {
  React.render(buildTable(rows), document.body);
});
