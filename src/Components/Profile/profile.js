import React, { Component } from "react";
import { Div } from "glamorous";

import { ProfileHeader } from "./profileHeader";
import { SearchBar } from "./searchBar";
import { FriendsList } from "./friendsList";

class Profile extends Component {
  constructor(context) {
    super(context);
    this.state = {
      searchBarValue: ""
    };
  }

  wrapperStyle = {
    display: "grid",
    gridTemplateRows: "10% 6% 84%",
    height: "94vh",
    borderRight: "1px solid rgba(0, 0, 0, 0.05)"
  };

  profileHeaderWrapperStyle = {
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)"
  };

  searchBarWrapperStyle = { ...this.profileHeaderWrapperStyle };

  handleInputChange = ({ target }) => {
    this.setState({ searchBarValue: target.value });
  };

  render() {
    return (
      <Div css={this.wrapperStyle}>
        <Div css={this.profileHeaderWrapperStyle}>
          <ProfileHeader profileData={this.props.profileData} />
        </Div>
        <Div css={this.searchBarWrapperStyle}>
          <SearchBar
            handleInputChange={this.handleInputChange}
            searchBarValue={this.state.searchBarValue}
          />
        </Div>
        <Div>
          <FriendsList
            searchBarValue={this.state.searchBarValue}
            friendsList={this.props.profileData.friends}
            handleListItemClick={this.props.handleListItemClick}
          />
        </Div>
      </Div>
    );
  }
}

export { Profile };
