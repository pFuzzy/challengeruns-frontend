import React from 'react';
import { Link } from 'react-router-dom';
import { Gametitle, Styledgamenav } from '../styled-components/GamePage';

const Gamenavbar = (props) => {
  const categories = [];

  const changeCategory = (e) => {
    props.setCategory(e.target.value);
  };

  return (
    <Styledgamenav>
      <Gametitle>{props.gametitle}</Gametitle>
      <select
        defaultValue={'default'}
        id='selectCategory'
        onChange={changeCategory}
      >
        <option disabled hidden value='default'>
          Select categories
        </option>
        <option>All</option>
        {props.runs.map((run) => {
          if (run.category in categories) {
            return null;
          }
          categories.push(run.category);
          return <option key={run.id}>{run.category}</option>;
        })}
      </select>
      <Link to='/games'>Back to games</Link>
    </Styledgamenav>
  );
};
export default Gamenavbar;
