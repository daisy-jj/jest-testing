import Home from "@/app/page";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("Home component", () => {
  //로고 이미지 렌더링 확인
  test("renders logo", () => {
    render(<Home userName="testUser" />);
    const logoEL = screen.getByAltText("logo");

    expect(logoEL).toBeInTheDocument();
  });

  //Home 컴포넌트가 타이틀 텍스트를 렌더링하는지 확인합니다.
  //"UNIVA AI Platform(title)"라는 제목을 가진 <h1> 요소를 렌더링하는지 확인합니다.
  test("renders title", () => {
    render(<Home userName="testUser" />);
    const headingElement = screen.getByRole("heading", {
      name: "UNIVA AI Platform",
    });

    expect(headingElement).toBeInTheDocument();
  });

  //유저 정보가 있으면 "UNIVA AI 플랫폼에 오신 것을 환영합니다."라는 <p> 요소를 렌더링하는지 확인합니다.
  test("유저가 있으면 환영 문구를 보여준다.", async () => {
    render(<Home userName="testUser" />);

    const welcomeMessage = screen.queryByText(
      "testUser님 UNIVA AI Platform에 오신 것을 환영합니다."
    );

    expect(welcomeMessage).toBeInTheDocument();
  });

  //유저 정보가 없으면 로그인 폼과 로그인 버튼을 렌더링 하는지 확인합니다.
  test("유저가 없으면 로그인 문구와 버튼을 보여준다.", async () => {
    render(<Home userName={null} />);

    const idInput = screen.getByPlaceholderText("아이디를 입력해 주세요.");
    const passwordInput =
      screen.getByPlaceholderText("비밀번호를 입력해 주세요.");
    const loginButton = screen.getByText("로그인");

    expect(idInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  //로그인 버튼 클릭 후 로딩 상태를 확인합니다.
  //Home 컴포넌트에서 "로그인" 이름의 버튼을 렌더링하는지 확인합니다.
  //fireEvent.click을 사용하여 버튼 클릭을 시뮬레이션한 다음 "Loading..."이라는 텍스트를 렌더링하는지 확인합니다.
  //2초 후에 이 텍스트가 사라지는지 확인합니다.
  test("로그인 버튼 클릭 후 로딩 문구를 보여준다.", async () => {
    render(<Home userName={null} />);

    const loginButton = screen.getByRole("button", { name: "로그인" });
    fireEvent.click(loginButton);

    const loadingMessage = screen.getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();

    //waitFor 함수는 비동기적인 변화를 기다릴 때 사용합니다.
    //waitFor 함수는 기본적으로 지정된 조건이 충족될 때까지 기다립니다. 조건이 충족되면 테스트가 계속 진행됩니다.
    await waitFor(
      () => {
        const loadingElementAfterLoading = screen.queryByText("Loading...");
        expect(loadingElementAfterLoading).toBeNull();
      },
      { timeout: 3000 } // waitFor 함수가 기다리는 시간을 설정하는 데 사용되는 옵션
      //시간을 조금 더 길게 설정한 이유는 느린 테스트 환경이나 기타 비동기 작업으로 인한 잠재적인 지연을 고려하여 안전 여유를 제공하기 위해서 입니다.
    );
  });

  it("matches the snapshot", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
