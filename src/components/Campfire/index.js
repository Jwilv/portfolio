import React from 'react'
import './styled.css'



export const Campfire = () => {
    return (

        <div className="fireplace">
            <div className="blur">
                <div className="fireplace__flame_big"></div>
            </div>
            <section className="fireplace__log"></section>
            <section className="fireplace__log"></section>
            <section className="fireplace__log"></section>
            <section className="fireplace__log"></section>
            <section className="fireplace__log"></section>
            <section className="fireplace__log"></section>
            <section className="fireplace__log"></section>
            <main className="fireplace__spark"></main>
            <main className="fireplace__spark"></main>
            <main className="fireplace__spark"></main>
            <main className="fireplace__spark"></main>
            <div className="blur fix">
                <div className="fireplace__flame"></div>
            </div>
            <div className="fireplace__light"></div>
        </div>

    )
}
