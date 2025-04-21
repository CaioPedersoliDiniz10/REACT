import React from 'react'
import './Main.css'
import Header from './Header'

export default props => (
    <div>
        <Header  {...props}/>
        <main className="content">
            Conteúdo
        </main>
    </div>
)
