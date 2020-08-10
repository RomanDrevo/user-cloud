import React from 'react';
import style from './PageLayout.module.scss';
import { Layout } from 'antd';

const PageLayout = ({ children }) => {
  return (
      <Layout className={style['page-layout-wrapper']} >
        {children}
      </Layout>

  );
};

export default PageLayout;

