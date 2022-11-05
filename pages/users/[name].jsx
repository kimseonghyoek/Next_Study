import {} from 'isomorphic-unfetch';
import React from 'react';

const name = ({ user }) => {
  const username = user && user.name;
  return <div>{username}</div>
};

name.getInitialProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      console.log(user.name)
      return { user };
    }
    return { props: '아마 유저가 없음' };
  } catch (e) {
    console.log(e);
    return {}
  }
};

export default name;