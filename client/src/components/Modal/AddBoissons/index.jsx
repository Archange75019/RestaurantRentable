import { useForm } from 'react-hook-form';
import { useState } from "react"
import { RiCloseLine } from "react-icons/ri";
import './style.css'

export default function AddBoissons({ setIsOpen }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleInputChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        console.log('name   :', name)

    }
    const onSubmit = async (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: data })
        };

        await fetch('/app/boissons', requestOptions)
            .then(response => response.json())
            .then(data => {

                if (data.success === "true") {
                    console.log(data.products)
                    reset()
                    setIsOpen(false)
                }


            });
    };



    return (
        <>
            <form className="formAddProduct" onSubmit={handleSubmit(onSubmit)}>
                <div className="darkBG" onClick={() => setIsOpen(false)} />
                <div className="centered">
                    <div className="modal">
                        <div className="modalHeader">
                            <h5 className="heading">Ajout d'une boisson</h5>
                        </div>
                        <button className="closeBtn" onClick={() => setIsOpen(false)}>
                            <RiCloseLine />
                        </button>
                        <div className="modalContent">


                        </div>
                        <div className="modalActions">
                            <div className="actionsContainer">
                                <input type="submit" className="addSiteBtn" />

                                <button
                                    className="cancelBtn"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>

    )

}