# Project SJG
![](https://velog.velcdn.com/images/jjinichoi/post/43622e4f-c63b-4c11-a5f4-116f16e8c4e4/image.png)

시연 영상 : https://www.youtube.com/embed/20Fx8f-kL6g



#### \*[aesop](https://www.aesop.com/kr/) 웹사이트를 모델링한 프로젝트입니다.

## 🐱 개발 기간 및 인원

- 개발 기간 : 2023/06/26 ~ 2023/07/07
  
- 개발 인원 : 프론트엔드 2명 , 백엔드 4명
  - Product Manager: 김수정(F)
  - Project Manager: 김상원(B)
  - Teammates: 서동희(B), 이주현(B), 정성남(B), 최진이(F)


### 💡 서비스 소개
- 서비스명 : SJG
- 판매상품 : 타일(Porcelain, Walltile, Floortile)
- 고객 : 인테리어에 관심이 많은 개인 구매자, 대리구매를 하는 타일 사업자
- 컨셉
  - 이솝 사이트를 기본 베이스를 하여 친환경에 초첨을 두며 만들었습니다.
  - 이솝 사이트의 레이아웃을 토대로 최대한 비슷하게 만들었으며
실제 사이트를 사용했을때 불편한점을 저희가 기능을 추가하여 사용자의 편의성을 상승시켰습니다.
    

### 💻 구현 기능
|기능|FE|BE|
|---|:---:|:---:|
|회원가입|최진이|서동희| 
|로그인|최진이|이주현| 
|메인페이지|최진이|| 
|상품리스트|최진이|정성남|
|세부상품|김수정|정성남|
|데이터베이스등록|ALL|김상원|
|회원가입email전송|최진이|서동희|
|회원정보, 주문내역 조회|김수정,최진이|서동희|
|장바구니 등록 및 수정|최진이|이주현|  
|상품 결제 및 주문서|김수정|이주현| 

![](https://velog.velcdn.com/images/jjinichoi/post/c2511fa1-068b-4c58-971b-3a8c8f62de57/image.png)
- Backlog : 프로젝트 기간 중 구현 할 기능
- To-Do(This Sprint) : 일주일 간 구현할 기능
- In Progress : 현재 구현중인 기능
- In Review : 구현 후 리뷰 받고 있는 기능
- Done : 구현 완료 됨 기능

### 📚 기술 스택


#### Frontend
- JavaScript
- React
- esLint
- Prettier


#### Backend

- JavaScript
- Node.js
- MySQL


#### ⚙️ 협업툴

- git&github
- slack
- Trello
- Notion
- VScode

---
## 🐱 SJG 타일을 선정한 이유
**1.제품의 비슷한 특징**
건물 자재인 타일은 화장품보다 우리의 삶의 질에 더 많은 영향을 끼치며
한번 구매하면 재구매까지 오랜 시간이 걸린다는 점에서 공통점이 있다고 생각했다.

**2. 건강과 환경을 내세운 전략**
또한 이솝은 피부에 친화적이고 향기가 좋다는 특징이 있는데 SJG 타일 또한 라돈이 검출되지않는 타일로 친환경적이고 과거의 밋밋한 타일에서 벗어난 다양한 무늬가 장점을 내세우기로 했다.

**3. 다양한 구매자**
화장품의 경우 한번 구매하면 일정기간 구매하지 않는다는 특징이있는데, 이 경우 매출의 하락으로 이어질 수있다.
타일 또한 일정기간 매출이 발생하지않는 특징이 있는데
이 경우 개인시행자도 구매할 수 있도록하여 고객층을 다양화하였다.

---
## 🐱 내가 구현한 기능 중 중요 코드!
### 🥨 타입에 따라 회원가입 & 로그인
(로그인과 비슷하기 때문에 제일 고생했던 회원가입으로~~)

**회원가입**

![](https://velog.velcdn.com/images/jjinichoi/post/31c55612-f355-43d1-a9ba-4895561db349/image.gif)

- 처음 버튼을 누를때 버튼 `input`값을 `title`에 넣어주고 `title`에 들어온 값이 `"개인 회원가입"`인지 `"사업자 회원가입"`인지에 따라 map함수를 이용하여 다른 배열을 돌 수 있도록 조건문을 주었다. 그 후 들어온 값에 따라 `typeId`에 할당하여 `input`값들과 함께 DB에 POST요청을 하였다.
![](https://velog.velcdn.com/images/jjinichoi/post/a6c7e70b-304e-4f2a-96c1-a4cf4973d9cf/image.png)

- 버튼을 누를 시 버튼 form이 없어지면서 회원가입 form을 나오게 하는 방법으로 inline style로 `display`로 state값을 주었는데, <span style="color:indianred">리팩토링을 통하여 `&&`연산자를 사용하였다.</span> **(inline style를 지양하자!!!)**

- 처음 사업자와 개인을 form을 따로 작성하여 코드가 길었었는데, 리팩토링을 하여 <span style="color:indianred">컴포넌트 분리</span>를 하여 props로 데이터를 넘겨주었다.
![](https://velog.velcdn.com/images/jjinichoi/post/54ef1019-3230-42db-acd2-e1efdb234a94/image.png)![](https://velog.velcdn.com/images/jjinichoi/post/6eb67b70-2fff-4ef6-882a-cab07b0ae2c4/image.png)

### 🥨 메인 슬라이드
![](https://velog.velcdn.com/images/jjinichoi/post/8f331c7f-f744-4d1f-b8bc-61e09bfe4d12/image.gif)
- 메인에서는 따로 data를 받을 것은 없었지만 슬라이드 기능을 구현하여 너무 정적이지만은 않은 페이지로 구성하였다.

- 라이브러리를 사용하지 않고 바닐라로 처음 구현해본 슬라이드 효과...처음에 어떻게 해야하나 막막했지만 불타는 서칭🔥 을 통해 버튼 클릭시 전체 px값을 오른쪽 왼쪽으로 이동하여 슬라이드를 구현한다는 것을 알게되었고 해당 글을 참고하여 아래와 같이 구현을 성공하였다!

- 해당 기능 구현 후 우리의 메인의 슬라이드는 이미지의 크기가 다르기 때문에 레이아웃이 깨지는 현상이 발생되었고 <span style="color:indianred">삼항연산자를 사용하여 다른 px값을 주어 레이아웃이 깨지지 않도록 구현하였다.</span>
![](https://velog.velcdn.com/images/jjinichoi/post/ec8998c5-9b13-4a33-848c-1403fb1ba71d/image.png)

### 🥨 useParams를 사용한 상품리스트 페이지 탭 구현
![](https://velog.velcdn.com/images/jjinichoi/post/ad18f9e0-0dfa-4493-bbf3-b17190049df0/image.gif)

- <span style="color:indianred">useParams를 사용하여</span> API의 `sub_categoty_id`를 가져와 탭 클릭 시 `sub_categoty_id`의 값이 나올 수 있도록 하였고 제품 클릭 시 상품 상세 페이지에 상품 name값이 넘어가도록 해주어 클릭한 상품에 대한 정보가 나오도록 구현하였다.
![](https://velog.velcdn.com/images/jjinichoi/post/d4921ecc-174d-4aac-8466-648b6543e041/image.png)![](https://velog.velcdn.com/images/jjinichoi/post/76b200e4-6416-47ab-be19-39b0165401c5/image.png)

### 🥨 장바구니(GET, DELETE, PATCH method)
(제일 어려웠던 짱빠꾸닛...)

- 처음에 상품상세페이지에서 cart에 저장한 데이터를 장바구니에 get으로 보내주고, post로 oder페이지에 주문 목록 수량이나 삭제된것을 보내주는 것인 줄 알고 로직을 파악하는 것에 대해 어려움이 많았다.

- 팀원들의 친절한 설명으로 로직을 빠르게 파악할 수 있었고, 아래와 같은 로직으로 장바구니 페이지를 구현하였다.
1. 상품상세페이지에서 cart에 저장한 데이터를 장바구니에 <span style="color:indianred">GET요청</span>
2. 특정 항목을 삭제할때 마다 해당id를 <span style="color:indianred">DELETE요청</span>
3. 그 후 주문하기 버튼 클릭 시 <span style="color:indianred">PATCH요청</span>을 통해 모든 제품의 id와 quantity값을 보내어 보내어 cart에 수정된 값을 저장

- 제일 시행착오가 많았던 만큰 뿌듯함이 제일 컸던 페이지...🤍

**GET, DELETE**

![](https://velog.velcdn.com/images/jjinichoi/post/12781636-0f46-4256-9f6e-832112dc24cb/image.gif)![](https://velog.velcdn.com/images/jjinichoi/post/4d86b680-a0d0-4aaa-8864-09daf35acd70/image.png)![](https://velog.velcdn.com/images/jjinichoi/post/6f8acaf4-bd04-4b5b-82db-c83ec346660d/image.png)

**PATCH**

![](https://velog.velcdn.com/images/jjinichoi/post/56feff31-13ae-4a1e-9242-16badb4f3d7b/image.gif)![](https://velog.velcdn.com/images/jjinichoi/post/1557c8a8-1a48-4b72-bba1-31c06c8e16bd/image.png)

### 회원가입 시 이메일로 welcome이메일 전송
- 이 기능은 자랑스러운 동희님이 백에서 기능 구현을 후루룩해주셨고 난 거기에 스타일만 구현하였다.
![](https://velog.velcdn.com/images/jjinichoi/post/2ff2a672-6280-4567-89ff-4434f226abe9/image.gif)

---





## 🐱 프로젝트를 진행하면서 느낀 점

### 💡우선순위
- 단체 프로젝트의 경우 짧은 기간동안에 결과를 도출하기 위해 **필수구현사항/ 추가구현사항**을 나누어서 프로젝트를 진행했다.
- 기획단계에서 진행되었기 때문에 프로젝트를 진행하는 기간동안 한 페이지, 페이지들을 원할히 진행할 수 있었다.

### 💡커뮤니케이션, 지식의 이해도 상향

- **소통의 중요성**- 백엔드와 원활한 소통을 위해서는 백엔드의 언어를 이해하는 것도 필요하다는 것을 알게 되었다.

- **적용의 중요성** - 이론상으로 이해가 된다하더라도 그것은 나의 것이 될 수 없다는 것을 깨달았다.

- **경험의 중요성** - 협업의 경험 통해 더욱 높은 수준의 효율적인 개발을 이끌어낼 수 있을 것이라 생각된다.

- **자신감의 중요성** 
	- 나의 코드를 다른 분들께 보여드리거나 설명을 할때 내 지식에 자신감이 없으면 다른 사람도 이해하지 못하고 나도 원하는 대답을 못들을 확률이 크다.
	- 다른 사람한테 자신감 있게 나의 코드를 설명할 수 있도록 이번 프로젝트를 다시 한번 정리하면서 실력 향상을 위해 노력해야 된다.

- **다음은?** 
	- 다른 기수보다 프론트엔드 인원이 현저히 적었는데, 레이아웃 구현은 원할히 진행됐지만 기능 구현하는 것에 있어서 아직 부족하다고 느끼기 때문에 2차 프로젝트에서는 많은 페이지를 구축해서 한두개의 기능을 넣지 말고, <span style="color:indianred">최소한의 페이지를 구축 후 한 페이지마다 많은 기능을 구현하는 방향으로 진행되어야 할 것같다.(소셜로그인, 매장찾기 기능을 넣어보고 싶다...!!!!)</span>

- **결론** 
	- _“개발자는 기술만 구현하는 것이 아니다”_ 라는 말이 와 닿지 않았는데, 이번 프로젝트를 통해 그 의미를 깨달았다.
	- 단순히 기술을 구현하는 것 뿐만 아니라 유저의 니즈, 플로우를 기반으로, 구체적인 목표를 가지고 우리가 어떤 기술을 구현해야하는지 알아하고, 자신이 담당한 역할 외에도 다른 팀원분과도 효율적인 소통 을 하여 서로의 업무를 이해하고 협력해야 진정한 개발자라는 것을 알게 되었다.


# 🥳 마무리하며...
나는 역시 생산적이고 결과가 보이는 작업을 해야 삶의 의미가 느껴진다는 것을 이번을 통해 깊이 깨달았다.
살앙하는 팀원분들과 2주동안 밤늦게 코딩을 쳐도 피곤하지 않고 즐거움을 느꼈으며, 시간이 너무나도 빠르게 지나갔다. 
진짜 마지막으로 1주차때 5일의 시간이 있어서 여유가 있다고 생각하면서 열정적으로 레이아웃만 구현했다가
2주차때 3.5일의 시간만 주어졌고 기능 구현을 하면서 일정이 촉박했었는데, 같이 프론트를 한 수정님과 이틀밤을 새면서 고생한 것은 평생 기억에 남을것 같다.

