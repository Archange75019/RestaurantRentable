import './style.css'
import AddDessert from '../../components/Modal/AddDessert'
import { useState } from "react"

export default function Desserts() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
        <main>
            <button className="primaryBtn" onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen === true ? <AddDessert setIsOpen={setIsOpen} /> : ''}
        </main>
    </>

    )
}