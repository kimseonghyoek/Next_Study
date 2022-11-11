import {} from 'isomorphic-unfetch';
import React from 'react';
import Profile from '../../components/Profile';

const name = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <>
      <Profile user={user} />
    </>
  )
}
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