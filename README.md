# react-data-components

DataTable: [Live demo and source](http://jsbin.com/ziyawu/1/).

## Getting started

```sh
npm install slavik-m-react-data-components --save
```

### Using the default implementation

The default implementation includes a filter for case insensitive global search,
pagination and page size.

```javascript
var React = require('react');
var DataTable = require('react-data-components').DataTable;

var columns = [
  { title: 'Name', prop: 'name', type: 'ELEMENT_STRING' },
  { title: 'City', prop: 'city', type: 'STRING' },
  { title: 'Address', prop: 'address', type: 'STRING' },
  { title: 'Phone', prop: 'phone', type: 'NUMBER' }
];

var data = [
  { id: 1, name: <a href="profile/1" sortValue="Victor"><span>Victor</span></a>, city: 'Kiev', address: 'some 
  address',  phone: '380634988888' },
  { id: 2, name: <a href="profile/2" sortValue="Ambassador"><span>Ambassador</span></a>, city: 'Kiev', address: 'some 
  address',  phone: '380634988888' },
  // It also supports arrays
  // [ 'name value', 'city value', 'address value', 'phone value' ]
];

React.render((
    <DataTable
      className="container"
      keys={[ 'id' ]}
      columns={columns}
      initialData={data}
      initialPageLength={5}
      initialSortBy={{ prop: 'name', order: 'ascending' }}
      pageLengthOptions={[ 5, 20, 50 ]}
    />
  ), document.body);
```

See [complete example](example/table/main.js), see [Flux example](example/flux/).

## DataMixin options

### `keys: Array<string | number>`
Properties that make each row unique, e.g. an id.

### `columns: Array<ColumnOption>`
See `Table` column options.

### `pageLengthOptions: Array<number>`
### `initialData: Array<object | Array<any>>`
### `initialPageLength: number`
### `initialSortBy: { prop: string | number, order: string }`

## Table column options

### `title: string`
The title to display on the header.

### `prop: string | number`
The name of the property or index on the data.

### `type: string[STRING|NUMBER|ELEMENT_STRING|ELEMENT_NUMBER]`
ELEMENT_STRING or ELEMENT_NUMBER sort by React components. 
ReactElement need provide prop - "sortValue" to sort by this value;
The title to display on the header.

### `render: (val: any, row: any) => any`
Function to render a different component.

### `className: string | (val: any, row: any) => string`
Class name for the td.

### `defaultContent: string`
### `sortable: boolean`
### `width: string | number`
