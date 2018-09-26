import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();//async, take time
  }

  renderItem({ item }) {
    console.log(item);
    return <ListItem employee={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};
//val has all the atributes from employee "name, phone, shift"
//so, val is like {shift: 'monday', naome: 'lucas', ...}
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
