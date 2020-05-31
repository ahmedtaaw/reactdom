import React, { Component } from 'react';

class Outputcondition extends Component {
    render() {
        const { items } = this.props;

        const theItems = items.map((item) => {
            return parseInt(item.age) < 30 ? (
                <tr key={Math.random() * 100}>
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
            ):(
<tr>
    <td colSpan="3">no result</td>
</tr>
            )
            

        })

        return (
            <table>
                <tbody>
                    {theItems}
                </tbody>
            </table>
        )
    }
}

export default Outputcondition;