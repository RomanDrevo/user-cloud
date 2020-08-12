import React from 'react';
import {CloudOutlined} from '@ant-design/icons';
import style from './Logo.module.scss';

const Logo = () => {
    return(
        <div className={style['logo-wrapper']}>
            <CloudOutlined />
            <div className='dashed' />
            <div className='logo-text'>UserCloud</div>
        </div>
    );
};

export default Logo;
