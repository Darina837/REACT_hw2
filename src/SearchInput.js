import React from 'react';

//Основываясь на классах и this.state
// export default class SearchInput extends React.Component {
//     state = {
//         search: "",
//         change: (e) => {
//              this.setState({search: e.target.value.toLocaleUpperCase()})
//         },
//         press: (e) => {
//             this.setState({search: e.target.value.replace(/[.,!?:…]/, '')}) //исключает только знаки препинания: точка, запятая, восклицательный, вопросительный, двоеточие и многоточие
//         }
//     };
//     render() {
//         return (<>
//             <input value={this.state.search} onChange={this.state.change} onKeyPress={this.state.press} />
//         </>);
//     }
// }

//Используя функциональные компоненты и useState()
export default function SearchInput () {
    const [text, setText] = React.useState('');
    return (<>
        <input 
            value={text} 
            onChange={
                (e) => {
                    setText(e.target.value.toLocaleUpperCase())
                }
            } 
            onKeyPress={
                (e) => {
                    setText(e.target.value.replace(/[.,!?:…]/, '')) //исключает только знаки препинания: точка, запятая, восклицательный, вопросительный, двоеточие и многоточие
                }
            } 
        />
    </>);
}