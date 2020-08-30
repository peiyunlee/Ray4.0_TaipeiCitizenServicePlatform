import React from "react";
import { withRouter } from "react-router";

import code_one from "../../assets/images/code.jpg";
import code_two from "../../assets/images/code-2.jpg";

class StepTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: "",
      number: "",
      phone: "",
      email: "",
      address_l: "",
      address_m: "",
      address_s: "",
      address_x: "",
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="step step-2">
        <form onSubmit={this._handleSubmit} className="step2-form">
          <div className="form-title">請填寫租借資料</div>
          <div className="form-required">標示 * 為必填欄位</div>
          <section>
            <label className="label label-odd">
              申請人姓名<span className="required-text">*</span>
              <input
                name="name"
                required
                type="text"
                value={this.state.name}
                onChange={this._handleChange}
              />
            </label>
            <label className="label label-even">
              申請人身分證字號<span className="required-text">*</span>
              <input
                name="number"
                required
                type="text"
                value={this.state.number}
                onChange={this._handleChange}
              />
            </label>
            <label className="label label-odd">
              申請人聯絡電話<span className="required-text">*</span>
              <input
                name="phone"
                required
                type="tel"
                value={this.state.phone}
                onChange={this._handleChange}
              />
            </label>
            <label className="label label-even">
              申請人電子郵件<span className="required-text">*</span>
              <input
                name="email"
                required
                value={this.state.email}
                onChange={this._handleChange}
                type="email"
              />
            </label>
            <label className="label label-odd label-select">
              聯絡／戶籍地址<span className="required-text">*</span>
              <div className="select-wrapper">
                <select
                  name="address_l"
                  required
                  value={this.state.address_l}
                  onChange={this._handleChange}
                >
                  <option defaultValue value="">
                    請選擇縣(市)
                  </option>
                  <option value="臺北市">臺北市</option>
                  <option value="臺北市">臺北市</option>
                  <option value="臺北市">臺北市</option>
                </select>
                <select
                  name="address_m"
                  required
                  value={this.state.address_m}
                  onChange={this._handleChange}
                >
                  <option defaultValue value="">
                    請選擇鄉鎮(區)
                  </option>
                  <option value="中正區">中正區</option>
                  <option value="中正區">中正區</option>
                  <option value="中正區">中正區</option>
                </select>
                <select
                  name="address_s"
                  required
                  value={this.state.address_s}
                  onChange={this._handleChange}
                >
                  <option defaultValue value="">
                    請選擇街道路
                  </option>
                  <option value="市民大道一段">市民大道一段</option>
                  <option value="市民大道一段">市民大道一段</option>
                  <option value="市民大道一段">市民大道一段</option>
                </select>
                <input
                  name="address_x"
                  required
                  value={this.state.address_x}
                  onChange={this._handleChange}
                  className="input-address"
                  type="text"
                />
              </div>
            </label>
            <label className="label label-even label-select">
              是否為特殊身份
              <span className="special-text">
                (身心障礙 / 65歲以上 / 本里里民)
              </span>
              <span className="required-text">*</span>
              <div className="select-wrapper select-special-wrapper">
                <select required id="select-special">
                  <option defaultValue value="">
                    請選擇
                  </option>
                  <option value="是">是</option>
                  <option value="否">否</option>
                </select>
              </div>
            </label>
          </section>
          <section className="section-code">
            <label className="label label-even">
              <input
                required
                type="text"
                placeholder="請輸入驗證碼"
                onChange={this.handleChange}
              />
              <img src={code_one} alt="" />
              <img src={code_two} alt="" />
            </label>
          </section>
          <div className="step-btn-wrapper">
            <button
              className="step-btn step-btn-left"
              onClick={() => {
                this.props.history.goBack();
              }}
            >
              上一步
            </button>
            <button type="submit" className="step-btn step-btn-right">
              下一步
            </button>
          </div>
        </form>
      </div>
    );
  }

  _handleSubmit() {
    const o = {
      name: this.state.name,
      number: this.state.number,
      phone: this.state.phone,
      email: this.state.email,
      address:
        this.state.address_l +
        this.state.address_m +
        this.state.address_s +
        this.state.address_x,
    };
    this.props.setPropsValue(o, "info");
    this.props.history.push("/apply/step3");
  }

  _handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
}

export default withRouter(StepTwo);
