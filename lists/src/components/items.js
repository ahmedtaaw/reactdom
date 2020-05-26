import React, {Component} from 'react';

class Items extends Component {
    render(props){
        return(
            <table>
                <tr>
                    <td>
                     {this.props.id}
                    </td>
                    <td>
                     {this.props.name}
                    </td>
                    <td>
                     {this.props.age}
                    </td>
                </tr>
            </table>
            
        )
    }
}

export default Items