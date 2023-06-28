import React from 'react';
import './SignUp.scss';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="accountSelect">
        <div className="accountSelectContainer">
          <button>개인회원 회원가입</button>
          <span>|</span>
          <button>사업자 회원가입</button>
        </div>
      </div>
      <div className="container individual">
        <h1>회원가입 (개인회원)</h1>
        <div className="form">
          <div className="userInfo">
            <input type="text" placeholder="이름" />
            <input type="text" placeholder="이메일 주소" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <div className="inputBox">
            <input type="checkbox" name="check1" />
            <label htmlFor="check1">본인은 14세 이상입니다.(필수)</label>
          </div>
          {TERMS.map(info => (
            <div className="inputBox" key={info.id}>
              <input type="checkbox" name={info.inputName} />
              <label htmlFor={info.inputName}>{info.labelText}</label>
              <textarea
                className="descritextareation"
                name="description"
                defaultValue={info.defaultValue}
              />
            </div>
          ))}
          <button>회원가입</button>
          <span>
            <Link to="/">이미 SJG 계정을 가지고 계십니까?</Link>
          </span>
        </div>
      </div>
      <div className="container business">
        <h1>회원가입 (사업자)</h1>
        <div className="form">
          <div className="userInfo">
            <input type="text" placeholder="사업자명" />
            <input type="text" placeholder="사업자 번호" />
            <input type="password" placeholder="비밀번호" />
          </div>
          {TERMS.map(info => (
            <div className="inputBox" key={info.id}>
              <input type="checkbox" name={info.inputName} />
              <label htmlFor={info.inputName}>{info.labelText}</label>
              <textarea
                className="descritextareation"
                name="description"
                defaultValue={info.defaultValue}
              />
            </div>
          ))}
          <button>회원가입</button>
          <span>
            <Link to="/">이미 SJG 계정을 가지고 계십니까?</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

const TERMS = [
  {
    id: 1,
    inputName: 'check2',
    labelText: '이용 약관에 동의합니다 (필수)',
    defaultValue:
      "SJG 온라인 몰 서비스 이용약관 SJG 온라인(이하'본 사이트')에방문해주신 고객님께 감사드립니다. 이 약관은 SJG가 운영하는 사이트에서 제공하는 인터넷 관련 서비스를 이용함에 있어 온라인 쇼핑몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. SJG는 아래의 약관, 개인정보처리방침 및 고객 서비스와 특정 기능, 게시물 또는 홍보와 관련하여 본 사이트 전체에서 제시하는 여타 조건과 정책에 따라, 이용자에게 본 사이트상 컨텐츠와 서비스를 제공합니다. 회원가입을 하시면 온라인 쇼핑 서비스와 함께 SJG의 소식을 확인하실 수 있습니다.",
  },
  {
    id: 2,
    inputName: 'check3',
    labelText: ' 개인정보수집 및 이용에 동의합니다(필수)',
    defaultValue:
      '개인정보수집항목: a) 성명, 이메일 주소, 전화번호, 주소, 기타 귀하가 당사 웹사이트에서 구매 시 알려주신 개인정보; b) 결제 정보 및 구매 정보; c) 구매 내역, 서비스 이용 기록 및 웹사이트 활동 내역 (예: 홈페이지에서 최근 본 내용 추적), 고객 클레임 및 분쟁 해결에 관한 정보.',
  },
  {
    id: 3,
    inputName: 'check4',
    labelText: '마케팅 정보 수신에 동의합니다 (선택)',
    defaultValue:
      'SJG는 SJG의 제품, 서비스 및 홍보 행사 관련 정보를 마케팅 목적으로, 고객님이 동의하시고 해지하기 전까지, 고객님께 이메일로 보내드립니다. 마케팅 목적의 개인정보 수집 및 이용에 동의하지 않으셔도 되고, 그러한 경우, 마케팅 정보를 수령하실 수 없습니다.',
  },
];
