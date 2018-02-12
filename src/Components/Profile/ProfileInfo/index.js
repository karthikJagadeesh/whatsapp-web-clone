import React, { Component } from "react";
import { Div, Span, Input } from "glamorous";
import { Subscriber } from "react-broadcast";

import MdArrowBack from "react-icons/lib/md/arrow-back";
import MdEdit from "react-icons/lib/md/edit";
import MdCheck from "react-icons/lib/md/check";

import { SmilieBoard } from "../../ChatBox/ChatBoxFooter/smilieBoard";
import { ProfilePictureCard } from "../../ContextBox/contactInfoResults";

const Title = ({ handleProfileInfoBackClick, title }) => {
  return (
    <Div
      css={{
        color: "white",
        fontSize: "1.1em",
        fontWeight: "600",
        height: "40%",
        alignSelf: "end",
        display: "grid",
        gridTemplateColumns: "2fr 8fr"
      }}
    >
      <Div
        css={{
          justifySelf: "center",
          alignSelf: "center",
          ":hover": {
            cursor: "pointer"
          }
        }}
        onClick={handleProfileInfoBackClick}
      >
        <MdArrowBack size={25} color="white" />
      </Div>
      <Span alignSelf="center">{title}</Span>
    </Div>
  );
};

export const Header = ({
  handleProfileInfoBackClick,
  title,
  StarredMessagesMenu = ""
}) => {
  return (
    <Div
      css={{
        background: "#00bfa5",
        height: "16%",
        display: "grid",
        gridTemplateColumns: "8fr 2fr"
      }}
    >
      <Div
        css={{
          alignSelf: "center",
          display: "grid",
          height: "70%"
        }}
      >
        <Title
          handleProfileInfoBackClick={handleProfileInfoBackClick}
          title={title}
        />
      </Div>
      <Div
        css={{
          alignSelf: "end",
          display: "grid",
          height: "40%"
        }}
      >
        {StarredMessagesMenu ? <StarredMessagesMenu /> : null}
      </Div>
    </Div>
  );
};

const Billboard = _ => (
  <Div
    css={{
      height: "14%",
      display: "grid",
      gridTemplateColumns: "1fr",
      color: "#929fa6",
      userSelect: "none"
    }}
  >
    <Span css={{ alignSelf: "center", justifySelf: "center", width: "80%" }}>
      This is not your username or pin. This name will be visible to your
      WhatsApp contacts
    </Span>
  </Div>
);

const SingleDeckContainer = ({
  title,
  info,
  onClick,
  editMode,
  inputValue,
  inputRemainingChars,
  handleInputChange,
  handleInputAcceptClick
}) => (
  <Div
    css={{
      height: "15%",
      background: "#fff",
      display: "grid",
      gridTemplateRows: "5fr 5fr",
      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
      userSelect: "none"
    }}
  >
    <Div
      css={{
        alignSelf: "center",
        justifySelf: "center",
        width: "80%",
        color: "#128c7e",
        fontWeight: "100"
      }}
    >
      {title}
    </Div>
    {editMode ? (
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "center",
          width: "80%",
          color: "#bbb",
          display: "grid",
          gridTemplateColumns: "7fr 1fr 1fr 1fr",
          gradGap: "2px",
          borderBottom: "2px solid #00bfa5",
          paddingBottom: "8px"
        }}
      >
        <Input
          css={{
            border: "none",
            outline: "none",
            fontSize: "1em",
            color: "#4b4b4b"
          }}
          spellcheck="false"
          type="text"
          onChange={handleInputChange}
          onFocus={({ target }) => {
            const length = target.value.length;
            target.setSelectionRange(length, length);
          }}
          value={inputValue}
          autoFocus
        />
        <Span justifySelf="center">{inputRemainingChars}</Span>
        <Span css={{ justifySelf: "center", ":hover": { cursor: "pointer" } }}>
          <SmilieBoard color="#bbb" size={22} />
        </Span>
        <Span
          css={{ justifySelf: "center", ":hover": { cursor: "pointer" } }}
          onClick={handleInputAcceptClick}
        >
          <MdCheck color="#bbb" size={22} />
        </Span>
      </Div>
    ) : (
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "center",
          width: "80%",
          color: "#494949",
          display: "grid",
          gridTemplateColumns: "9fr 1fr"
        }}
      >
        <Span>{info}</Span>
        <Span
          css={{ ":hover": { cursor: "pointer" } }}
          onClick={_ => onClick(info)}
          title="Edit"
        >
          <MdEdit size={25} color="#949a9d" />
        </Span>
      </Div>
    )}
  </Div>
);

export default class ProfileInfo extends Component {
  state = {
    nameEditMode: false,
    statusEditMode: false,
    inputNameValue: "",
    inputStatusValue: "",
    inputNameRemainingChars: 25,
    inputStatusRemainingChars: 180
  };

  handleEditNameClick = name =>
    this.setState({
      nameEditMode: true,
      inputNameValue: name,
      inputNameRemainingChars: 25 - name.length
    });
  handleEditStatusClick = status =>
    this.setState({
      statusEditMode: true,
      inputStatusValue: status,
      inputStatusRemainingChars: 180 - status.length
    });
  handleNameInputChange = ({ target }) => {
    const constrainedValue = target.value.substring(0, 25);
    this.setState({
      inputNameValue: constrainedValue,
      inputNameRemainingChars: 25 - constrainedValue.length
    });
  };
  handleStatusInputChange = ({ target }) => {
    const constrainedValue = target.value.substring(0, 180);
    this.setState({
      inputStatusValue: constrainedValue,
      inputStatusRemainingChars: 180 - constrainedValue.length
    });
  };
  handleInputNameAcceptClick = _ => this.setState({ nameEditMode: false });
  handleInputStatusAcceptClick = _ => this.setState({ statusEditMode: false });

  render() {
    const { handleProfileInfoBackClick } = this.props;
    const {
      nameEditMode,
      statusEditMode,
      inputNameValue,
      inputStatusValue,
      inputNameRemainingChars,
      inputStatusRemainingChars
    } = this.state;
    return (
      <Div
        css={{
          height: "100%",
          overflowY: "auto"
        }}
      >
        <Header
          handleProfileInfoBackClick={handleProfileInfoBackClick}
          title="Profile"
        />
        <Subscriber channel="profile">
          {({ profileData }) => (
            <ProfilePictureCard
              style={{ background: "#f7f7f7" }}
              picturePath={profileData.picture}
            />
          )}
        </Subscriber>
        <Subscriber channel="profile">
          {({ profileData }) => (
            <SingleDeckContainer
              title="Your Name"
              info={profileData.name}
              onClick={this.handleEditNameClick}
              editMode={nameEditMode}
              handleInputChange={this.handleNameInputChange}
              inputValue={inputNameValue}
              inputRemainingChars={inputNameRemainingChars}
              handleInputAcceptClick={this.handleInputNameAcceptClick}
            />
          )}
        </Subscriber>
        <Billboard />
        <Subscriber channel="profile">
          {({ profileData }) => (
            <SingleDeckContainer
              title="About"
              info={profileData.status}
              onClick={this.handleEditStatusClick}
              editMode={statusEditMode}
              handleInputChange={this.handleStatusInputChange}
              inputValue={inputStatusValue}
              inputRemainingChars={inputStatusRemainingChars}
              handleInputAcceptClick={this.handleInputStatusAcceptClick}
            />
          )}
        </Subscriber>
      </Div>
    );
  }
}
