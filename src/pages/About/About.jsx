import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './About.scss'

export default function About() {
    return (
        <div>
            {/* Header */}
            <Header />

            {/* About */}
            <div className=".about">
                <div className="about__image"></div>
                <Container>
                    <div className="about__section">
                        <h2>ABOUT MAXIM LAVROV</h2>
                        <hr></hr>
                        <div className="about__content">
                            <h3>THE EARLY DAYS</h3>
                            <p>Born and raised on the rugged coast, Maxim Lavrov’s relationship with food began not in a culinary school, but on the docks and in the wild forests of his childhood home. Watching local fishermen bring in the morning catch and foraging for wild herbs instilled in him a deep respect for raw ingredients. Driven by an insatiable curiosity, he left home at eighteen to apprentice in the high-pressure kitchens of Paris and Tokyo. It was during these grueling formative years that Maxim mastered classical French techniques and the rigorous discipline of Japanese precision, forging a unique culinary philosophy that balances bold Innovation with ancestral traditions.</p>
                        </div>

                        <div className="about__content">
                            <h3>MICHELIN-STARRED RESTAURANTS</h3>
                            <p>Maxim’s definitive breakthrough came when he took the reins at L'Étoile, a historic yet fading establishment in the heart of Europe. Within just eighteen months, his revolutionary approach to modern European cuisine earned the restaurant its first Michelin star, swiftly followed by a second. Known for his uncompromising standard of perfection, Maxim transforms the dining experience into a sensory theater. His signature dishes—celebrated for their complex textures, unexpected flavor pairings, and striking visual artistry—have made his kitchens a masterclass for aspiring chefs worldwide and a bucket-list destination for international gastronomes.</p>
                        </div>

                        <div className="about__content">
                            <h3>GLOBAL RESTAURANTS</h3>
                            <p>Today, the Lavrov Group spans a curated portfolio of world-class dining concepts across major culinary capitals, from intimate, avant-garde tasting counters in New York to vibrant, open-fire concepts in Singapore. While each restaurant adapts dynamically to its local culture and native ingredients, they all share Maxim’s core DNA: an unwavering commitment to sustainable sourcing, flawless execution, and hospitality that feels both deeply personal and theatrical. Maxim continues to split his time between these global hubs, constantly pushing the boundaries of what modern dining can be.</p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
