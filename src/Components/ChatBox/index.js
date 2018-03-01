import React, { Component, Fragment } from 'react';
import { Div } from 'glamorous';

import { ChatBoxHeader } from './ChatBoxHeader';
import { ChatBoxDisplay } from './ChatBoxDisplay';
import { ChatBoxFooter } from './ChatBoxFooter';
import ContextBox from './ContextBox';
import ModalDialog from '../ModalDialog';

class ShowContextBox extends Component {
  state = {
    showContextBox: false,
    contextBoxType: ''
  };

  handleFriendChatHeaderClick = _ =>
    this.setState({ showContextBox: true, contextBoxType: 'friendInfo' });

  handleSearchClick = _ =>
    this.setState({ showContextBox: true, contextBoxType: 'search' });

  handleCancelClick = _ =>
    this.setState({ showContextBox: false, contextBoxType: '' });

  componentWillReceiveProps(nextProps) {
    /* Close the context box when the user clicks on a different friend in the
       list while context box is still open */
    const { friendData: currentFriendData } = this.props;
    const { friendData: nextFriendData } = nextProps;
    if (currentFriendData && currentFriendData.id !== nextFriendData.id)
      this.setState({ showContextBox: false });
  }

  render() {
    const {
      handleFriendChatHeaderClick,
      handleSearchClick,
      handleCancelClick
    } = this;

    return this.props.children({
      ...this.state,
      handleFriendChatHeaderClick,
      handleSearchClick,
      handleCancelClick
    });
  }
}

class ShowModalDialog extends Component {
  state = {
    showModalDialog: false,
    modalDialogType: ''
  };

  handleDeleteChatClick = _ =>
    this.setState({ showModalDialog: true, modalDialogType: 'deleteChat' });

  handleClearChatClick = _ =>
    this.setState({ showModalDialog: true, modalDialogType: 'clearChat' });

  handleMuteClick = _ =>
    this.setState({ showModalDialog: true, modalDialogType: 'mute' });

  handleReportSpamClick = _ =>
    this.setState({ showModalDialog: true, modalDialogType: 'reportSpam' });

  handleBlockContactClick = _ =>
    this.setState({ showModalDialog: true, modalDialogType: 'blockContact' });

  handleModalCancel = _ =>
    this.setState({ showModalDialog: false, modalDialogType: '' });

  render() {
    const {
      handleModalCancel,
      handleDeleteChatClick,
      handleClearChatClick,
      handleMuteClick,
      handleBlockContactClick,
      handleReportSpamClick
    } = this;

    return this.props.children({
      ...this.state,
      handleModalCancel,
      handleDeleteChatClick,
      handleClearChatClick,
      handleMuteClick,
      handleBlockContactClick,
      handleReportSpamClick
    });
  }
}

export default class ChatBox extends Component {
  state = {
    // FIXME chatlog and messages represent the same thing yet they live seperated
    // There should only be one representation. Ideally these messages should be reflected in the
    // ↗️ This will be fixed once I start saving the messages somewhere, this is just temporary hack
    // I had to put together to mimick messages.
    messages: []
  };

  wrapperStyleWithoutContextBox = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    height: '100%'
  };
  wrapperStyleWithContextBox = {
    ...this.wrapperStyleWithoutContextBox,
    gridTemplateColumns: '5.7fr 4.3fr'
  };

  handleChatSend = message => {
    const freshMessages = [message, ...this.state.messages];
    if (message) this.setState({ messages: freshMessages });
  };

  render() {
    const { friendData, checkForLastChat, backgroundColor } = this.props;
    const { messages } = this.state;

    return (
      <ShowContextBox friendData={friendData}>
        {({
          showContextBox,
          contextBoxType,
          handleFriendChatHeaderClick,
          handleSearchClick,
          handleCancelClick
        }) => (
          <ShowModalDialog>
            {({
              showModalDialog,
              modalDialogType,
              handleModalCancel,
              handleDeleteChatClick,
              handleClearChatClick,
              handleMuteClick,
              handleBlockContactClick,
              handleReportSpamClick
            }) => (
              <Fragment>
                <Div
                  css={
                    showContextBox
                      ? this.wrapperStyleWithContextBox
                      : this.wrapperStyleWithoutContextBox
                  }
                >
                  <Div
                    css={{
                      display: 'grid',
                      gridTemplateRows: '10% 80% 10%',
                      height: '100vh'
                    }}
                  >
                    <Div>
                      {friendData ? (
                        <ChatBoxHeader
                          friendData={friendData}
                          handleSearchClick={handleSearchClick}
                          handleFriendChatHeaderClick={
                            handleFriendChatHeaderClick
                          }
                          handleDeleteChatClick={handleDeleteChatClick}
                          handleClearChatClick={handleClearChatClick}
                          handleMuteClick={handleMuteClick}
                        />
                      ) : null}
                    </Div>
                    <Div>
                      {friendData ? (
                        <ChatBoxDisplay
                          chatlog={friendData.chatlog}
                          messages={messages}
                          backgroundColor={backgroundColor}
                        />
                      ) : null}
                    </Div>
                    <Div>
                      {friendData ? (
                        <ChatBoxFooter
                          isInitialScreen={false}
                          handleChatSend={this.handleChatSend}
                          checkForLastChat={checkForLastChat}
                        />
                      ) : (
                        <ChatBoxFooter isInitialScreen={true} />
                      )}
                    </Div>
                  </Div>
                  {showContextBox ? (
                    <Div>
                      <ContextBox
                        type={contextBoxType}
                        name={friendData.name}
                        messagesLog={friendData.chatlog}
                        picturePath={friendData.picture}
                        handleCancelClick={handleCancelClick}
                        handleDeleteChatClick={handleDeleteChatClick}
                        handleReportSpamClick={handleReportSpamClick}
                        handleBlockContactClick={handleBlockContactClick}
                      />
                    </Div>
                  ) : null}
                </Div>

                {showModalDialog ? (
                  <ModalDialog
                    type={modalDialogType}
                    handleModalCancel={handleModalCancel}
                    name={friendData.name}
                  />
                ) : null}
              </Fragment>
            )}
          </ShowModalDialog>
        )}
      </ShowContextBox>
    );
  }
}
