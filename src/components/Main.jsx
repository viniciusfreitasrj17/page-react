import React, { Component } from 'react'

import mainJson from '../contents/json/main.json'

export default class Main extends Component {
    render() {
        return (
            <main>
                <section id= {Object.keys(mainJson.section)[0] + '-section'} > {mainJson.section[0]} </section>
                <section id= {Object.keys(mainJson.section)[1] + '-section'} > {mainJson.section[1]} </section>
                <section id= {Object.keys(mainJson.section)[2] + '-section'} > {mainJson.section[2]} </section>
                <section id= {Object.keys(mainJson.section)[3] + '-section'} > {mainJson.section[3]} </section>
            </main>
    
        )
    }
}