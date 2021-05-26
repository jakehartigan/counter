import React, { Component } from 'react';

//Goal of the component is to set notifications to remind the user to add a new weight input

class Notify extends Component {
    state = {  
        time: 10000
    };
    
    render() { 
        return ( 
            <div>
                {this.state.time}
            </div>

         );
    }
}
 
export default Notify;