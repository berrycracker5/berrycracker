/**
 * 23.4.23
 * 원래는 사이드바 메뉴 클릭시 메인화면에서 스크롤 해주기 위해
 * Ref와 scroll 함수를 리듀스에 저장해서 사용하려했는데,
 * react-router-dom 사용 후, state로 전달하여 확인 후 스크롤하는 로직으로 변경되면서
 * 사용하지 않게 되었음.
 * 그래도 리덕스 사용하는 표준으로 참고하기 위해 코드는 삭제하지 않음
 */

// 액션 타입 선언
const SET_ELEMENT_INTRODUCTION = "moveScroll/SET_ELEMENT_INTRODUCTION" as const;
const SET_ELEMENT_STRONGS = "moveScroll/SET_ELEMENT_STRONGS" as const;
const SET_ELEMENT_TECH_STACKS = "moveScroll/SET_ELEMENT_TECH_STACKS" as const;
const SET_ELEMENT_PROJECTS = "moveScroll/SET_ELEMENT_PROJECTS" as const;

// 액션 생성함수 선언
// 액션에 부가적으로 필요한 값을 payload 라는 이름으로 통일합니다
// 이는 FSA (https://github.com/redux-utilities/flux-standard-action) 라는 규칙인데
// 이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어 추후 다룰 때도 편하고
// 읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련돤 라이브러리를 사용 할 수 있게 해줍니다.
// 다만, 무조건 꼭 따를 필요는 없습니다.
export const setElementIntroduction = (
  element: React.RefObject<HTMLDivElement> | null,
  onMoveToElement: () => void
) => ({
  type: SET_ELEMENT_INTRODUCTION,
  payload: { element, onMoveToElement }
});
export const setElementStrongs = (
  element: React.RefObject<HTMLDivElement> | null,
  onMoveToElement: () => void
) => ({
  type: SET_ELEMENT_STRONGS,
  payload: { element, onMoveToElement }
});
export const setElementTechStacks = (
  element: React.RefObject<HTMLDivElement> | null,
  onMoveToElement: () => void
) => ({
  type: SET_ELEMENT_TECH_STACKS,
  payload: { element, onMoveToElement }
});
export const setElementProjects = (
  element: React.RefObject<HTMLDivElement> | null,
  onMoveToElement: () => void
) => ({
  type: SET_ELEMENT_PROJECTS,
  payload: { element, onMoveToElement }
});

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type moveScrollAction =
  | ReturnType<typeof setElementIntroduction>
  | ReturnType<typeof setElementStrongs>
  | ReturnType<typeof setElementTechStacks>
  | ReturnType<typeof setElementProjects>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type moveScrollState = {
  elementIntroduction: React.RefObject<HTMLDivElement> | null;
  elementStrongs: React.RefObject<HTMLDivElement> | null;
  elementTechStacks: React.RefObject<HTMLDivElement> | null;
  elementProjects: React.RefObject<HTMLDivElement> | null;
  onMoveToElementIntroduction: () => void;
  onMoveToElementStrongs: () => void;
  onMoveToElementTechStacks: () => void;
  onMoveToElementProjects: () => void;
};

// 초기상태를 선언합니다.
const initialState: moveScrollState = {
  elementIntroduction: null,
  elementStrongs: null,
  elementTechStacks: null,
  elementProjects: null,
  onMoveToElementIntroduction: () => { },
  onMoveToElementStrongs: () => { },
  onMoveToElementTechStacks: () => { },
  onMoveToElementProjects: () => { },
};

// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.
const moveScroll = (state: moveScrollState = initialState, action: moveScrollAction): moveScrollState => {
  switch (action.type) {
    case SET_ELEMENT_INTRODUCTION:
      return {
        ...state,
        elementIntroduction: action.payload.element,
        onMoveToElementIntroduction: action.payload.onMoveToElement,
      };
    case SET_ELEMENT_STRONGS:
      return {
        ...state,
        elementStrongs: action.payload.element,
        onMoveToElementStrongs: action.payload.onMoveToElement,
      };
    case SET_ELEMENT_TECH_STACKS:
      return {
        ...state,
        elementTechStacks: action.payload.element,
        onMoveToElementTechStacks: action.payload.onMoveToElement,
      };
    case SET_ELEMENT_PROJECTS:
      return {
        ...state,
        elementProjects: action.payload.element,
        onMoveToElementProjects: action.payload.onMoveToElement,
      };
    default:
      return state;
  }
}

export default moveScroll;