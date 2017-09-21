return (
            <div className="container">
              <div className="row">
                <div className=" col-sm-4 col-md-4">
                  <h3>Tournament Name: {store.getState().matchData.matchData.tDetails[0].name}</h3>
                </div>
                <div className=" col-sm-3 col-md-3 tour_status">
                  <h3>Status: {store.getState().matchData.matchData.tDetails[0].status}</h3>
                </div>
                <div className=" col-sm-3 col-md-3">
                  <button type="button" className="btn btn-warning btn-lg" id="startTour"
                  data-toggle="modal" data-target="#myModal">Start Tournament</button>
                </div>
                <div className=" col-sm-2 col-md-2">
                  <Link to="/login" className="btn btn-warning btn-lg" id="Logout">Logout</Link>
                </div>
              </div>
              <form onSubmit={this.handleSubmit}>
              <div className=" col-sm-4 col-md-4">
                <input
                  type="text"
                  placeholder="Enter Player Name"
                  id="p_name"
                  required="required"
                  onChange={this.handleNewPlayer}/>
                <button
                  id="addPlayer"
                  className="btn btn-warning btn-lg">
                  Add Players
                </button>
                <div className="viewtour">
                  <div>
                    <table className="table table-striped" id="playerId">
                      <thead>
                        <tr>
                        <th>Player Name</th>
                        </tr>
                      </thead>
                      <tbody id="playerTable">
                         {this.props.objects.playerData.playerName.players.map(function(player,index){
                           return (
                             <tr key={index}><th key={index}> {player.name} </th></tr>
                             )
                         },0)
                       }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </form>
              <div className=" col-sm-2 col-md-2">
              </div>
              <div className=" col-sm-6 col-md-6">
                <h3>Current Standings</h3>
                  <CurrentStanding />
              </div>
              <RoundTable />
        </div>
            )
      }

{store.getState().matchData.matchData.tDetails[0].status}


<tr>
                <td>player1</td>
                <td>player2</td>
                <td>
                <select className="winners">
                <option value=p1_id/p2_id/round>player1</option>
                <option value=p2_id/p1_id/round>player2</option>
                </select>
                </td>
            </tr>
