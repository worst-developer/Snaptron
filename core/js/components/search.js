import React from 'react';
import { connect } from 'react-redux';

import { searchNotifications, clearSearch } from '../actions';

export class SearchBar extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.showSearch === false) {
      this.props.clearSearch();
    }
  }

  render() {
    var clearSearchIcon;

    if (this.props.query) {
      clearSearchIcon = (
        <span className="octicon octicon-x" onClick={this.props.clearSearch} />
      );
    }

    return (
      <div className={this.props.showSearch ? 'container-fluid search-bar' : 'container-fluid' }>
        {this.props.showSearch ? (
          <div className="row">
            <div className="col-xs-10">
              <div className="form-group search-wrapper">
                <input
                  autoFocus
                  value={this.props.query}
                  onChange={(evt) => this.props.searchNotifications(evt.target.value)}
                  className="form-control"
                  type="text"
                  placeholder=" Search..." />
              </div>
          </div>
          <div className="col-xs-2">{clearSearchIcon}</div>
        </div>) : null }
      </div>
    );
  }
};


function mapStateToProps(state) {
  return {
    query: state.searchFilter.query
  };
};

export default connect(mapStateToProps, { searchNotifications, clearSearch })(SearchBar);
