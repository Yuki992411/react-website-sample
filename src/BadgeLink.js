import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BadgeLink({
  _href,
  _badge_link_name,
  _is_oldstandard = true
}) {
  return (
    <>
      <a href={_href} target="_brank"
        className={`badge rounded-pill text-dark ${_is_oldstandard ? 'bg-info'
        : 'bg-warning'}`}
        style={{'textDecoration': 'none'}}
      >
        {_badge_link_name}
      </a>
      {' '}
    </>
  )
}

export default BadgeLink
