/* eslint-disable react/prop-types */

import "./Card.css";
export function Card(props) {
  return (
    <div className="card">
      {props.english}
      <button>Turn</button>
    </div>
  );
}
