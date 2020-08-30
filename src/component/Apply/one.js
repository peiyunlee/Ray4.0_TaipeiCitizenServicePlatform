import React from "react";
import { withRouter } from "react-router";

class StepOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        "1. 利用「市民服務大平臺」網路申請服務，如需交付辦理結果者，例如：謄本、證照等等，一律以郵遞方式辦理，所需郵資須由申請人負擔。<br />2. 利用「市民服務大平臺」(簡稱本平臺)網路申請服務之申請人如需繳交相關費用與郵資，可由本平臺提供之繳費方式擇一辦理繳費。申請人必須於受理機關規定之期限內繳費，若逾期仍未繳交，本平臺得自動註銷該申請案。<br />3. 利用「市民服務大平臺」網路申請服務，如未依受理機關規定，於一定期間內領取辦理結果或補足申請案件所需證明文件時，受理機關得註銷該申請案。<br />4. 申請人如因重覆繳款、溢繳、繳款金額不足或其他特殊事由致必須辦理退費時，須親至受理機關辦理退費申請，「市民服務大平臺」不接受網路退費申請。<br />5. 申請人於辦理案件申請時，須詳填聯絡電話及住址等通訊資訊，以利資料處理和郵寄作業進行，若因申請人未填寫個人通訊資訊或資訊填寫錯誤致受理機關無法正確完成申請案件處理時，該申請案件延遲處理或無法處理之後果由申請人自行承擔。<br />6. 申請人用「市民服務大平臺」網路申請內容之傳訊，如經不可抗拒之外力(如斷電、斷線、網路傳輸壅塞等)干擾而導致傳送時間延遲，甚或無法接收、傳送致影響申請人權益時，各受理機關不負任何責任。<br />7. 利用「市民服務大平臺」網路申請服務，申請人如不依受理機關規定於一定期間內領取辦理結果或補足申請案件所需證明文件或繳費，受理機關得於一定期間內終止申請人利用「市民服務大平臺」辦理申請案件權利。<br />8. 申請人使用本網路申請服務，有下列情形之一者，臺北市政府得終止其使用，並由申請人負相關之法律責任：<br />8.1. 有竊取、更改、破壞他人資訊情事者。<br />8.2. 有擅自複製他人資訊轉售、轉載情事者。<br />8.3. 未經對方同意，擅自寄發廣告信至其信箱者。<br />8.4. 任意散發垃圾信件者。<br />8.5. 蓄意破壞平臺信箱或通信設備者。<br />8.6. 散播電腦病毒者。8.7. 散播不實謠言或誹謗性言論者。<br />8.8. 有盜用他人資訊申請案件者。<br />8.9. 所為言論違背公共秩序或善良風俗者。<br />8.10. 擷取非經所有者正式開放或授權之資源。<br />8.11. 其他有危害通信或違反法令之情事者。<br />9. 申請人因本規定第7點、第8點之規定而終止其「市民服務大平臺」辦理申請案件權利時，得提出申訴，如經「市民服務大平臺」管理機關調查認為有理由時，得恢復其權利。<br />10.申請人利用「市民服務大平臺」網路時，可能會因其所申請之項目而連結至其他網站，台北市政府與其他網站之經營或維運無涉，亦不對其他網站之任何行為負責。",
      ],
      nextstep: false,
    };

    this._renderHTMLText = this._renderHTMLText.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  render() {
    return (
      <div className="step step-1">
        <div className="step1-content-wrapper">
          <div className="content-bg scrollbar">
            <div className="content-title">網路服務規定</div>
            <div
              className="content-p"
              dangerouslySetInnerHTML={this._renderHTMLText(
                this.state.content[0]
              )}
            ></div>
          </div>
        </div>
        <label className="step1-agree">
          <input type="checkbox" onChange={this._handleInputChange} />
          我已閱讀，並已清楚上述內容
        </label>
        <div className="step-btn-wrapper">
          <button
            className="step-btn step-btn-left"
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            回場地介紹
          </button>
          <button
            className={
              this.state.nextstep
                ? "step-btn step-btn-right"
                : "step-btn step-btn-right step-btn-right-hide"
            }
            onClick={() => {
              this.props.history.push("/apply/step2");
            }}
          >
            下一步
          </button>
        </div>
      </div>
    );
  }

  _handleInputChange() {
    this.setState({ nextstep: !this.state.nextstep });
  }

  _renderHTMLText(text) {
    return {
      __html: text,
    };
  }
}

export default withRouter(StepOne);
