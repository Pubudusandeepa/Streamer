import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component{
    state = {isSignedIn: null };
   

  componentDidMount(){
      window.gapi.load('client:auth2', () =>{
          window.gapi.client.init({
              clientId: '202493013885-l8jdmseafbae5ld73eomav77f6nut4ds.apps.googleusercontent.com',
              scope: 'email'
          }).then(() =>{
              this.auth = window.gapi.auth2.getAuthInstance();
              this.setState({isSignedIn: this.auth.isSignedIn.get()})
              this.onAuthChange(this.auth.isSignedIn.get());
         
              this.auth.isSignedIn.listen(this.onAuthChange);
         
          })
      });
  }

    onAuthChange = isSignedIn =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    onSigiInClick =() =>{
        this.auth.signIn();
      
    }

    onSignOutClick =() =>{
       this.auth.signOut();
     

    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>I dont know if we are signed in</div>
        }else if(this.state.isSignedIn){
            return(
              <button onClick = {this.onSignOutClick} className="ui red google button">
              <i className="google icon" />
              Sign Out
              </button>

            );
        }else{
            return(
                <button onClick = {this.onSigiInClick} className="ui red google button">
                <i className="google icon" />
                Sign in with Google
                </button>
            );
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default connect(null, { signIn,signOut})(GoogleAuth);