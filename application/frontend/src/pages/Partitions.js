import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Partitions.css';
import logo_partition from '../assets/logo_partition.png';
import { useState } from 'react';

const partitions = [
    {
        title: "Game of Thrones",
        file: "/documents/game_of_throne.pdf",
        image: logo_partition
    },
    {
        title: "Divenire piano",
        file: "/documents/divenire_ludovico_einaudi.pdf",
        image: logo_partition
    },
    {
        title: "Divenire violon",
        file: "/documents/divenire-violon-01.pdf",
        image: logo_partition
    },
    {
        title: "L'aventurier ensemble",
        file: "/documents/L'aventurier - ensemble.pdf",
        image: logo_partition
    },
    {
        title: "L'aventurier piano",
        file: "/documents/L'aventurier - piano.pdf",
        image: logo_partition
    },
    {
        title: "rush_e",
        file: "/documents/rush_e.pdf",
        image: logo_partition
    },
    {
        title: "Medley Mylene Violoncelle",
        file: "/documents/V2_Medley_mylene-farmer-Violoncelle.pdf",
        image: logo_partition
    },
    {
        title: "Medley Mylene duo",
        file: "/documents/V2_Medley_mylene-farmer.pdf",
        image: logo_partition
    }
];

function Partitions() {
    const [selectedPdf, setSelectedPdf] = useState(null);

    return (
        <div className="page">
            <Header />
            <main className="page__content">
                <h1 className="page__title">Partitions</h1>

                {/* GRILLE */}
                <div className="grid partition_grid">
                    {partitions.map((partition, index) => (
                        <div
                            key={index}
                            className="card partition_card--tile"
                            onClick={() => setSelectedPdf(partition)}
                        >
                            <img src={partition.image} alt={partition.title} />
                            <p>{partition.title}</p>
                        </div>
                    ))}
                </div>

                {/* POPUP */}
                {selectedPdf && (
                    <div className="partition_modal" onClick={() => setSelectedPdf(null)}>

                        <div
                            className="partition_modal__content"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <h2>{selectedPdf.title}</h2>

                            <iframe
                                src={selectedPdf.file}
                                title="PDF preview"
                            />

                            <a
                                href={selectedPdf.file}
                                target="_blank"
                                rel="noreferrer"
                                className="btn"
                            >
                                Ouvrir en plein écran
                            </a>

                        </div>

                    </div>
                )}

            </main>
            <Footer />
        </div>
    );
}



export default Partitions;
