import comics from "../comics";
import Card from "./Card"

function ProductList() {
    return (
        <div className=" bg-dark">
            <div className="container my-5 col-10 text-center">
                <div className="text-start " style={{transform:"translateY(-70px)"}}>
                    <a href="#" className="btn btn-primary border-2 text-uppercase fw-bold px-3 py-2 text-white  rounded-0">
                        CURRENT SERIES
                    </a>
                </div>
                <div className="row text-white">
                    {comics.map((comic) => (
                        <Card
                            key={comic.id}
                            imgUrl={comic.thumb}
                            title={comic.title}>
                        </Card>
                    ))}
                </div>
                <div className="text-center ">
                    <a href="#" className="btn btn-primary border-2 text-uppercase fw-bold px-3 py-2 text-white  rounded-0">
                        LOAD MORE
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ProductList;