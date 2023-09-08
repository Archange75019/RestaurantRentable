import './style.css'
import AddPlat from '../../components/Modal/AddBoissons'
import { useState } from "react"

export default function Boissons() {
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