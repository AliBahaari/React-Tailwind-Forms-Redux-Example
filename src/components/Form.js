import '../styles/Form.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sumbitFormAction } from '../redux/slices/formSlice';

function Form(props) {

    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');

    const dispatch = useDispatch();


    const submitForm = (e) => {

        e.preventDefault();

        if (name.length > 2 && family.length > 2 && isNaN(age) === false && age > 4 && (gender==='Male' || gender==='Female')) {

            dispatch(
                sumbitFormAction({
                    name,
                    family,
                    age,
                    gender,
                    status: true
                })
            );

        }
    }

    return (
        <>
            <h2 className="font-bold text-xl text-center mt-10 mb-16">{props.title}</h2>

            <form className="form" onSubmit={submitForm}>
                <input type="text" placeholder="Name..." onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Family..." onChange={(e) => setFamily(e.target.value)} />
                <input type="text" placeholder="Age..." onChange={(e) => setAge(e.target.value)} />

                <div className="gender">
                    <div>
                        <label>Male:</label>
                        <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                    </div>

                    <div>
                        <label>Female:</label>
                        <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                    </div>
                </div>

                <button className="bg-blue-700 px-10 py-4 text-white font-bold">
                    Submit
                </button>
            </form>
        </>
    )
}

export default Form;
