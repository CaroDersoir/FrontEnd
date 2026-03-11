import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useContext } from 'react';
import { PreferencesContext } from '../context/indexContext';
import '../styles/Preferences.css';

const themes = [
    { id: "ocean", label: "Zikéolarge", hashtag: "#SouslOcean" },
    { id: "maya", label: "zzzzzzzzzzzzzzzzzzzzzzzzikeo", hashtag: "#MayalAbeille" },
    { id: "eolienne", label: "Zikéolienne", hashtag: "#EnRotationDansLeVent" },
    { id: "oblique", label: "Zikéoblique", hashtag: "#PencheDansLeSpectre" },
    { id: "nuit", label: "Zikéolit", hashtag: "#SousLaLune" },
    { id: "automne", label: "Zikéotomne", hashtag: "#FeuillesMortesEtMusique" },
    { id: "orgie", label: "Zikéorgie", hashtag: "#HorsNormes" }
];

function Preferences() {
    const { mode, setMode } = useContext(PreferencesContext);

    return (
        <div className={`page page--preferences ${mode}-mode`}>
            <Header />

            <main className="page__content preferences">
                <h1 className="page__title">Préférences</h1>

                <div className="preferences__options">
                    {themes.map((theme) => (
                        <label className="preferences__option" key={theme.id}>
                            <input
                                type="radio"
                                name="theme"
                                checked={mode === theme.id}
                                onChange={() => setMode(theme.id)}
                            />
                            <span>{theme.label}</span>
                            <span className="preferences__badge">{theme.hashtag}</span>
                        </label>
                    ))}
                </div>
            </main>

            <Footer />

        </div >
    )
}

export default Preferences;
