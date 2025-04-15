import React from 'react'


export default props =>
    <dvi>
 <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
 <ul>
  
   {
    React.Children.map(props.children, child=>{
       return React.cloneElement(child,
            {...props, ...child.props}
            )
    })
    
   
    }
 </ul>
    </dvi>