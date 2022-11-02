import {} from 'isomorphic-unfetch';
import React from 'react';

const name = ({ user }) => {
  const username = user && user.name;
  return <div>{username}</div>
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user }};
    }
    return { props: '아마 유저가 없음' };
  } catch (e) {
    console.log(e);
    return { props: {} }
  }
};

export default name;