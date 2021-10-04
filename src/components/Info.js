import '../styles/Info.css';
import { useSelector } from "react-redux";

function Info() {

    const formReducer = useSelector(state => state.formReducer)

    return (
        <div className="info">
            {
                formReducer.status === true ?
                    <div>
                        <p><small>Name:</small> {formReducer.name}</p>
                        <p><small>Family:</small> {formReducer.family}</p>
                        <p><small>Age:</small> {formReducer.age}</p>
                        <p><small>Gender:</small> {formReducer.gender}</p>
                    </div>
                :
                    ''
            }
        </div>
    )
}

export default Info;
