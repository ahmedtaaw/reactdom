import React, {Component} from 'react';

class Items extends Component {
    render(props){

        const {items} = this.props;

        const theItems= items.map((item)=>{
            return(
            <tr>
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
                {theItems}
            </table>
            
        )
    }
}

export default Items