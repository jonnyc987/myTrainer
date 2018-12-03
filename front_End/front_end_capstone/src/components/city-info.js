import React, { PureComponent } from "react";

export default class CityInfo extends PureComponent {
  moveToStart = id => {
    this.props.history.push(`/gym/${id}`);
  };

  render() {
    const { info } = this.props;
    return (
      <div>
        <div onClick={() => this.moveToStart(info.id)}>
          <h5>{info.name}</h5>{" "}
          <p >Trainer List</p>
        
        <img width={240} src={info.image} alt="hi" />
        </div>
      </div>
    );
  }
}
