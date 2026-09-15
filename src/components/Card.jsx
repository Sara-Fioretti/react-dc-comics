function Card({ title, imgUrl }) {
    return(
    <div className="card bg-dark col-2 g-4" style={{width: "9 rem"}}>
        <img src={imgUrl} className="card-img-top img-fluid rounded-0 text-center" style={{width:"150px", height:"150px", objectFit:"cover"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-white">{title}</h5>
            </div>
    </div>
    )
};

export default Card;