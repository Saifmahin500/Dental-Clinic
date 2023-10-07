import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {id,img,title,description} =card;
    return (
        <div>
              <div >
             <Link to={`/card/${id}`}>
        <div className="card bg-slate-400">
            <figure>
                <img className="w-full h-[360px]" src={img} alt="Shoes" /></figure>
            <div className="p-5 text-center">
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <h2 className="card-title ">
                    {description}
                </h2>
                <br />
                <button className="btn  btn-error ">Details</button>
                
            </div>

        </div>
        
       </Link>
          </div>
        </div>
    );
};

export default Card;