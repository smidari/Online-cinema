import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const TrFilmsAdmin = (props) => (
  <tr>
    <td>{props.id}</td>
    <td>{props.title}</td>
    <td><img src={props.picture} alt={''} /></td>
    <td>{props.description}</td>
    <td>{props.price}</td>
    <td>{props.start}</td>
    <td>{props.end}</td>
    <td>{props.tags}</td>
    <td><Button variant="outline-danger" onClick={() => props.deleteFilm(props.id)}>{props.remove}</Button></td>
  </tr>
);

TrFilmsAdmin.propTypes = {
  deleteFilm: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  tags: PropTypes.string,
  remove: PropTypes.string,
};

export default TrFilmsAdmin;