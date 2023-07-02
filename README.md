# 📜 Getting Started with CRA React Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

주로 사용하는 webpack, babel, eslint, prettier 등이 적용되었습니다.

## 📚 Stack

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-3472DC?style=for-the-badge&logo=redux&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A28E4?style=for-the-badge&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Query-F43E50?style=for-the-badge&logo=React Query&logoColor=white"/> <img src="https://img.shields.io/badge/ESLint-3830C8?style=for-the-badge&logo=ESLint&logoColor=white"/>

<br/>

## 🗂 Folder Structure

> **Atomic Deign Pattern**을 사용합니다

<br>

<details>
<summary>폴더구조 전체 보기</summary>

```
├── public
│   ├── fonts
│   └── images
├── resources
├── src
│   ├── api
│   ├── components
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── organisms
│   │   └── templates
│   ├── config
│   ├── constant
│   ├── context
│   ├── hooks
│   ├── interface
│   ├── mock
│   ├── pages
│   ├── style
│   └── utils
└── tools
    └── webpack
```

- `config.tsx`
  - 환경변수 선언
- `mock`
  - 프로젝트 내에서 사용되는 상수들 중 기획 및 디자인 단에서 정한 컨텐츠들
- `api`
  - axios를 이용한 서버통신 관련 함수들 선언
- `routes`
  - 라우팅 선언
- `pages`
  - 라우팅된 페이지들
  - 랜딩, 메인, 에러, 완료 등 페이지
- `components`
  - `templates` : main page에 해당하는 페이지를 구성하기 위한 템플릿
  - `organisms` : templates의 페이지에 사용되는 큰 덩어리 컴포넌트들
  - `molecules` : 훅을 사용하거나 자체 함수가 있는 모듈들
  - `atoms` : 훅이나 자체 함수등이 포함되지 않은 비교적 간단한 모듈들
- `context`
  - recoil, context 등 전역 atom, selector + 해당 atom 용 커스텀 훅
- `hooks`
  - 커스텀훅 선언
- `utils`
  - `functions`: 여러 컴포넌트 내에서 사용되는 글로벌 함수들
  - `constant`
    - 프로젝트 내에서 사용되는 상수들
    - color, images, 에러메세지 문자열, 정규식 등
- `style`
  - 전역 컴포넌트에서 사용되는 스타일드 컴포넌트들 + GlobalStyle.ts

</details>

## 📌 Convention 

### Naming Convention
- `Folder`
  - kebab-case
- `Files`
  - PascalCase
    - tsx 컴포넌트 파일
    - 타입 파일
    - class 파일들… (객체베이스)
  - camelCase
    - 상수파일
    - 함수 및 HOC
  - snake_case
    - 이미지
    - 폰트 등의 정적 파일들
- `Constants`
  - SCREAM_SNAKE_CASE
- `Variables`
  - camelCase

### Commit Message Convention
```json 
[
   {
      "emoji": "✨ message ",
      "description": "새 기능 구현"
    },
    {
      "emoji": "🔧 message ",
      "description": "버그 수정"
    },
    {
      "emoji": "💄 message ",
      "description": "UI 및 스타일 변경"
    },
    {
      "emoji": "♻️ message ",
      "description": "리팩토링 / 코드 형식 및 구조 개선 / 변수명 변경, 콘솔로그 제거, 주석 변경 등 기능 차이 없는 코드 수정""
    },
    {
      "emoji": "📦 message ",
      "description": "이미지, 폰트, 에셋, 더미데이터 추가 / 패키지 설치"
    },
    {
      "emoji": "🎉 init : Initial commit "
      "description": "프로젝트 시작"
    }
]
```


## Available Scripts

In the project directory, you can run:

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `yarn start`

Runs the app in the production mode. (serve 라이브러리를 사용합니다.)
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn start:dev`

Runs the app in the production mode. (serve 라이브러리를 사용합니다.)
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

