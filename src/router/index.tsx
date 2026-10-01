import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface RouterContextType {
  pathname: string;
  navigate: (to: string, options?: { replace?: boolean }) => void;
}

const RouterContext = createContext<RouterContextType>({
  pathname: typeof window !== 'undefined' ? window.location.pathname || '/' : '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const useNavigate = () => {
  const { navigate } = useRouter();
  return navigate;
};

export const useLocation = () => {
  const { pathname } = useRouter();
  return { pathname };
};

export const BrowserRouter: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash;
    if (hash.startsWith('#/')) {
      return hash.slice(1);
    }
    return window.location.pathname || '/';
  };

  const [pathname, setPathname] = useState<string>(getInitialPath);

  useEffect(() => {
    const handleLocation = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/')) {
        setPathname(hash.slice(1));
      } else {
        setPathname(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    let targetPath = to;
    let targetHash = '';

    if (to.includes('#') && !to.startsWith('#/')) {
      const parts = to.split('#');
      targetPath = parts[0] || '/';
      targetHash = '#' + parts[1];
    }

    if (options?.replace) {
      window.history.replaceState({}, '', targetPath + targetHash);
    } else {
      window.history.pushState({}, '', targetPath + targetHash);
    }

    setPathname(targetPath);

    if (targetHash) {
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export interface RouteProps {
  path: string;
  element: ReactNode;
}

export const Route: React.FC<RouteProps> = () => null;

export const Routes: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useRouter();
  const current = pathname === '/' ? '/' : pathname.replace(/\/+$/, '').toLowerCase();

  let matchedElement: ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement<RouteProps>(child)) {
      const routePath = child.props.path === '/' ? '/' : child.props.path.replace(/\/+$/, '').toLowerCase();
      if (routePath === current || (routePath === '*' && !matchedElement)) {
        matchedElement = child.props.element;
      }
    }
  });

  return <>{matchedElement}</>;
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  replace?: boolean;
}

export const Link: React.FC<LinkProps> = ({ to, replace, onClick, children, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to, { replace });
    }
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
