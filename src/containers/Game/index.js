import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'actions'
import Header from 'components/Header'
import Question from 'components/Question'
import QuitModal from 'components/Modal'
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

      this.timerInterval = setInterval(() => {
        this.props.decrementTimer()
        if (this.props.seconds === 0) {
          this.handleNextQuestion();
          this.props.resetTimer();
        }
      }, 1000)

    }

   
    componentWillUnmount() {
      clearInterval(this.timerInterval);
    }

    handleNextQuestion = (ans) => {
      const {score, results, questionNumber, setScores} = this.props;
      let resultOfChoice = false
      let newScore = score;
      const correctAnswer = results[questionNumber].correct_answer;
      
      if (ans === correctAnswer) {
        resultOfChoice = true
        newScore = newScore + 1
      }
      const newUserChoices = {choice: 
        {"result": resultOfChoice,
        "question": results[questionNumber].question, 
        "correct_answer": results[questionNumber].correct_answer, 
        "user_choice":ans
        },
        score:newScore}   
      setScores(newUserChoices)
      if ((questionNumber + 1)  === results.length) {
          clearInterval(this.timerInterval);
          this.props.history.push({pathname: '/results'})
      }
    }

    render () {

    const {questionNumber, results, loading, show_modal, seconds } = this.props
    
      let cardContent = '';
      if (loading) {
        cardContent = <div>
        <Spinner animation="border" variant="light" />
        </div>;
      }else{
        cardContent =  <div>
        <div className="timer">
            <strong>{seconds} </strong> <br/>Seconds left
        </div>
        <Question 
          questionNumber={questionNumber} 
          handleNextQuestion={this.handleNextQuestion} 
          result={results[questionNumber]}
          questionsTotal={results.length}
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
        <QuitModal handleClose={this.handleClose} show={show_modal}/>
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
      show_modal: state.modal.show,
      seconds: state.timer.seconds
    };
  };
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTrivia: actions.fetchTrivia,
    resetScores: actions.resetScores,
    setScores: actions.setScores,
    modalShow: actions.modalShow,
    modalHide: actions.modalHide,
    decrementTimer: actions.decrementTimer,
    resetTimer: actions.resetTimer,
    
  }, dispatch);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Game);