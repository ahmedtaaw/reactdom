import React, {Component} from 'react';

class Items extends Component {
    render(props){

        const {items} = this.props;

        const theItems= items.map((item)=>{
            return(
            <tr key={Math.random()*100}>
                    <td>
                     {item.id}
                    </td>
                    <td>
                     {item.name}
                    </td>
                    <td>
                     {item.age}
                    </td>
                </tr>
                )
        })
        return(
            <table>
                <tbody>
                 {theItems}
                </tbody>
            </table>
            
        )
    }
}

export default Items