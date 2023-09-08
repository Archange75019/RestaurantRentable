import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import styled from 'styled-components';
import './style.css';

const options = [
    {
        label: 'G',
        value: 'G',
    },
    {
        label: 'KG',
        value: 'KG',
    },
    {
        label: 'L',
        value: 'L',
    },
    {
        label: 'ML',
        value: 'ML',
    },
    {
        label: 'CaS',
        value: 'CaS',
    },
    {
        label: 'CaC',
        value: 'CaC',
    },
    {
        label: 'CM',
        value: 'CM',
    },
    {
        label: 'DL',
        value: 'DL',
    },
    {
        label: 'FEUILLES',
        value: 'FEUILLES',
    },
    {
        label: 'PIECE',
        value: 'PIECE',
    },
];

export default function AddPlat({ setIsOpen }) {
    const [ingredients, setIngredients] = useState('');
    const [mesure, setMesure] = useState('');
    const [unit, setUnit] = useState('');
    const [loadingredient, setLoadIngredient] = useState([]);
    const [formData, setFormData] = useState({});

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleInputChangeIngredients = (event) => {
        const { name, value } = event.target;
        setIngredients(value);
    };

    const handleInputChangeMesure = (event) => {
        const { name, value } = event.target;
        setMesure(value);
    };

    const handleInputChangeUnit = (event) => {
        const { name, value } = event.target;
        setUnit(value);
    };

    const loadIngredient = () => {
        setLoadIngredient([
            ...loadingredient,
            {
                ingredients,
                mesure,
                unit,
            },
        ]);
        setIngredients('');
        setMesure('');
        setUnit('');
    };
    const deleteItem = (index) => {
        const updatedIngredients = [...loadingredient];
        updatedIngredients.splice(index, 1); // Remove the item at the specified index
        setLoadIngredient(updatedIngredients);
    }

    const onSubmit = async (data) => {

        var recette = {}
        recette['nomPlat'] = data['nomPlat']
        recette['prixPlat'] = data['prixPlat']
        recette['ingredients'] = [loadingredient]
        console.log(recette)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recette }),
        };

        await fetch('/app/plat', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('data   ', data)
                if (data.success === 'true') {
                    reset();
                    setIsOpen(false);

                }

            })
    };

    return (
        <>
            <form className="formAddProduct" onSubmit={handleSubmit(onSubmit)}>
                <div className="darkBG" onClick={() => setIsOpen(false)} />
                <div className="centered">
                    <div className="modal">
                        <div className="modalHeader">
                            <h5 className="heading">Ajout d'un plat</h5>
                        </div>
                        <button className="closeBtn" onClick={() => setIsOpen(false)}>
                            <RiCloseLine />
                        </button>
                        <div className="modalContent">
                            <div className="form-control">
                                <label>Nom du plat</label>
                                <input type="text" name="nomPlat" {...register('nomPlat')} />
                            </div>
                            <div className="form-control">
                                <label>Prix du plat</label>
                                <input type="number" name="prixPlat" {...register('prixPlat')} />
                            </div>
                            <div className="form-control">
                                <label>Les ingrédients du plat</label>
                                <div className="row">
                                    <input
                                        type="text"
                                        name="ingredient"
                                        {...register('ingredient')}
                                        onChange={handleInputChangeIngredients}
                                        value={ingredients}
                                    />
                                    <input
                                        type="number"
                                        name="mesure"
                                        {...register('mesure')}
                                        onChange={handleInputChangeMesure}
                                        value={mesure}
                                    />
                                    <select
                                        name="unit"
                                        {...register('unit')}
                                        onChange={handleInputChangeUnit}
                                        value={unit}
                                    >
                                        {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button type="button" onClick={loadIngredient}>
                                    Add
                                </button>
                                <ul>
                                    {loadingredient.map((item, index) => (
                                        <li key={index}>

                                            <div className="row">
                                                <p>{item.ingredients} - {item.mesure} {item.unit}</p>
                                                <p onClick={() => deleteItem(index)}>Supprimer</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="modalActions">
                            <div className="actionsContainer">
                                <input type="submit" className="addSiteBtn" />
                                <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
