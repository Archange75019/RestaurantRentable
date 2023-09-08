import './style.css'
import AddPlat from '../../components/Modal/AddPlat'
import { useState } from "react"

export default function Plats() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
        <main>
            <button className="primaryBtn" onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen === true ? <AddPlat setIsOpen={setIsOpen} /> : ''}
        </main>
    </>

    )
}