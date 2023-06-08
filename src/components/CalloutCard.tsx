import LoadingOverlay from './LoadingOverlay';

type CalloutCardProps = {
  title: string;
  value: number | null;
  isLoading: boolean;
  isFetching: boolean;
};

function CalloutCard({
  title,
  value,
  isLoading,
  isFetching,
}: CalloutCardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <LoadingOverlay
        isLoading={isFetching}
        style={{ borderRadius: 'var(--s0)' }}
      >
        <h2 style={isLoading ? { visibility: 'hidden' } : {}} className="mono">
          {value ?? 'N/A'}
        </h2>
      </LoadingOverlay>
    </div>
  );
}

export default CalloutCard;
