import React, {Component} from 'react';

class Items extends Component {
    render(props){

        const {id, name, age} = this.props;

        return(
            <table>
                <tr>
                    <td>
                     {id}
                    </td>
                    <td>
                     {name}
                    </td>
                    <td>
                     {age}
                    </td>
                </tr>
            </table>
            
        )
    }
}

export default Items