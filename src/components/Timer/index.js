import React from 'react'
import { Config } from 'data/config.js';


class Timer extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        seconds: Config.timer
      }
    }
   
   
    componentDidMount() {

      this.timerInterval = setInterval(() => {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
        if (this.state.seconds === 0) {
          this.props.onEnd(); 
          this.setState({
            seconds: Config.timer
          })
        }
      }, 1000)
  
    }
       /*static getDerivedStateFromProps(nextProps, prevState){
   
      if(nextProps.seconds!==prevState.seconds){  
        
        console.log(prevState.seconds)
        return { seconds: nextProps.seconds};
            }
            else return null;
          }
    
 */
    UNSAFE_componentWillReceiveProps(nextProps){
      this.setState({
        seconds: nextProps.seconds
      })
    }
  
    componentWillUnmount() {
      clearInterval(this.timerInterval);
    }

    render() {
      const {seconds} = this.state;
      return (
          <div className="timer">
            <strong>{seconds}</strong> <br/>Seconds left
          </div>
        )
    }
  }
  export default Timer
