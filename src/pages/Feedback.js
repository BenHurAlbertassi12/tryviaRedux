/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Button, Center, Text } from '@chakra-ui/react';
import Header from '../components/Header';

class Feedback extends Component {
  handleClickHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleClickRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  mensagemDoFdb = () => {
    const magicNumber = 3;
    const { assertions } = this.props;
    return (assertions >= magicNumber) ? 'Well Done!' : 'Could be better...';
  };

  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <Header />
        <Center h="100vh">
          <Box
            bg="#DDDDDD"
            color="black"
            p={ 4 }
            w="50%"
            borderRadius="md"
            boxShadow="lg"
          >
            <Center>
              <Text fontSize="2xl">
                Resultado:
              </Text>
            </Center>
            <Center className="resultados">
              <Text fontSize="2xl" data-testid="feedback-total-score">
                { score }
              </Text>
              <Text fontSize="2xl" data-testid="feedback-total-question">
                { assertions }
              </Text>
            </Center>

            <Center>
              <Box data-testid="feedback-text">
                <p>
                  {this.mensagemDoFdb()}
                </p>
              </Box>
            </Center>
            <Center>

              <Box>
                <Button
                  p="15px"
                  m="15px"
                  data-testid="btn-play-again"
                  type="button"
                  onClick={ this.handleClickHome }
                >
                  Play Again
                </Button>

                <Button
                  data-testid="btn-ranking"
                  type="button"
                  onClick={ this.handleClickRanking }
                >
                  Ranking
                </Button>
              </Box>
            </Center>
          </Box>
        </Center>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
