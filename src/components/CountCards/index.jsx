import { countCardData } from "../../data";
import CountCardComponent from "./CountCardComponent";

const CountCardsSection = () => {
  return (
    <div className="d-flex mt-4 align-items-center justify-content-center">
      <div className="row w-100" style={{ rowGap: "1rem" }}>
        {countCardData.map((data, index) => (
          <div className="col-12 col-md-6 col-xl-3">
            <CountCardComponent data={data} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountCardsSection;