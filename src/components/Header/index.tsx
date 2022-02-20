import React, { FC, useCallback } from 'react';
import styles from './style.module.less';
import { useLocation, useNavigate } from 'react-router';
import { useMemoizedFn } from 'ahooks';
import { headerPath } from '@/components/Header/consts';

const Header: FC = () => {
  const history = useNavigate();
  const location = useLocation();

  const push = useMemoizedFn((path) => {
    history(path);
  });

  // 是否高亮
  const getAction = useCallback(currentPath => location.pathname.includes(currentPath), [location.pathname]);

  return (
    <header className={styles.header}>
      {headerPath.map(item => {
        return (
          <span
            className={getAction(item.path) ? styles.action : ''}
            key={item.path}
            onClick={() => push(item.path)}
          >
            {item.name}
          </span>
        );
      })}
    </header>
  );
};

export default Header;
