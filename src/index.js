import React, { Component } from "react";

const objPreviewStyle = {
  height: "400px",
  width: "100%",
};

const spanPreviewStyle = {
  color: "rgb(128, 144, 162)",
  fontSize: "12px",
};

class FilePreview extends Component {
  constructor(props) {
    super();
    //this.menuItems = props.menuItems ? props.menuItems : [];
    this.state = { preview: "noURL" };
  }

  componentWillMount() {
    let imageUrl = this.props.imageUrl ? this.props.imageUrl : "";
    if (this.props.file) {
      try {
        imageUrl = URL.createObjectURL(this.props.file);
      } catch (err) {
        console.log(err);
      }
    }
    this.setState({ preview: imageUrl === "" ? "noURL" : "imgPreview" });
  }

  render() {
    const { imageUrl } = this.props;
    const { preview } = this.state;

    return (
      <div
        style={{
          width: "100%",
          flexDirection: "column",
          backgroundColor: "#fff",
          border: "1px solid #c4cdd6",
          borderRadius: "4px",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
        }}
      >
        {preview === "imgPreview" ? (
          <img
            src={imageUrl}
            onError={() => this.setState({ preview: "docPreview" })}
            style={objPreviewStyle}
          />
        ) : preview === "docPreview" ? (
          <object style={objPreviewStyle} data={imageUrl}></object>
        ) : (
          <div
            style={{
              ...objPreviewStyle,
              paddingLeft: "35%",
              paddingTop: "12em",
            }}
          >
            <div style={{ display: "inline-grid" }}>
              <svg
                color="grey"
                viewBox="0 0 24 24"
                style={{
                  position: "relative",
                  userSelect: "none",
                  display: "inline-block",
                  height: "42px",
                  fill: "grey",
                  paddingLeft: "35px",
                }}
              >
                <g>
                  <path d="M2.25 24A2.252 2.252 0 0 1 0 21.75V2.25A2.252 2.252 0 0 1 2.25 0h19.5A2.252 2.252 0 0 1 24 2.25v19.5A2.252 2.252 0 0 1 21.75 24H2.25zm0-22.5a.75.75 0 0 0-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 0 0 .75-.75V2.25a.75.75 0 0 0-.75-.75H2.25z"></path>
                  <path d="M16.5 11.25c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25zM15.655 19.858a.746.746 0 0 1-.699-.478 7.507 7.507 0 0 0-1.132-1.96l-.021-.026a7.364 7.364 0 0 0-3.819-2.495 7.485 7.485 0 0 0-1.979-.268 7.442 7.442 0 0 0-3.674.98.754.754 0 0 1-1.023-.281.751.751 0 0 1 .28-1.023 8.936 8.936 0 0 1 4.415-1.177 8.97 8.97 0 0 1 2.376.322 8.892 8.892 0 0 1 4.1 2.441 5.243 5.243 0 0 1 2.902-.879c1.219 0 2.402.427 3.331 1.204a.743.743 0 0 1 .266.509.743.743 0 0 1-.172.548.747.747 0 0 1-1.056.094 3.699 3.699 0 0 0-2.369-.855c-.692 0-1.375.195-1.957.555a8.833 8.833 0 0 1 .928 1.769.747.747 0 0 1-.697 1.02z"></path>
                </g>
              </svg>

              <span style={spanPreviewStyle}>No Preview Available</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FilePreview;
