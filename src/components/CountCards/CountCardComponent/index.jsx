const CountCardComponent = ({ data, index }) => {
  return (
    <div
      className="card p-2 w-100"
      key={index}
      style={{ border: 0, boxShadow: "0 3px 9px 0 rgb(169 184 200 / 15%)" }}
    >
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h2 className="card-title me-3 mb-0">{data.title}</h2>
          {data.status && (
            <span
              className="bg-success px-2 text-white rounded-pill"
              style={{ fontSize: "15px" }}
            >
              {data.status}
            </span>
          )}
        </div>
        <p className="card-text mt-2 text-secondary fw-medium">{data.text}</p>
      </div>
    </div>
  );
};

export default CountCardComponent;