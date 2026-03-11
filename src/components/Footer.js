import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert(inputValue)
    }

    function handleBlur() {
        if (inputValue && !inputValue.includes('@')) {
            alert('Veuillez entrer une adresse email valide')
        }
    }

    return (
        <footer className="site-footer">
            <form className="site-footer__form">
                <div className="site-footer__title">Laissez-nous votre email</div>
                <textarea
                    className="input site-footer__input"
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Entrez votre email"
                />
                <button className="btn" onClick={handleSubmit}>Envoyer</button>
                <div className="site-footer__note">© 2026 Zikeo</div>
            </form>
        </footer>
    )
}

export default Footer
