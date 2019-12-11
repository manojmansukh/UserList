import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import { ListItem } from 'react-native-elements';

export default class ScrollingList extends React.Component {
  state = {
    seed: 1,
    page: 1,
    users: [],
    isLoading: false,
    isRefreshing: false,
  };

  loadUsers = () => {
    const { users, seed, page } = this.state;
    this.setState({ isLoading: true });

    fetch(`https://userdetails7004.s3.ap-south-1.amazonaws.com/list.json`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: page === 1 ? res : [...users, ...res],
          isRefreshing: false,
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleRefresh = () => {
    this.setState({
      seed: this.state.seed + 1,
      isRefreshing: true,
    }, () => {
      this.loadUsers();
    });
  };

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.loadUsers();
    });
  };

  componentDidMount() {
    this.loadUsers();
  };

  render() {
    const { users, isRefreshing } = this.state;

    return (
      <View style={s.scene}>
        {
          users &&
            <FlatList
              data={users}
              renderItem={({item}) => (
                <ListItem
                  roundAvatar
                  
                  title={item.firstName+" "+item.lastName}
                  subtitle={item.place}
                  //avatar={{uri: item.picture.thumbnail}}
                />
              )}
              keyExtractor={i => i.firstName}
              refreshing={isRefreshing}
              onRefresh={this.handleRefresh}
              onEndReached={this.handleLoadMore}
              onEndThreshold={0}
            />
        }
      </View>
    )
  }
}

const s = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 25,
  },
  user: {
    width: '100%',
    backgroundColor: '#333',
    marginBottom: 10,
    paddingLeft: 25,
  },
  userName: {
    fontSize: 17,
    paddingVertical: 20,
    color: '#fff'
  }
});

 