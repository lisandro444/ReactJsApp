import React, { Component } from 'react';

class ComponentA extends Component {
    // constructor() {
    //   super();
    //   this.state = { contador: 1 };
    // }
    render() {
        return <p>Componente A</p>
    }
}

class ComponentB extends Component {
    // constructor() {
    //   super();
    //   this.state = { contador: 1 };
    // }
    render() {
        return <p>Component B</p>
    }
}

// function useConditinalRender(mostrarA) {
//     if (mostrarA)
//         return <ComponentA></ComponentA>
//     else
//         return <ComponentB></ComponentB>
// }

export default class ConditonalSection extends Component {
    state = { mostrarA: true }
    render() {
        const conditionalrender = this.state.mostrarA ? <ComponentA></ComponentA> : <ComponentB></ComponentB>
        return <div>
            {conditionalrender}
        </div>
    }
}