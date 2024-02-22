
// import add from '../../Utils/calculate';
import { add, multiply, divideTheFirstNumberByTheScondNumber
     as divide } from '../../Utils/calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css'

const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first, second);
    const mult = multiply(first, second);
    const vagg = divide(first, second);


    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;