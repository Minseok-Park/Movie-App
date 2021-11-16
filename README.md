<img alt="MovieApp" src="https://img.shields.io/badge/movie App%20-blue.svg?&style=for-the-badge&logo=appveyor&logoColor=white"/>

# React를 활용한 영화 App

_OMDB API를 활용 (영화 목록, 검색, 관련 있는 영화 목록)_

App Link ⇒ [Movie App](https://ms-movie.netlify.app/#/)

---

## 🔗 목차

1. [프로젝트 개발 목적](#1-프로젝트-개발-목적)
2. [기술 스택](#2-기술-스택)
3. [프로젝트 구성](#3-프로젝트-구성)
4. [페이지 구성](#4-페이지-구성)
5. [프로젝트를 통해 배운 점](#5-프로젝트를-통해-배운-점)
6. [개선할 점](#6-개선할-점)

## 1. 프로젝트 개발 목적

- React Hook을 활용하여 다양한 방법으로 state를 관리해 보기 위함
- async, promise 등 비동기 처리와 외부 Api를 활용하여 데이터 처리 능력 향상을 위함
- 혼자서 처음부터 끝까지 프로젝트를 구성하고 구현하는 능력을 기르기 위함

## 2. 기술 스택

<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

## 3. 프로젝트 구성 (11/12 update...)

![image](https://user-images.githubusercontent.com/68681344/141937893-8424242d-f60b-44df-bbdb-3cf42f0611cc.png)

    - App component에서 모든 state를 관리하다 보니 가독성이 떨어지고 필요없는 state를 계속 연결하는 일이 발생.
    - 11/12 Update 내용 => MovieProvider라는 contextAPI를 활용하여 전역적으로 state 관리(state와 dispatch를 필요한 곳에서만 사용함으로 코드가 깔끔해짐)

## \* Component 설명 (11/12 Update...)

### movieService

![image](https://user-images.githubusercontent.com/68681344/141939228-179b9773-32dd-4584-8c31-94709b57f6f3.png)

- OMDB API로 부터 받은 영화 데이터를 받아 export default로 MovieService의 함수들을 밖으로 내보내 줍니다.
- popularMovie() : 유명한 영화 목록
- detailMovie(movieId) : 자세한 영화 정보
- searchMovie(movieId) : 영화 검색 목록

### MovieProvider

![image](https://user-images.githubusercontent.com/68681344/141939872-ab2c7874-0cf8-420f-b4e3-cdfe7369be39.png)

![image](https://user-images.githubusercontent.com/68681344/141941230-de803265-9642-4620-8dec-1039df6d9ea6.png)

- 전역적으로 state와 dispatch를 관리하여 각각 필요한 component에게 데이터를 전달하는 Context입니다.
- initialState : 초기 데이터 => 영화 목록, 자세한 영화 목록 배열을 state로 가지고 있습니다.
- movieReducer() : 각각 movieService를 통하여 받아온 Api data를 movieList 또는 movieDetailList에 넣어줍니다.
- createContext()와 useContext()를 활용하여 데이터를 내보내 주었습니다.
  (state와 dispatch context를 따로 만들었는데 state만 필요한 component가 있을 수 있고 dispatch만 필요한 component가 있을 수 있기 때문에 조금 더 코드의 재사용을 편하기 하기 위함입니다.)

### App

![image](https://user-images.githubusercontent.com/68681344/141941369-92be9979-dd69-4dc3-9e52-223ef49eea72.png)

- movieService로 부터 받은 함수를 넘겨주고 Route의 기능을 제공하는 Component입니다.
- 초기에는 Main component가 보이며 이벤트가 발생했을 때 MovieDetailPage component로 이동하게 됩니다.

### Main

![image](https://user-images.githubusercontent.com/68681344/141944203-6e85c6f4-b0e4-4f0b-97c0-b653f7e0d28f.png)

- MovieProvider로 부터 state와 dispatch를 넘겨 받습니다.
- useState를 활용하여 검색 여부를 (true, false)로 관리합니다.
- onSearch() : 화면에서 보이는 영화를 클릭하면 keyword 값을 받아 searchMovie() 메소드를 활용하여 해당 id와 관련된 영화의 목록들을 가져옵니다.
- useEffect()를 활용하여 초기 화면이 render() 되면 popularMovie() 메소드를 활용하여 유명한 영화 목록들을 가져옵니다.
- MovieScrenn과 MovieList component를 return 합니다.

### Header

![image](https://user-images.githubusercontent.com/68681344/141942538-9d976293-ba58-4e0b-8c7f-80def15b48be.png)

- react-router의 useHistory()를 사용하여 header 로고 부분을 클릭하면 Main 페이지로 이동할 수 있습니다.

### MovieDetailPage

![image](https://user-images.githubusercontent.com/68681344/141942926-95767832-29b4-4deb-817f-9e73a239043d.png)

- react-router의 useParams()를 활용하여 해당 url인 /detail/:id 가 render되면 id 값을 받아옵니다. (id값을 활용하여 영화의 자세한 목록 & 관련 영화 목록을 movieDetailList로 받아옵니다.)
- movieDetailList의 state를 활용하여 각각 movieInfo & movieList component에 state를 전달해줍니다.

### MovieScreen

![image](https://user-images.githubusercontent.com/68681344/141943549-f5374f4a-4560-4c99-81e5-04dd9b09ccac.png)

- onChange() : input에 입력된 value 값을 useState로 관리합니다.
- onSubmit() : 검색 버튼을 클릭하거나 Enter 키를 눌렀을 때
  해당 value 값을 Main component의 onSearch()로 전달합니다.

### MovieList

![image](https://user-images.githubusercontent.com/68681344/141944366-365e1bcb-0ca4-439d-975a-3372e5facb25.png)

- map 함수를 활용하여 movieList 배열에 있는 데이터만큼 Movieitem component를 생성하며 필요한 데이터들을 전달해줍니다.

### MovieItem

![image](https://user-images.githubusercontent.com/68681344/141944566-01418e54-b02a-498a-b664-75219b4f4487.png)

- movieList로부터 받은 데이터를 활용하여 영화의 정보가 보여지는 Component 압나더,'
- goToDetail() : id 값을 받아 영화를 클릭하는 click 이벤트가 발생했을 때 /detail/:id url을 가지고 있는 MovieDetailPage component를 호출합니다.

### MovieInfo

![image](https://user-images.githubusercontent.com/68681344/141944994-0c967691-82fe-4b2e-9254-8b248f895078.png)

- MovieDetailPage로 부터 받아온 영화의 자세한 정보를 활용하는 Component입니다.

## 4. 페이지 구성

Demo Link ⇒ [준비중](준비중)

### 😀 메인 페이지

![image](https://user-images.githubusercontent.com/68681344/140880756-82b9a6b1-5484-48f0-a3f0-033cf9e4d9d5.png)

- 가장 인기 있는 영화 목록을 확인할 수 있습니다.
- Main 컴포넌트 입니다.

### 🔎 검색 기능

![image](https://user-images.githubusercontent.com/68681344/140881611-58ca3e20-ba5a-49fa-a93a-67793cdd9287.png)

- 입력된 키워드를 통해 검색한 영화의 목록을 확인할 수 있습니다.
- 키워드가 바뀔 때마다 MovieItem에 새로운 영화 정보가 전달됩니다.

### 🌎 상세 페이지 & 연관 영화 목록

![image](https://user-images.githubusercontent.com/68681344/140886882-db299f85-6a00-4ab0-85b5-8d5570e24793.png)

- 메인 페이지에서 영화를 클릭하면 나오는 페이지로 영화의 자세한 정보를 확인할 수있습니다.
- 영화를 선택할 때마다 해당 영화와 관련된 새로운 영화 정보를 받아옵니다.

## 5. 프로젝트를 통해 배운 점

- ##### useState, useReducer, useEffect 등 react hooks를 활용하여 react의 state를 효율적으로 관리하는 방법을 알았습니다.
- ##### useCallback, memo 등을 활용하여 함수형 componet의 단점인 계속적으로 render가 발생하는 부분을 보완하여 프로젝트를 구성하였습니다.
- ##### react router를 활용하여 이벤트가 발생할 때마다 새로 페이지를 render 하는 것이 아니라 component만 변경하여 효율적으로 데이터를 관리하는 방법을 알았습니다.
- ##### contextApi 활용으로 조금 더 깔끔하게 state와 dispatch를 관리할 수 있게 되었습니다.

## 6. 개선할 점

- ##### 이번 프로젝트의 규모가 크지 않다는 점을 파악하여 useReducer를 활용하여 state를 관리하였는데 contextApi를 활용하였으면 조금 더 state를 깔끔하게 관리할 수 있겠다는 생각이 들었습니다. (개선 완료)
- ##### 영화 API 뿐만 아니라 TV API 인물 API 등등 제공되는 API가 많이 있는데 movieService 뿐만 아니라 다양한 service 파일을 만들어 프로젝트의 규모를 키우면 좋겠다는 생각이 들었습니다. (준비중)
- ##### firebase를 활용하여 로그인 기능과 database를 구축하여 사용자가 관심있는 영화를 클릭하면 해당 목록을 보여주는 작업을 하면 좋겠다는 생각이 들었습니다. (준비중)
- ##### 프로젝트 규모가 크지는 않지만 연습을 위해 Redux를 활용해 보는 것도 좋을 것 같다는 생각이 들었습니다. 비동기 처리의 경우 redux-thunk를 활용하며 Ducks-pattern을 활용하여 각각의 aciton 타입, 함수, reducer를 구현해 볼 생각입니다.(준비중)

- ##### BrowserRouter로 배포하는 과정에서 url 값을 읽지 못하는 문제가 발생하여 임시 방편으로 hashRouter를 사용하였습니다.
- ##### netlify로 배포하는 과정에서 .env에 있는 api-key 값을 읽어오지 못해 문제를 해결하는데 힘들었습니다. netlify 사이의 환경변수 설정하는 부분에 env에 해당하는 값을 넣어주니 문제가 해결되었습니다.
