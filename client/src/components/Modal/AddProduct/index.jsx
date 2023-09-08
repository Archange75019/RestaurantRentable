
import { useForm } from 'react-hook-form';
import { useState } from "react"
import { RiCloseLine } from "react-icons/ri";
import './style.css'
export default function AddProduct({ setIsOpen }) {
    const [nbreArtConnu, setnbreArtConnu] = useState("")

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

        if (name === 'nbreArtConnu') {
            alert(event.target.value)
            setnbreArtConnu(event.target.value)

        }
    }

    const onSubmit = async (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: data })
        };

        await fetch('/app/product', requestOptions)
            .then(response => response.json())
            .then(data => {

                if (data.success === "true") {
                    console.log(data)
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
                            <h5 className="heading">Ajout d'un produit</h5>
                        </div>
                        <button className="closeBtn" onClick={() => setIsOpen(false)}>
                            <RiCloseLine />
                        </button>
                        <div className="modalContent">
                            <div className="form-control">
                                <label>Produit</label>
                                <input type="text" name="produit" {...register("produit")} />
                            </div>
                            <div className="form-control">
                                <label>Type de produit</label>
                                <select {...register("typeProduit")} name="typeProduit" id="typeProduit-select">
                                    <option value="" defaultValue>--Veuillez choisir le type de produit--</option>
                                    <option value="legumes">Legumes</option>
                                    <option value="fruits">Fruits</option>
                                    <option value="viandesR">Viandes Rouges</option>
                                    <option value="viandesB">Viandes Blanches</option>
                                    <option value="huiles">Huiles</option>
                                    <option value="prodLait">Produit Laitier</option>
                                    <option value="boissons">Boisson</option>

                                </select>
                            </div>
                            <div className="form-control">
                                <label>Vendu par</label>
                                <select {...register("conditionnement")} name="conditionnement" id="conditionnement-select">
                                    <option value="" defaultValue>--Veuillez choisir le statut du contrat--</option>
                                    <option value="cagette">CAGETTE</option>
                                    <option value="caisse">CAISSE</option>
                                    <option value="sac">SAC</option>
                                    <option value="bouteille">BOUTEILLE</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label>Connaissez vous le nombre d'article par conditionnement ?</label>
                                <div className="choice">
                                    <div>
                                        <input type="radio" id="oui" name="nbreArtConnu" onChange={handleInputChange} value="oui" />
                                        <label for="oui">Oui</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="non" name="nbreArtConnu" onChange={handleInputChange} value="non" />
                                        <label for="non">Non</label>
                                    </div>

                                </div>

                            </div>
                            {nbreArtConnu === 'oui' ? (
                                <>
                                    <div className="form-control">
                                        <label>Nombre d'article</label>
                                        <input type="text" name="nbreArticle" {...register("nbreArticle")} />
                                    </div>
                                    <div className="form-control">
                                        <label>Poid unitaire par article</label>
                                        <input type="text" name="poidArticleUnitaire" {...register("poidArticleUnitaire")} />
                                    </div>
                                </>
                            ) : ''}
                            {nbreArtConnu === 'non' ? (
                                <>
                                    <div className="form-control">
                                        <label>Quel est le poid de l'article</label>
                                        <input type="text" name="poidsArticle" {...register("poidsArticle")} />
                                    </div>
                                </>
                            ) : ''}

                            <div className="form-control">
                                <label>Prix total</label>
                                <input type="text" name="prixTotal" {...register("prixTotal")} />
                            </div>
                            
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