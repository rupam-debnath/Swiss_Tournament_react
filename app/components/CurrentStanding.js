import React from 'react'
import store from "../store";
import { currentStanding } from '../actions/user'
import { connect } from 'react-redux'

class CurrentStanding extends React.Component{

    constructor(props){
    super(props);
    this.state={
      currloading: true
    };
}
    componentDidMount(){
      var self=this;
      this.props.getCurrentStanding(function(){
            self.setState({
        currloading: false
      })
  });

}


    render(){
        if(this.state.currloading){
          return <h1>loading......</h1>
        }
        return(

                <table className="table table-striped" id="currentStandings">
                    <thead>
                      <tr>
                      <th>Player Name</th>
                      <th>Wins</th>
                      <th>Loses</th>
                      </tr>
                    </thead>
                    <tbody id="playerStatus"  className="table table-striped">

                        {this.props.standingData.currData1.currData.standings.map(function(data,index){
                            return (
                                <tr key={index}>
                                    <th key={index+1}>{data.Name}</th>
                                    <th key={index+2}>{data.Wins}</th>
                                    <th key={index+3}>{data.Losses}</th>
                                </tr>
                            )
                        },0)
                    }
                    </tbody>
                </table>

        )
    }
}



const mapStateToProps = (state) =>
({
    standingData : store.getState(),
})

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentStanding: (cb) => dispatch(currentStanding(cb))
    }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(CurrentStanding);
