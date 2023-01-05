import { countCardData } from "../../data"

const CountCardComponent = () => {
    return(
        <div>
        {countCardData.map((data, index) => (
            <CountCardComponent 
                data={data}
                key={index}
            />
        ))}
        </div>
    )
}

export default CountCardComponent;