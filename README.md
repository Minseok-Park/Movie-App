<img alt="MovieApp" src="https://img.shields.io/badge/movie App%20-blue.svg?&style=for-the-badge&logo=appveyor&logoColor=white"/>

# React를 활용한 영화 App

_OMDB API를 활용 (영화 목록, 검색, 관련 있는 영화 목록)_

Demo Link ⇒ [Movie App](준비중)

---

## 🔗 목차

1. [프로젝트 개발 목적](#1-프로젝트-개발-목적)
2. [기술 스택](#2-기술-스택)
3. [프로젝트 개요](#3-프로젝트-개요)
4. [페이지 구성](#4-페이지-구성)
5. [프로젝트를 통해 배운 점](#5-프로젝트를-통해-배운-점)
6. [개선할 점](#6-개선할-점)

## 1. 프로젝트 개발 목적

- React Hooks를 활용하여 간단하지만 완성도 있는 App 만들기
- 비동기처리, API를 활용하여 효율적인 데이터 처리하기

## 2. 기술 스택

<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

## 3. 프로젝트 구성

![moviePresentation](https://user-images.githubusercontent.com/68681344/140879388-33abd26c-87ec-4030-8f58-f22f292ee773.PNG)

### 간단한 Component 설명

    # movieService
      - OMDB API로 부터 받은 영화 데이터를 비동기적으로 처리해 효율적인 데이터를 다른 component에 전달해줍니다.
      (유명 영화 목록, 자세한 페이지 & 영화 연관 목록, 영화 검색 목록)

    # App
      - 전체적인 state를 관리하는 component 입니다. 초기 데이터는 initialMovieData라는 객체에 담아 관리하며,
        useReducer를 사용하여 페이지가 처음 render가 발생하거나 이벤트가 발생했을 때 movieList, movieDetailList에
        API로 부터 받은 데이터를 전달해줍니다.
      - useEffect를 사용하여 movieDetailList에 값이 들어올 때 마다 detailPage로 페이지가 이동합니다.

    # Main
      - useEffect를 사용하여 처음 render 되었을 때 가장 인기 있는 영화 목록을 가져옵니다.
      - useHistory를 사용하여 영화 id를 받아온 후 detailPage로 이동할 수 있습니다.

    # Header
      - useEffect를 사용하여 movie App의 로고를 클릭하였을 때 history.push를 활용하여 Main 화면으로 이동할 수 있습니다.

    # MovieDetailPage
      - movieDetailList를 받아와 movieDetailList에 값이 있을 경우 화면을 render 하여 보여주고 그렇지 않을 경우는 경고 화면을 보여줍니다.

    # MovieScreen
      - useRef를 사용하여 검색창에 들어갈 text 값을 관리하여 submit 이벤트가 발생하면 값을 전달해줍니다.

    # MovieList
      - map 함수를 활용하여 movieList에 있는 데이터를 movieItem으로 전달해줍니다.

    # MovieItem
      - movieList로부터 받은 데이터를 활용하여 영화의 정보가 보여지는 Component 입니다.

    # MovieInfo
      - detailMovie로 부터 받은 영화의 자세한 정보를 보여주는 Component 입니다.

## 4. 페이지 구성

Demo Link ⇒ [준비중](준비중)

### 😀 메인 페이지

![image](https://user-images.githubusercontent.com/68681344/140880756-82b9a6b1-5484-48f0-a3f0-033cf9e4d9d5.png)

- 가장 인기 있는 영화 목록을 확인할 수 있습니다.

### 🔎 검색 기능

![image](https://user-images.githubusercontent.com/68681344/140881611-58ca3e20-ba5a-49fa-a93a-67793cdd9287.png)

- 입력된 키워드를 통해 검색한 영화의 목록을 확인할 수 있습니다.

### 🌎 상세 페이지 & 연관 영화 목록

![image](https://user-images.githubusercontent.com/68681344/140886882-db299f85-6a00-4ab0-85b5-8d5570e24793.png)

- 메인 페이지에서 영화를 클릭하면 나오는 페이지로 영화의 자세한 정보를 확인할 수있습니다.
- 영화를 선택할 때마다 해당 영화에 알맞은 관련된 영화 목록으로 변경됩니다.

## 5. 프로젝트를 통해 배운 점

- ##### useState, useReducer, useEffect 등 react hooks를 활용하여 react의 state를 효율적으로 관리하는 방법을 알았습니다.
- ##### useCallback, memo 등을 활용하여 함수형 componet의 단점인 계속적으로 render가 발생하는 부분을 보완하여 프로젝트를 구성하였습니다.
- ##### react router를 활용하여 이벤트가 발생할 때마다 새로 페이지를 render 하는 것이 아니라 component만 변경하여 효율적으로 데이터를 관리하는 방법을 알았습니다.

## 6. 개선할 점

- ##### 이번 프로젝트의 규모가 크지 않다는 점을 파악하여 useReducer를 활용하여 state를 관리하였는데 contextApi를 활용하였으면 조금 더 state를 깔끔하게 관리할 수 있겠다는 생각이 들었습니다.
- ##### 영화 API 뿐만 아니라 TV API 인물 API 등등 제공되는 API가 많이 있는데 movieService 뿐만 아니라 다양한 service 파일을 만들어 프로젝트의 규모를 키우면 좋겠다는 생각이 들었습니다.
- ##### firebase를 활용하여 로그인 기능과 database를 구축하여 사용자가 관심있는 영화를 클릭하면 해당 목록을 보여주는 작업을 하면 좋겠다는 생각이 들었습니다.
