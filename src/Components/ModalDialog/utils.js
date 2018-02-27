import glamorous from "glamorous";

export const Modal = glamorous.div(
  {
    display: "grid",
    gridTemplateRows: "4fr 6fr",
    width: "350px",
    height: "150px",
    background: "#FFFFFF",
    boxShadow:
      "0 17px 50px 0 rgba(0, 0, 0, 0.19), 0 12px 15px 0 rgba(0, 0, 0, 0.24)",
    borderRadius: "4px",
    alignSelf: "center",
    justifySelf: "center",
    fontSize: "0.9em"
  },
  ({ type }) => {
    switch (type) {
      case "blockContact":
        return {
          gridTemplateRows: "3fr 1fr 5fr",
          height: "180px",
          width: "460px"
        };
      case "clear":
        return {
          gridTemplateRows: "3fr 1fr 5fr",
          height: "180px",
          width: "400px"
        };
      case "mute":
        return {
          gridTemplateRows: "3fr 3fr 4fr",
          height: "260px"
        };
      case "reportSpam":
        return {
          height: "180px",
          width: "400px"
        };
    }
  }
);
export const ModalButton = glamorous.div(
  {
    width: "100px",
    height: "36px",
    cursor: "pointer",
    color: "#08c65b",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ":hover": {
      boxShadow:
        "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)"
    }
  },
  ({ type }) => {
    switch (type) {
      case "delete":
        return {
          background: "#08c65b",
          color: "#ffffff",
          ":hover": {
            background: "#0cb757",
            boxShadow:
              "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)"
          }
        };

      case "cancelReportSpam":
        return {
          justifySelf: "center"
        };

      case "blockContact":
        return {
          width: "200px"
        };

      case "reportSpam":
        return {
          background: "#08c65b",
          color: "#ffffff",
          ":hover": {
            background: "#0cb757",
            boxShadow:
              "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)"
          },
          width: "200px"
        };
    }
  }
);
export const ModalButtonContainer = glamorous.div(
  {
    display: "grid",
    gridTemplateColumns: "5fr 5fr",
    width: "70%",
    justifySelf: "end",
    alignSelf: "center"
  },
  ({ type }) => {
    switch (type) {
      case "reportSpam":
        return {
          gridTemplateColumns: "4fr 6fr",
          width: "100%",
          justifySelf: "center"
        };

      case "blockContact":
        return {
          width: "90%",
          justifySelf: "center",
          gridTemplateColumns: "3fr 4fr 3fr"
        };
    }
  }
);
export const ModalHeader = glamorous.div(
  {
    width: "90%",
    alignSelf: "center",
    justifySelf: "center",
    color: "#4b4b4b"
  },
  ({ type }) => {
    switch (type) {
      case "mute":
      case "blockContact":
        return {
          fontSize: "1.5em"
        };
    }
  }
);
export const ModalWrapper = glamorous.div({
  top: "0",
  left: "0",
  display: "grid",
  gridTemplateRows: "1fr",
  position: "absolute",
  zIndex: "10",
  height: "100vh",
  width: "100vw",
  background: "rgba(255, 255, 255, 0.8)"
});
