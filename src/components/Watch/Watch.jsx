import './Watch.css'
const Watch = ({watch}) => {
    const {name, price, id} = watch;
    return (
        <div className="watches">
            <h3>Watch:{name}</h3>
            <p>price: {price}</p>
            <p>id: {id}</p>

        </div>
    );
};

export default Watch;