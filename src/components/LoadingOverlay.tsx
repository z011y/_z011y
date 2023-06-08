import { CSSProperties, ReactNode } from 'react';

type LoadingOverlayProps = {
  isLoading: boolean;
  style: CSSProperties | undefined;
  children: ReactNode;
};

function LoadingOverlay({ isLoading, style, children }: LoadingOverlayProps) {
  return (
    <div className="fill-parent" style={{ ...style }}>
      {isLoading ? <div className="glisten fill" /> : null}
      {children}
    </div>
  );
}

export default LoadingOverlay;
