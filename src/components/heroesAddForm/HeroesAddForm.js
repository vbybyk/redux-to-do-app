

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useHttp } from '../../hooks/http.hook';
import { useCallback, useState} from 'react';
import { useFormik } from 'formik';
import { heroesAddNewItem } from '../../components/heroesList/heroesSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const HeroesAddForm = () => {
    const [newFormik, setNewFormik] = useState({});
    const {request} = useHttp();
    const dispatch = useDispatch();

    const onCreateHero = useCallback((values) => {
        // dispatch(heroesAddNewItem(values))
        request(`http://localhost:3001/heroes`, "POST", JSON.stringify(values))
                .then(data => console.log(data, 'Created'))
                .then(() => dispatch(heroesAddNewItem(values)))
                .catch(err => console.log(err));
    }, [request])

     
    const formik = useFormik({
                initialValues: {
                    name: '',
                    description: '',
                    element: '',
                    // id: newId 
                },
                onSubmit: (values, {resetForm}) => {
                            console.log(values)
                            formikPlusId(values)
                            resetForm();
                            
                           }
   })

   const formikPlusId = (values) => {
       const newValues = {
           ...values,
           id: uuidv4()
       }
       setNewFormik(newValues);
       onCreateHero(newValues);
       console.log(newValues)
   }

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    onChange={formik.handleChange}
                    value={formik.values.name}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="description" 
                    className="form-control" 
                    id="description" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    onChange={formik.handleChange}
                    value={formik.values.description}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    onChange={formik.handleChange}
                    value={formik.values.element}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;