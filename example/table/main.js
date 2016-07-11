require('../../css/table-twbs.css');

var React = require('react');
var { DataTable } = require('react-data-components');
var d3 = require('d3');
var _ = require('lodash');

var App = React.createClass({
  getInitialState(){
    /*var data = this.props.rows.map((item, i) => {
     item.ukey = i;
     return item;
     });*/
    return {
      tableColumns: this.props.cols,
      data: this.props.data,
      loading: 'loading false'
    }
  },

  handleChange(data) {
    console.log(data.length);
    this.setState({
      data: data
    });
    // console.log('Change', data);
  },

  handleClick() {
    this.setState({
      data: [ {
        id: 1,
        name: 'Package 2',
        descr: 'Some descr ess',
        tags: ['pack 1', 'some another tag'],
        display_url: 'http://some.com',
        ad_modality: ['1', '2'],
        ad_sizes: ['300x200'],
        sites: ['123', '22'],
        zones: ['123', '22']
      }, {
        id: 2,
        name: 'Package 654',
        descr: 'Some descr df',
        tags: ['pack 1', 'some another tag'],
        display_url: 'http://some.com',
        ad_modality: ['Desktop Video'],
        ad_sizes: ['300x200'],
        sites: ['123', '22'],
        zones: ['123', '22']
      }]
    });
  },

  handleState() {
    this.setState({
      loading: 'loading true'
    });
  },

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Change data</button>
        <button onClick={this.handleState}>Change state</button>

        <div>{this.state.loading}</div>
        <DataTable
          className="container"
          keys={[ 'id' ]}
          columns={this.state.tableColumns}
          initialData={this.state.data}
          initialPageLength={5}
          initialSortBy={{ prop: 'name', order: 'ascending' }}
          pageLengthOptions={[ 5, 20, 50 ]}
          onChange={this.handleChange}
        />
      </div>
    );
  }  
});

const data = [
  {
    id: 0,
    name: 'Package 1',
    descr: 'Some descr',
    tags: ['pack 1', 'some another tag'],
    display_url: 'http://some.com',
    ad_modality: ['1', '2'],
    ad_sizes: ['300x200'],
    sites: ['123', '22'],
    zones: ['123', '22']
  }, {
    id: 1,
    name: 'Package 2',
    descr: 'Some descr ess',
    tags: ['pack 1', 'some another tag'],
    display_url: 'http://some.com',
    ad_modality: ['1', '2'],
    ad_sizes: ['300x200'],
    sites: ['123', '22'],
    zones: ['123', '22']
  }, {
    id: 2,
    name: 'Package 654',
    descr: 'Some descr df',
    tags: ['pack 1', 'some another tag'],
    display_url: 'http://some.com',
    ad_modality: ['Desktop Video'],
    ad_sizes: ['300x200'],
    sites: ['123', '22'],
    zones: ['123', '22']
  }
];

const COLUMNS = [
  {title: 'Package Name', prop: 'name', type: 'STRING'},
  {title: 'Description', prop: 'descr', type: 'STRING'},
  {title: 'Ad Modality', prop: 'ad_modality', type: 'STRING'},
  {title: 'Ad Sizes', prop: 'ad_sizes', type: 'STRING'},
  {title: 'Sites', prop: 'sites', type: 'STRING'},
  {title: 'Zones', prop: 'zones', type: 'STRING'},
  {title: 'Actions', prop: 'actions', sorted: false, type: 'STRING'}
];

React.render(<App data={data} cols={COLUMNS}/>, document.body);