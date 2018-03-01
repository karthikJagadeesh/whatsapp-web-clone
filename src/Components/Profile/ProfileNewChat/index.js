import React, { Component } from "react";
import { Div } from "glamorous";

import { SearchBar } from "../SearchBar";
import { Header } from "../ProfileInfo";
import AllFriendsList from "./allFriendsList";
import { allFriendsDataUrl, fetchData } from "../../../network";

export default class ProfileNewChat extends Component {
  state = {
    allFriendsList: [],
    searchBarValue: ""
  };
  isComponentMounted = true;

  handleInputChange = ({ target }) =>
    this.setState({ searchBarValue: target.value });

  async componentDidMount() {
    try {
      const allFriendsList = await fetchData(allFriendsDataUrl);
      if (this.isComponentMounted) this.setState({ allFriendsList });
    } catch (error) {
      console.error(error);
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {
    const {
      handleProfileInfoBackClick,
      handleNewGroupClick,
      handleFriendsListClick
    } = this.props;
    const { allFriendsList, searchBarValue } = this.state;
    return (
      <Div
        css={{
          display: "grid",
          gridTemplateRows: "16% 8% 76%",
          height: "100vh"
        }}
      >
        <Header
          title="New Chat"
          handleProfileInfoBackClick={handleProfileInfoBackClick}
          style={{ height: "100%" }}
        />
        <SearchBar
          placeholder="Search contacts"
          handleInputChange={this.handleInputChange}
          searchBarValue={searchBarValue}
        />
        <Div
          css={{
            height: "100%",
            overflowY: "auto"
          }}
        >
          <AllFriendsList
            allFriendsList={allFriendsList}
            searchBarValue={searchBarValue}
            handleNewGroupClick={handleNewGroupClick}
            handleFriendsListClick={handleFriendsListClick}
          />
        </Div>
      </Div>
    );
  }
}
