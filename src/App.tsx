import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Backdrop from "./Components/Backdrop/Backdrop";
import CocktileApiSearcher from "./Components/CocktileApiComponent/CocktileApiSearcher";

interface Props {}

interface State {
  sideBarStatus: boolean;
}

class App extends React.Component<Props, State> {
  state = {
    sideBarStatus: false
  };

  burgerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        sideBarStatus: !prevState.sideBarStatus
      };
    });
  };

  render() {
    
    let backdrop;
    if (this.state.sideBarStatus){      
      backdrop = <Backdrop burgerToggleClickHandler = {this.burgerToggleClickHandler}/>
    }

    return (
      <div className="App">
        <Header
          sideBarStatus={this.state.sideBarStatus}
          BTClickHandler={this.burgerToggleClickHandler}
        />
        {backdrop}
        <Sidebar sideBarStatus={this.state.sideBarStatus}/>
        <CocktileApiSearcher/>
      </div>
    );
  }
}

export default App;
