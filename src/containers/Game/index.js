import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'actions'
import Header from 'components/Header'
import Question from 'components/Question'
import QuitModal from 'components/Modal'
import Timer from 'components/Timer'
import { Button, Spinner} from 'react-bootstrap';

class Game extends React.Component {

    handleShow = () => {
      this.props.modalShow();
    }
    handleClose = () => {
      this.props.modalHide();
    }
    doSomethingBeforeUnload = (ev) => {
      // Do something
      this.props.modalShow();
    }
    setupBeforeUnloadListenerCloseTab = () => {
        window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
            return ev.returnValue = 'Are you sure you want to close?';
        });
    };

    setupBeforeUnloadListenerBrowserBack = () => {
    window.addEventListener('popstate', (event) => {
      this.props.modalShow();
    }, false);
    };

    componentDidMount() {
      this.props.fetchTrivia();
      this.props.modalHide();
      window.history.pushState({name: "browserBack"}, "on browser back click", window.location.href);
      window.history.pushState({name: "browserBack"}, "on browser back click", window.location.href);
      this.setupBeforeUnloadListenerCloseTab();
      this.setupBeforeUnloadListenerBrowserBack();
    }
   
    componentWillUnmount() {
      clearInterval(this.timerInterval);
    }

    handleNextQuestion = (ans) => {
      let resultOfChoice = false
      let newScore = this.props.score;
      const correctAnswer = this.props.results[this.props.questionNumber].correct_answer;
      
      if (ans === correctAnswer) {
        resultOfChoice = true
        newScore = newScore + 1
      }
      const newUserChoices = {choice: 
        {"result": resultOfChoice,
        "question":this.props.results[this.props.questionNumber].question, 
        "correct_answer":this.props.results[this.props.questionNumber].correct_answer, 
        "user_choice":ans
        },
        score:newScore}   
     

      this.props.setScores(newUserChoices)

      
      if ((this.props.questionNumber + 1)  === this.props.results.length) {
          clearInterval(this.timerInterval);
          this.props.history.push({pathname: '/results'})
      }
    }

    render () {

      let cardContent = '';
      if (this.props.loading) {
        cardContent = <div>
        <Spinner animation="border" variant="light" />
        </div>;
      }else{
        cardContent =  <div>
        <Timer seconds={30} onEnd={this.handleNextQuestion} />
        <Question 
          questionNumber={this.props.questionNumber} 
          handleNextQuestion={this.handleNextQuestion} 
          result={this.props.results[this.props.questionNumber]}
        />
        <Button variant="secondary" onClick={this.handleShow}  size="sm">
        Give Up
       </Button></div>
      }
    /**/
    return (
      <div className="game">
        <Header/>
        {cardContent}
        <QuitModal handleClose={this.handleClose} show={this.props.show_modal}/>
      </div>
      )
    }
  }



  const mapStateToProps = (state, ownProps) => { 
    return {
      results: state.trivia.results,
      error: state.trivia.error,
      loading: state.trivia.loading,
      userChoices: state.trivia.userChoices,
      score: state.trivia.score,
      questionNumber: state.trivia.questionNumber,
      show_modal: state.modal.show
    };
  };
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTrivia: actions.fetchTrivia,
    resetScores: actions.resetScores,
    setScores: actions.setScores,
    modalShow: actions.modalShow,
    modalHide: actions.modalHide
  }, dispatch);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Game);