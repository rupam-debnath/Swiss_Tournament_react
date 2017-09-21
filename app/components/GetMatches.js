var React = require('react');
import { getMatchDetail } from '../actions/user'
import { connect } from 'react-redux'
import store from "../store";

class GetMatches extends React.Component{


    componentDidMount(){
      this.props.getMatches()
    }

    render(){

        if(this.state.ploading){
          return <h1>loading......</h1>
        }
        return(
                <div className="tclass">
                <table className="table col-md-12 col-sm-12" id="rounds">
                    <thead className="text-center">
                        <tr>
                            <th>Id</th>
                            <th>TourId</th>
                            <th>Player1ID</th>
                            <th>Player2ID</th>
                            <th>Round</th>
                            <th>WinnerId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.matchData.matches.map(function(data,index){
                            return (
                                    <tr>
                                        <td key={index+1}>{data.id}</td>
                                        <td key={index+2}>{data.tournament_id}</td>
                                        <td key={index+3}>{data.player1_id}</td>
                                        <td key={index+4}>{data.player2_id}</td>
                                        <td key={index+5}>{data.winner_id}</td>
                                        <td key={index+6}>{data.loser_id}</td>
                                    </tr>
                                )
                        },0)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) =>
({
    isFetching : store.getState().getMatchDetail.isMatchFetching,
    matchData   :  store.getState().getMatchDetail.matchData,

})

const mapDispatchToProps = (dispatch) => {
    return {
        getMatches: () => dispatch(getMatchDetail())
    }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(GetMatches);
