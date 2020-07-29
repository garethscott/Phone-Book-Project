import React from 'react';
import './App.css';
import { NumInput } from './components/NumInput'
import { Button } from './components/Button'
// import { List } from './components/List'

class App extends React.Component {
    state = {
        number: "",
        list: ["01352757748", "01352756914"]
    }


    handleNumValue = (e) => {
        this.setState({ number: e.target.value })
    }

    handleSubValue = (e) => {
        e.preventDefault()
        let temp = this.state.list
        this.setState({
            list: [...temp, this.state.number],
            number: ""
        })
    }


    render() {
        console.log(this.state.list)
        console.log(this.state.number)
        return (
            <div className="app">
                <div className="wrapper">
                    <div className="frame">
                        <div className="input-and-btn">
                            <form onSubmit={this.handleSubValue}>
                                <NumInput handleNumValue={this.handleNumValue} number={this.state.number} />
                                <Button />
                            </form>
                        </div>
                        <ul className="list-list">
                            {this.state.list.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>


                    </div>
                </div>
            </div>
        )
    }
}


// export const NumInput = (props) => {
//     return (
//         <input onChange={props.handleNumValue} value={props.number} placeholder="Enter Number..."
//             className="textbox" />
//     )
// }

// export const Button = (props) => {
//     return (
//         <button type="submit" className="btn">Add Contact</button>
//     )
// }






// class App extends React.Component {
//     state = {
//         number: "",
//         list: ["01352757748", "01352756914"]
//     }

//     handleNumValue = (e) => {
//         this.setState({ number: e.target.value })
//     }

//     handleSubValue = () => {
//         let temp = this.state.list
//         this.setState({ list: [...temp, this.state.number] })
//     }



//     render() {
//         console.log(this.state.list)
//         console.log(this.state.number)
//         return (
//             <div className="app">
//                 <div className="wrapper">
//                     <div className="frame">
//                         <div className="input-and-btn">
//                             <form onSubmit={this.handleSubValue}>
//                                 <NumInput handleNumValue={this.handleNumValue} number={this.state.number} />
//                                 <Button />
//                             </form>
//                         </div>
//                         <div className="list">
//                             <h1>{this.state.number}</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }







export default App;
