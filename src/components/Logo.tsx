import { useContext, SVGProps } from 'react';

import { ThemeContext } from '../contexts/theme';

function Logo(props: SVGProps<SVGSVGElement>) {
  const { theme } = useContext(ThemeContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35px"
      height="35px"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <rect
          width={35}
          height={35}
          fill={theme === 'dark' ? '#161616' : '#f3f3f3'}
          rx={17.5}
        />
        <path
          stroke="#8D8C8B"
          strokeWidth={3}
          d="M15.984 15c1.5 1 5.1 7-1 10.5-6.453 3.703-1.484 8-1.484 9.5"
        />
        <path
          fill="#849DFF"
          stroke="#000"
          d="M11 9.5c4.8 4.4 10 1.833 13 0-.667-2.333-3-5.5-7-5.5-3 0-5.333 3.167-6 5.5Z"
        />
        <path
          fill="#fff"
          stroke="#000"
          d="M4.5 17c1-5.5 4.836-9.146 6.67-8.98.5.167 1.4.8 1 2C10.57 13.62 7.5 20 5.5 19c-1.5-.5-1.167-1.333-1-2Z"
        />
        <path
          fill="#fff"
          stroke="#000"
          d="M8 18c.916-6.5 2.919-8.559 4.748-8.768.523.062 1.533.5 1.385 1.756C13.297 14.838 12 17.745 10 19.5c-1 0-2.184-.193-2-1.5ZM31 17c-3.477-7.006-5.722-9.146-7.718-8.98-1.089.091-1.524.798-1.089 1.995 1.742 3.59 5.807 9.485 7.718 8.98 1.589-.495 1.582-1 1.09-1.995Z"
        />
        <path
          fill="#fff"
          stroke="#000"
          d="M26.5 19.5c-1-6-3.769-9.168-5.44-9.94-.516-.106-1.612-.007-1.866 1.232C18.78 14.71 23 19.5 24.376 20.959 25.5 21 26 20.5 26.5 19.5ZM14.5 21c2.5-3.5 2.237-9.19 1.602-10.918-.29-.44-1.136-1.145-2.191-.448C10.848 12.111 12 18.5 12 20.5c.31 1.16 1.9.834 2.5.5Z"
        />
        <path
          fill="#fff"
          stroke="#000"
          d="M21.648 22.5c.5-4.134-1.591-11.016-2.652-12.52-.394-.35-1.393-.813-2.232.133-2.318 3.186.88 10.572 1.736 12.387.6 1.04 3.013 1.114 3.148 0Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={0.5}
          d="M18 10c-.5 2.5 1 5 1 7M15 10c-1 2-1 3.5-1 5M13 10c-1 2-2.5 3.5-2.5 5M11.5 9c-1.5.5-3 2.5-4 4M23 8.5c1.5.5 3 4 4 5.5M20 10c1.5.5 2.5 3.5 3.5 5"
        />
      </g>
      <defs>
        <clipPath id="a">
          <rect width={35} height={35} fill="#fff" rx={17.5} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Logo;
