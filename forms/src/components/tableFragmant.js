import React, {Component} from 'react';
import tableFragmantChild from'./tableFragmantChild';
class tableFragmant extends Component{
    render(){    return (
        <div>
            <h2>tableFragmant</h2>
            
            <table>
                <tr>
<tableFragmantChild/>
</tr>
            </table>


        </div>
    )
}
}

export default tableFragmant;