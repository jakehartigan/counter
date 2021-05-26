import React, { Component } from 'react';
import image from './assets/jake.jpg'

// Goal of this component is to add a new weight input to the users log, and to show past weights

class Weight extends Component {
    state = { 
        wgt : 175,
        goal: 180,
        average: 175
     }

     constructor() {
        super()
        console.log("constructor", this);
     }

//Methods go here:
/* 
     handleIncrementAdd(){
         this.handleIncrementAdd = this.handleIncrementAdd.bind(this);
     }
     handleIncrementSub(){
         this.handleIncrementSub = this.handleIncrementSub.bind(this);
     }


 */
     handleIncrementAdd = () => {
       this.setState({ wgt: this.state.wgt + 1 });
     };

     handleIncrementSub = () => {
         this.setState({wgt: this.state.wgt -1 });
     }

     
     

    render() { 

        return ( 

            <div>
                <img src={image} alt="user"/>
                <h1>Weight</h1>
                <p>Average Weight: {this.state.average} </p>
                <p>Goal: {this.state.goal} </p>
                <label className={{ fontWeight: 'bold !important'}} > Add New Weight 
                    <div className={this.getNewClasses()} >{this.state.wgt} lbs </div>
                    <button 
                    onClick= {this.handleIncrementAdd}
                    className="btn btn-warning m-2"> + </button>

                    <button 
                    onClick={this.handleIncrementSub}
                    className="btn btn-warning" > - </button>

                    <button 
                    onCLick=""
                    className="btn btn-success m-2"
                    >
                        Submit
                    </button>
                </label>
            </div>
         );
    }




    getNewClasses() {
        let classy = "btn m-2 btn-";
        classy += (this.state.wgt < this.state.average) ? "danger" : "primary";
        return classy;
    }
}
 
export default Weight;


