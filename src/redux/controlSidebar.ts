/**
 * 23.5.26
 * Sidebar에 대한 state를 전역으로 관리하고자 만듬
 * (ex. sidebar가 열려있을 때 main영역 클릭시 닫히는 로직)
 */

// 액션 타입 선언
const SET_SHOW_SIDEBAR = "controlSidebar/SET_SHOW_SIDEBAR" as const;

// 액션 생성함수 선언
// 액션에 부가적으로 필요한 값을 payload 라는 이름으로 통일합니다
// 이는 FSA (https://github.com/redux-utilities/flux-standard-action) 라는 규칙인데
// 이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어 추후 다룰 때도 편하고
// 읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련돤 라이브러리를 사용 할 수 있게 해줍니다.
// 다만, 무조건 꼭 따를 필요는 없습니다.
export const setShowSidebar = (
  isShow: boolean
) => ({
  type: SET_SHOW_SIDEBAR,
  payload: { isShow },
});

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type controlSidebarAction =
  | ReturnType<typeof setShowSidebar>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type controlSidebarState = {
  isShow: boolean,
};

// 초기상태를 선언합니다.
const initialState: controlSidebarState = {
  isShow: false,
};

// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.
const controlSidebar = (state: controlSidebarState = initialState, action: controlSidebarAction): controlSidebarState => {
  switch (action.type) {
    case SET_SHOW_SIDEBAR:
      return {
        ...state,
        isShow: action.payload.isShow,
      };
    default:
      return state;
  }
}

export default controlSidebar;