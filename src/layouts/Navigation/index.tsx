import React, { useMemo } from 'react';
import Link from 'next/link';

import './index.scss';
import { useLang } from '@/hooks/router';
import { ROUTE_PREFIX } from '@/config';

const Navigation = () => {
  const lang = useLang();

  const linkNames = useMemo(() => {
    return lang === 'zh-CN'
      ? {
          home: '首页',
          api: 'API',
          demo: '示例',
          github: '源码',
          syntax: '语法',
          contrast: '对比',
          about: '关于',
          lang: 'English',
          langIcon: '#med-icon-en',
        }
      : {
          home: 'Home',
          api: 'API',
          demo: 'Demo',
          github: 'Github',
          syntax: 'Syntax',
          contrast: 'Contrast',
          about: 'About',
          lang: '中文',
          langIcon: '#med-icon-cn',
        };
  }, [lang]);

  const routePrefix = useMemo(() => {
    return `${ROUTE_PREFIX}/${lang}`;
  }, [lang]);

  return (
    <ul className="nav-list">
      <li className="nav-item">
        <Link href={routePrefix}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#med-icon-homepage"></use>
          </svg>
          {linkNames.home}
        </Link>
      </li>
      <li className="nav-item">
        <Link href={`${routePrefix}/api`}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#med-icon-api"></use>
          </svg>
          {linkNames.api}
        </Link>
      </li>
      <li className="nav-item">
        <Link href={`${routePrefix}/demo`}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#med-icon-example"></use>
          </svg>
          {linkNames.demo}
        </Link>
      </li>
      <li className="nav-item">
        <Link href="https://github.com/imzbf/md-editor-rt" target="_blank">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#med-icon-github"></use>
          </svg>
          {linkNames.github}
        </Link>
      </li>
      <li className="nav-item">
        <Link href={`${routePrefix}/syntax`}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#med-icon-syntax"></use>
          </svg>
          {linkNames.syntax}
        </Link>
      </li>
      <li className="nav-item">
        <Link href={`${routePrefix}/contrast`}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#med-icon-question"></use>
          </svg>
          {linkNames.contrast}
        </Link>
      </li>
      <li className="nav-item">
        <Link href={`${routePrefix}/about`}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#med-icon-about"></use>
          </svg>
          {linkNames.about}
        </Link>
      </li>
      <li className="nav-item">
        <Link href={`${ROUTE_PREFIX}/${lang === 'en-US' ? 'zh-CN' : 'en-US'}`}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={linkNames.langIcon}></use>
          </svg>
          {linkNames.lang}
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
