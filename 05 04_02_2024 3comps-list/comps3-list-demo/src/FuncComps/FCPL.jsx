import React from 'react';
import PropTypes from 'prop-types';

export default function FCPL(props) {


  let peronsListStr = props.persons.map(
    per =>
      <div key={per.id} >{per.id} -- {per.name} -- {per.grade}</div>
  );

  return (
    <div>FCPL
      {peronsListStr}
    </div>
  )
}

FCPL.propTypes = {
  persons: PropTypes.array.isRequired,
};

