/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class MyFirstApp extends React.Component {
  render(): React$Node {
    return <Text>My first React Native app</Text>;
  }
}

class Eats extends React.Component {
  render(): React$Node {
    return (
        <Text>
          Recommended Eats @ RP{'\n'}
          {this.props.name}{'\n'}
          {this.props.location};
        </Text>
    );
  };
};

class Clock extends React.Component {
  render() {
    let location = this.props.name;
    var time = moment().tz(location).format('HH mm Z');
    return <Text>{location} - {time}</Text>;
  }
}

const WorldClock = () => {
  return (
      <View>
        <Clock name="Asia/Singapore" />
        <Clock name="Europe/London" />
        <Clock name="America/New_York" />
        <Clock name="Europe/Oslo" />
      </View>
  );
};

const SemModule = (props) => {
  return (
    <Text>
      My modules this semester{'\n'}
      {props.day} - {props.modCode}{'\n'}
    </Text>
  );
};

const Welcome = () => {
  return <Text>Welcome to C308 Web Frameworks!</Text>;
};

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>


              <Welcome />
              <MyFirstApp />
              <SemModule day="Monday" modCode="C273" />
              <SemModule day="tuesday" modCode="C308" />
              <SemModule day="Thursday" modCode="C348" />

              <Eats name="Crowded Bowl" location="W4/W6 lawn Canteen" />

              <WorldClock />

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
