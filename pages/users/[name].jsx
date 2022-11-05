import {} from 'isomorphic-unfetch';
import React from 'react';
import css from 'styled-jsx/css';

const style = css`
  h2 {
    margin-left: 20px;
  }
  .user-bio {
    margin-top: 12px;
    font-style: italic;
  }
`;

const name = ({ user }) => {
  const username = user && user.name;
  return <>
    {user ? (
      <div>
        <h2>{user.name}</h2>
        <p className='user-bio'>{user.bio}</p>
      </div>
    ) : (
      <div>유저 정보가 없습니다.</div>
    )}
    <style jsx>{style}</style>
  </>
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