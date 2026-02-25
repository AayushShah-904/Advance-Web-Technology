const getLogClass = (log) => {
  const l = log.toLowerCase();
  if (l.includes('added')) return 'log-add';
  if (l.includes('removed')) return 'log-remove';
  if (l.includes('checkout')) return 'log-checkout';
  if (l.includes('joined')) return 'log-login';
  if (l.includes('session')) return 'log-logout';
  return '';
};

const stripPrefix = (log) => log.replace(/^Event:\s*/i, '');

export const EventSummary = ({ logs, total }) => (
  <>
    <div className="revenue-badge">
      <span className="revenue-label">💰 Total Revenue</span>
      <span className="revenue-value">Rs.{total}</span>
    </div>

    {logs.length === 0 ? (
      <p className="log-empty">No activity yet. Start shopping!</p>
    ) : (
      <div className="log-list">
        {[...logs].reverse().map((log, i) => (
          <div key={i} className={`log-entry ${getLogClass(log)}`}>
            <span className="log-dot" />
            {stripPrefix(log)}
          </div>
        ))}
      </div>
    )}
  </>
);