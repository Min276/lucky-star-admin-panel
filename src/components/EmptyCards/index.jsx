import { emptyCardData } from "../../data";

const EmptyCards = () => {
  return (
    <div className="d-flex mt-4 align-items-center justify-content-center">
      <div className="row w-100" style={{ rowGap: "1.5rem" }}>
       { emptyCardData.map((data, index) => (
        <div className="col-12 col-lg-6 col-xxl-4" key={index}>
          <div
            className="card"
            key={index}
            style={{
              border: 0,
              boxShadow: "0 3px 9px 0 rgb(169 184 200 / 15%)",
              height: "25rem",
            }}
          >
            <div className="card-body">
              <h2 className="card-title h4">{data.text}</h2>
              <p className="card-text">{data.text}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default EmptyCards;