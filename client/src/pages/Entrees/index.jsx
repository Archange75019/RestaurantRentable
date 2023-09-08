import './style.css'
import AddEntrees from '../../components/Modal/AddEntrees'
import { useState } from "react"

export default function Entrees() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
        <main>
            <button className="primaryBtn" onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen === true ? <AddEntrees setIsOpen={setIsOpen} /> : ''}
        </main>
    </>

    )
}