const CountCardComponent = ({data, index}) => {
    return(
        <div className="card" key={index}>
           <div className="card-body">
             <div className="d-flex align-items-center">
             <h2 className="card-title">
                {data.title}
             </h2>
             <span className="bg-primary rounded-pill">
                {data.status}
             </span>
             </div>
             <p className="card-text">
                {data.text}
             </p>
           </div>
        </div>
    )
}

export default CountCardComponent;