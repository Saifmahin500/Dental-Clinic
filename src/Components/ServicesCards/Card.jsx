import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {id,img,title,description,price} =card;

    const handleAddCard = () =>{
        console.log("done");
        // Swal.fire(
        //     'Good job!',
        //     'You clicked the button!',
        //     'success'
        //   )
    }
    return (
        <div>
              <div >
             <Link to={`/card/${id}`}>
        <div className="card bg-slate-400">
            <figure>
                <img className="w-full h-[360px]" src={img} alt="Shoes" /></figure>
            <div className="p-5 text-center">
                <h2 className="text-3xl text-white font-bold">{title}</h2>
                <h2 className="card-title  ">
                    {description}
                </h2>
                <p className="text-xl font-medium mt-2">Service Price :{price}</p>
                <br />
                <button onClick={handleAddCard} className="btn  btn-error text-white">Details</button>
                
            </div>

        </div>
        
       </Link>
          </div>
        </div>
    );
};

export default Card;