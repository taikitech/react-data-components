'use strict';

var { sort, filter } = require('./utils');
var _ = require('lodash');

var containsIgnoreCase = function(a, b) {
  a = (a + '').toLowerCase().trim();
  b = (b + '').toLowerCase().trim();
  return b.indexOf(a) >= 0;
};

module.exports = {

  getInitialState() {
    return {
      // Clone the initialData.
      data: this.props.initialData.slice(0),
      sortBy: this.props.initialSortBy,
      filterValues: {},
      currentPage: 0,
      pageLength: this.props.initialPageLength
    };
  },

  getDefaultProps() {
    return {
      initialPageLength: 10,
      pageLengthOptions: [ 5, 10, 20 ],
      filters: {
        globalSearch: {
          filter: containsIgnoreCase
        }
      }
    };
  },

  componentWillMount() {
    // Do the initial sorting if specified.
    var {sortBy, data} = this.state;
    if (sortBy && data.length > 0) {
      var type = _.find(this.props.columns, { 'prop': sortBy.prop }).type;
      this.setState({ data: sort(sortBy, data, type) });
    }
  },

  componentWillReceiveProps(nextProps) {
    if(this.state.filterValues.globalSearch) {
      var {filterValues, sortBy} = this.state;
      var {initialData, filters} = nextProps;

      var newData = filter(filters, filterValues, initialData);
      newData = sort(sortBy, newData);
      this.setState({
        data: newData,
        filterValues: filterValues,
        currentPage: 0
      });
    }
  },

  onSort(sortBy, type) {
    this.setState({
      sortBy: sortBy,
      data: sort(sortBy, this.state.data, type)
    });
  },

  onFilter(filterName, filterValue) {
    var {filterValues, sortBy} = this.state;
    var {initialData, filters, columns} = this.props;
    var type = _.find(columns, { 'prop': sortBy.prop }).type;

    filterValues[filterName] = filterValue;
    var newData = filter.call(this, filters, filterValues, initialData);
    newData = sort(sortBy, newData, type);

    this.setState({
      data: newData,
      filterValues: filterValues,
      currentPage: 0
    });
  },

  // Pagination
  buildPage() {
    var {data, currentPage, pageLength} = this.state;
    var start = pageLength * currentPage;

    return {
      data: data.slice(start, start + pageLength),
      currentPage: currentPage,
      totalPages: Math.ceil(data.length / pageLength)
    };
  },

  onChangePage(pageNumber) {
    this.setState({ currentPage: pageNumber });
  },

  onPageLengthChange(value) {
    var newPageLength = +value;
    var {currentPage, pageLength} = this.state;
    var newPage = Math.floor((currentPage * pageLength) / newPageLength);

    this.setState({
      pageLength: newPageLength,
      currentPage: newPage
    });
  }

};
