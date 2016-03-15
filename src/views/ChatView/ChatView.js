/* @flow */
'esversion: 6';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, doubleAsync } from '../../redux/modules/counter';
// import DuckImage from './Duck.jpg';
import css from './ChatView.scss';

// import Hammer from 'react-hammerjs';

// // export all ReactMDL into global so we can generate demos
import * as ReactMDL from 'react-mdl';
for (const component in ReactMDL) {
    if (ReactMDL.hasOwnProperty(component)) {
        global[component] = ReactMDL[component];
    }
}
//
window.React = React;
// window.ReactDOM = ReactDOM;



// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.
type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function
};

// var Button = ReactMDL.Button;

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class ChatView extends React.Component<void, Props, void> {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  };

  handleTap(e) {
    console.log(e);
  }

  render () {
    return (
      // <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
      <Card shadow={0} style={{width: '', height: '100%', margin: 'auto'}}>
          <CardTitle expand>{this.props.counter}</CardTitle>
          <CardText>
            <Button raised ripple onClick={this.props.increment}>Increment</Button>
            {' '}
            <Button raised ripple onClick={this.props.doubleAsync}>Double(Async)</Button>
            <List style={{width: '100%'}}>
              <ListItem threeLine>
                <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
                <ListItemAction>
                  <a href="#"><Icon name="star" /></a>
                </ListItemAction>
              </ListItem>
              <ListItem threeLine>
                <ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.">Aaron Paul</ListItemContent>
                <ListItemAction>
                  <a href="#"><Icon name="star" /></a>
                </ListItemAction>
              </ListItem>
              <ListItem threeLine>
                <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
                <ListItemAction>
                  <a href="#"><Icon name="star" /></a>
                </ListItemAction>
              </ListItem>
            </List>

          </CardText>
          <CardActions border>

          <SwipeableViews>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              slide n°1
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              slide n°2
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°3
            </div>
          </SwipeableViews>

            <CardActions shadow={0} style={{width: '', height: '100%', margin: 'auto'}}>
            <Textfield                onChange={() => {}}                label="Text lines..."                rows={2}                style={{width: '80%'}}            />
            <FABButton colored ripple id='fab_send' className={css['right-bottom']} onTap={this.handleTap.bind(this)}>
                <Icon name="send" />
            </FABButton>
            </CardActions>
            <CardActions shadow={0} style={{display: 'none'}}>
              imeages
            </CardActions>
            <CardActions shadow={0} style={{width: '', height: '100%', margin: 'auto'}}>
            <Textfield                onChange={() => {}}                label="Text lines..."                rows={2}                style={{width: '80%'}}            />
            <FABButton colored ripple id='fab_send' className={css['right-bottom']}>
                <Icon name="send" />
            </FABButton>
            </CardActions>
          </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})
export default connect((mapStateToProps), {
  increment: () => increment(1),
  doubleAsync
})(ChatView)
