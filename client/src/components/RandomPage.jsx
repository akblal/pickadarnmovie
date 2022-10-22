import React from 'react';

function FinalPage ({ changePage, user }) {

  return (
    <div>

      {console.log (user.user.email, 'in final!')}
      {user.user.email}

    </div>
  )

};

export default FinalPage