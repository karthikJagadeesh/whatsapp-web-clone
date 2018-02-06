import React, { Component, Fragment } from "react";

import { Menu } from "../../ChatBox/ChatBoxHeader/menu";

export const ProfileMenu = ({
  handleProfileSettingsClick,
  handleArchivedChatsClick,
  handleStarredMessagesClick,
  handleProfileClick
}) => {
  const labelsAndContext = {
    "New group": _ => {},
    Profile: handleProfileClick,
    Archived: handleArchivedChatsClick,
    Starred: handleStarredMessagesClick,
    Settings: handleProfileSettingsClick,
    "Log out": _ => {}
  };

  return <Menu labelsAndContext={labelsAndContext} />;
};
