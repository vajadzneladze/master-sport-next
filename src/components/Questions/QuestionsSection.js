import { useState } from 'react'
import Question from './Question'
import Word from './Word'

const data = [
    {
        question: 'Can you explain the process of photosynthesis?',
        answer:
            'Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. It involves the absorption of light by chlorophyll, the conversion of carbon dioxide and water into glucose and oxygen, and the storage of energy in the form of ATP.',
    },
    {
        question: 'What are the key features of the theory of evolution?',
        answer:
            'The theory of evolution, proposed by Charles Darwin, includes the concepts of natural selection, common ancestry, and descent with modification. It suggests that species change over time through the differential survival and reproduction of organisms with advantageous traits, leading to the gradual development of new species.',
    },
    {
        question: 'Explain the principles of quantum mechanics.',
        answer:
            'Quantum mechanics is a branch of physics that describes the behavior of particles at the atomic and subatomic levels. Key principles include wave-particle duality, superposition, and entanglement. It challenges classical Newtonian physics and introduces probabilistic outcomes in the behavior of particles.',
    },
    {
        question: 'What is the role of mitochondria in cellular respiration?',
        answer:
            "Mitochondria are organelles in cells responsible for cellular respiration, a process that converts glucose into energy (ATP). Through aerobic respiration, mitochondria generate ATP by consuming oxygen and producing carbon dioxide. This energy is crucial for the cell's various functions.",
    },
    {
        question: 'How does the human digestive system work?',
        answer:
            'The human digestive system processes food through mechanical and chemical digestion. Food travels through the mouth, esophagus, stomach, and small and large intestines. Enzymes and stomach acids break down nutrients, and absorption occurs in the intestines. Waste is eliminated through the rectum and anus.',
    },
    {
        question: 'Explain the concept of black holes in astrophysics.',
        answer:
            'Black holes are regions in space with extremely strong gravitational forces, preventing anything, including light, from escaping. They form when massive stars collapse under their own gravity. The boundary surrounding a black hole is called the event horizon, and it represents the point of no return.',
    },
    {
        question: 'What is the significance of the Industrial Revolution?',
        answer:
            'The Industrial Revolution, starting in the 18th century, marked a transition from agrarian and handcraft-based economies to industrialized, machine-driven societies. It led to technological advancements, urbanization, changes in labor practices, and increased production efficiency, shaping the modern world.',
    },
]

const words = [
    {
        title: 'NEXT DAY SHIPPING',
        img: '/calendar.svg',
    },
    {
        title: '90-DAY RETURNS',
        img: '/logout.svg',
    },
    {
        title: 'FAST USA CUSTOMER SERVICE',
        img: '/chat.svg',
    },
    {
        title: 'GEORGIA SHIPPING',
        img: '/send.svg',
    },
]

const QuestionsSection = ({ title = '', description = ' ' }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    return (
        <section id="questions" className="container-fluid">
            <div className="container">
                <p>{description}</p>
                <h2>{title}</h2>

                <div className="d-flex flex-column align-items-center">
                    {data &&
                        data.map((item, index) => {
                            return (
                                <Question
                                    key={index}
                                    data={item}
                                    index={index}
                                    isOpen={index === activeIndex}
                                    openHandler={setActiveIndex}
                                />
                            )
                        })}
                </div>

                <div className="row words">
                    {words.map((item, index) => {
                        return <Word {...item} key={index} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default QuestionsSection
