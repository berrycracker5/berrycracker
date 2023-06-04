import PostModel, { PostType } from "./models/PostModel";
export const MyPosts: PostModel[] = [
  {
    postNo: "7",
    postType: PostType.REACTNATIVE,
    postTitle: "기본 개념",
    createDate: "2023-06-04",
    postContent:`
#### 기본 동작 원리
![ReactNavie 기본동작 이미지](https://github.com/berrycracker5/berrycracker/blob/main/public/images/post/react-native-1.png?raw=true)
`
  },
  {
    postNo: "6",
    postType: PostType.JAVASCRIPT,
    postTitle: "ES6 문법",
    postContent: `
\`\`\`
const name = "JW";
const age = 28;
const gender = "M";
const obj = { first: '1', second: '2', third: '3' };
const arr = [1, 2, 3, 4, 5];
\`\`\`

#### Shorthand Property names
- 객체를 새로 만들 때, Property와 변수명이 같은 경우 사용
\`\`\`
👍const newObj = { name , gender } ;
💩obj.name = “JW”,  obj.gender = “M”
\`\`\`

#### Destructing Assignment (구조분해할당)
- 변수를 새로 만들 때, 객체/배열의 값을 빠르게 할당하는 경우 사용
\`\`\`
👍const { first, second } = obj;  
💩const first = obj.first,  const second = obj.second;
👍const { first: myVar1, third: myVar2 } = obj; 
💩const myVar1 = obj.first,  const myVar2 = obj.third;
👍const [ one, two ] = arr; 
💩const one = arr[0],  const two = arr[1];
👍const [one, two, , four ] = arr;  
💩const four = arr[3];
\`\`\`

#### Spread Syntax (얕은 복사)
- 객체/배열을 복사할 때 사용 (주소 참조)
\`\`\`
👍const copyArr = […arr, 6, 7];
💩const copyArr = [1,2,3,4,5, 6, 7];
👍const totalArr = […arr, …copyArr, 8, 9];  //이런식으로 병합도 가능
👍const copyObj = {…obj, height: 170};  // 객체를 병합할 때 같은 키를 가진 값이 있다면, 뒤에 값으로 덮어씌여짐
\`\`\`

#### Nullish Coalescing Operator
- ?? 연산자는 undefined와 null만 체크하도록 할 수 있음
- Falsy로 체크하려면 || 연산자를 사용해야됨
> Falsy : undefined, null, false, "", 0, NaN
\`\`\`
👍const name = oldName ?? “No Name”;
💩const name = oldName || “No Name”;
\`\`\`
`,
    createDate: "20230604",
  },
  {
    postNo: "5",
    postType: PostType.OTHERS,
    postTitle: "Post 하위 메뉴 구현 완료",
    postContent: `
    Post는 하나의 변수에서 관리하고
    각 Post는 postNo와 postType이 존재한다.

    post list를 보여줄 때는 type을 useParam으로 받아서 처리하고,
    각 post를 눌렀을 때는 해당 post의 postNo를 useParam으로 받아서 보여준다.
    `,
    postOthers: "신규",
    createDate: "20230602",
  },
  {
    postNo: "4",
    postType: PostType.OTHERS,
    postTitle: "스윽 왔다가 엄청 많이 작업하고 감..",
    postContent: "후우...",
    postOthers: "",
    createDate: "20230526",
  },
  {
    postNo: "2",
    postType: PostType.OTHERS,
    postTitle: "마크다운 문법 연습",
    postContent: `
# h1

## h2

### h3

일반 텍스트

www.naver.com

**진하게**

*기울이기*

\`\`\`
코드블럭
\`\`\`

> 여기는 인용문이 들어가는 곳입니다.
>> 두번째
>>> 3depth도 가능

1. 첫번째
2. 두번째
3. 세번째

일반텍스트

- hypon text

일반 텍스트 (앞에 2칸 띔)

`,
    postOthers: "-",
    createDate: "20230513",
  },
  {
    postNo: "1",
    postType: PostType.HTMLCSS,
    postTitle: "Notion으로 기록하고 있던 내용 가져오기 (HTML / CSS)",
    postContent: `
https://www.notion.so/HTML-CSS-5add4d9de95e49e2926e7f55a32f719d

## div
- Flex    
    부모(container)의 display 속성을 flex로 주고, 그 안에 item들을 배치하는 느낌    
    메인축 : 아이템들이 정렬되는 축,   교차축 : 메인축의 수직인     
    <container 속성>    
    - flex-direction : row, row-reverse, column, column-reverse (디폴트는 row)
        - row, row-reverse인 경우는 메인축은 가로, 교차축은 세로겠지
    - flex-wrap : wrap → flex에 아이템들이 container보다 커지면, 줄바꿈을 하게함
        - : nowrap(디폴트) → 컨테이너에 맞게 아이템의 크기를 줄임 (의도하지않은 상황나옴)
    - 위 두개를 flex-flow : column-reverse wrap 으로 축약해서 쓸 수 있음
    - justify-content : center, space-evenly, .. → 중심축에서의 아이템들 정렬
        - 중심축이 가로인데 center로 하면 한 줄에서 가운데로 가겠지
        - : space-between → 요소의 사이를 같은 간격으로 띄움 (맨앞과 맨뒤는 딱붙음)
        - : space-evenly → 요소의 양옆과 사이를 같은 간격으로 띄움
    - align-items : center, flex-start, flex-end → 교차축에서의 아이템들 정렬
        - 이게 되려면 컨테이너의 높이(height를 꼭 지정해줘야함)
        - : stretch → 아이템의 높이를 컨테이너의 크기로 늘려줌 (이게 디폴트값임)    

    <item 속성>    
    - flex-basis : 100px → 컨테이너의 중심축을 기준으로 100px 만큼 늘려라
    - flex-grow : 1,2,3,.. → flex-basis의 크기만큼 지정 후 컨테이너의 크기가 남으면 해당 비율에 따라서 나머지를 채워라. (즉, 각 아이템들의 weight를 지정해주는 것임)
    - flex-shrink : 0~1 → 0이 의미하는 건 flex-basis 의 값보다 작아지지 말아라
    - 위에 3개를 flex : 2 0 100px 으로 축약해서 쓸 수 있음.
        - flex : 2 라고  쓸 수도 있음. (flex :  basis기본값인 0, shink기본값인 1이 됨)
    - align-self : flex-start, center, stretch.. → 단일 아이템에 flex 정렬을 혼자 주고 싶을 때 사용
    - order : 1,2,3,… → 화면에서 보이는 우선순위를 숫자값으로 지정할 수 있음
- Display, position
  - display : block, inline으로 크게 나뉘어짐. 미지정시 각 태그별 기본 속성을 가짐
      - : block → 한줄을 모두 차지함
      - : inline → 자기자신의 내용영역의 크기만큼만 차지함 (😱width, height, margin 못함!)
      - : inline-block → 자신의 크기만큼만 차지함 (block에서 줄바꿈만 없앤거임)
      - : none → 안보임
  - position
      - : static → 정적 위치 HTML 기본 (디폴트)
      - : fixed → window(viewport) 객체를 기준으로 포지셔닝 (스크롤, 확대해도 고정)
      - : relative → 현재위치를 기준으로 그 안에서 위치를 옮김
      - : absolute → 부모 속성중 relative로 지정된 곳을 기준으로 위치를 옮김

## span(inline), p(block)
- lorem : 샘플 문자열
- font-size : 16px
- font-weight : bold, lighter, 100단위 숫자 (100, 200, …, 900)
- font-style : italic
- text-decoration : (dotted, solid, ..) (red, blue, ) underline

## a(하이퍼링크)
- href= www.naver.com
- 밑줄이랑 색깔 없애기 위해, text-decoration : none, color: black 을 보통 지정해줌
- target : "_blank" → 새 탭에서 열기
- href 주소에 내가 만든 div id 값을 넣으면(href="#myDiv") 해당 클래스로 스크롤이 이동함!

## hover(마우스 올렸을 때 효과)
- transition : all 300ms (효과명:linear, ease-in, ease-out, ease-in-out) → transition으로 hover 효과가 좀더 자연스럽게 작동하게 해줌
- ![스크린샷 2022-12-10 오후 7.31.24.png](HTML%20CSS%205add4d9de95e49e2926e7f55a32f719d/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-12-10_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_7.31.24.png)

## ul, ol (리스트는 li태그로 만듬)
- li에서 list-style-type : square → li의 불릿스타일을 네모로 바꿈 (디폴트는 원형)
- list-style : none → 불릿을 없앰
- ul내에서 리스트들을 가로로 정렬하고 싶으면 → ul을 flex를 바꿈

## 기타 등등
- padding, margin : top right bottom left
- text-align : center
- cursor : pointer → 마우스 올렸을 때 클릭모양으로 변경
- transform (보통 .myDiv:hover { translate(10px, 10px) } 처럼 hover이벤트로 많이 쓰는 듯)
- translate(-50%, -50%) → x축 y축으로 해당 요소를 옮겨줌 (양수가 오른쪽, 아래쪽)
- rotate(720deg) → 음수는 반시계 방향, rotateX(180deg), rotateY → X,Y축을 기준으로 뒤집어줌
- scale(2.0, 1.5) → 가로로 2배, 세로로 1.5배 확대시킴
- overflow-y : auto → 스크롤이 필요한 경우는 스크롤이 생김 (벗어난거 안보이게 하려면 hidden)
- sticky : 스크롤을 해도 그 화면의 그 위치에 포지셔닝 함
- box-sizing : border-box → 원래 내가 지정한 width,height에 border가 더해지는데, border까지 더해서 width가 되도록 해줌

## CSS
- p:first-child → p태그중 첫번째 요소를 선택
- p:last-child → p태그중 마지막 요소를 선택
- p:nth-child(1) → 1번째 요소를 선택 (0이 1번째가 아님!)
- p:nth-child(3n) → 3, 6, 9, … 요소를 선택
- 가상요소
- div::after → HTML이 끝날 때 추가되는 가상요소
- div::before → HTML안 앞쪽에 추가되는 가상요소
- 보통 밑줄같은거 만들 때 많이 쓰이는 듯 (.text:hover .span::after {content:’’, display:", width:"})
- 접두어  —webkit-…. : 크롬, 사파리에서 적용되도록 지정해주는것 (사이트별로 지정해주는 것, 보통 webkit만)
    `,
    postOthers: "",
    createDate: "20230512",
    updateDate: "20230602"
  },
]