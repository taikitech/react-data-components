'use strict';

var React = require('react');
var Table = require('./Table');
var Pagination = require('./Pagination');
var SelectField = require('./SelectField');
var SearchField = require('./SearchField');
var Counter = require('./Counter');

var DataMixin = require('./DataMixin');

var DataTable = React.createClass({

  mixins: [ DataMixin ],

  render() {
    var page = this.buildPage();
    return (
      <div className={this.props.className}>
        <div className={"row table-options " + (this.props.options === false ? 'hide' : '')} >
          <div className="col-xs-4">
            <SelectField
              id="page-menu"
              label="Page size:"
              value={this.state.pageLength}
              options={this.props.pageLengthOptions}
              onChange={this.onPageLengthChange}
            />
          </div>
          <div className="col-xs-8">
            <SearchField
              id="search-field"
              label="Search:"
              value={this.state.filterValues.globalSearch}
              onChange={this.onFilter.bind(this, 'globalSearch')}
              />
          </div>
        </div>
        <Table
          className="table table-bordered"
          dataArray={page.data}
          columns={this.props.columns}
          keys={this.props.keys}
          sortBy={this.state.sortBy}
          onSort={this.onSort}
        />
        <div className="row">
          <div className="col-xs-6">
            <Counter
              showing={this.state.pageLength * page.currentPage + 1}
              to={this.state.pageLength * page.currentPage + page.data.length}
              count={this.state.data.length}
              />
          </div>
          <div className="col-xs-6">
            <Pagination
              className="pagination pull-right"
              currentPage={page.currentPage}
              totalPages={page.totalPages}
              onChangePage={this.onChangePage}
              />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DataTable;
