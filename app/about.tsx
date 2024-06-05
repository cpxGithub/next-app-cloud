// pages/index.js
import React from 'react';

export default function Home({ data }: any) {
  const handle = () => {
    const h1 = document.querySelector('h1');
    if (h1) {
      h1.style.color = 'red';
    }
  };
  return (
    <div>
      <h1 onClick={handle}>Home Page</h1>
      <p>{data}</p>
    </div>
  );
}

export async function getStaticProps() {
  // 获取数据，可以是从 API 或文件系统中获取
  const res = await fetch('https://xtool.zendesk.com/embeddable/config');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}