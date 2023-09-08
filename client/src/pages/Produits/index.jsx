import AddProduct from '../../components/Modal/AddProduct'
import './style.css'
import { useState } from "react"


export default function Produits() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <main>
                <button className="primaryBtn" onClick={() => setIsOpen(true)}>Open Modal</button>
                {isOpen === true ? <AddProduct setIsOpen={setIsOpen} /> : ''}
            </main>
        </>

    )

}