import React, { Component, Fragment } from "react";

import { Menu } from "../../ChatBox/ChatBoxHeader/menu";

export const ProfileMenu = ({
  handleProfileSettingsClick,
  handleArchivedChatsClick,
  handleStarredMessagesClick,
  handleProfileClick,
  handleNewGroupClick
}) => {
  const labelsAndContext = {
    "New group": handleNewGroupClick,
    Profile: handleProfileClick,
    Archived: handleArchivedChatsClick,
    Starred: handleStarredMessagesClick,
    Settings: handleProfileSettingsClick,
    "Log out": _ => {}
  };

  return <Menu labelsAndContext={labelsAndContext} />;
};
