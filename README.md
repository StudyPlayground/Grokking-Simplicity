# 함수형 프로그래밍 스터디

> 다음의 자료의 내용과 실습코드를 바탕으로 진행합니다.
> - [테오의 함수형 프로그래밍 스터디](https://github.com/pagers-org/FunctionalProgramming) (Github)
> - [쏙쏙쑥쑥 스터디](https://github.com/function-and-mountain/functional-coding-nutshell) (Github)
> - [쏙쏙 들어오는 함수형 코딩](https://www.yes24.com/Product/Goods/108748841) (도서)

<br />

## 🪧 진행방식

- 해당 회차의 책 내용을 읽으면서 들었던 자유로운 생각을 공유합니다.
- 실습코드를 활용한 경우 서로의 코드에 대해 설명하며 이해합니다.

|날짜|회차|범위|구분|내용|
|---|------|---|---|---|
|23.11.19|1회차|Ch 1 ~ 4|PART 1. 액션과 계산, 데이터|- 쏙쏙 들어오는 함수형 코딩에 오신 것을 환영합니다.<br />- 현실에서의 함수형 사고<br/>- 액션과 계산, 데이터의 차이를 알기<br />- 액션에서 계산 빼내기|
|23.11.26|2회차|Ch 5 ~ 7|PART 1. 액션과 계산, 데이터|- 더 좋은 액션 만들기|
|23.12.03|3회차|Ch 8 ~ 9|PART 1. 액션과 계산, 데이터|- 계층형 설계 I<br />- 계층형 설계 II|
|23.12.10|4회차|Ch 10 ~ 12|PART 2. 일급 추상|- 일급 함수 I<br />- 일급 함수 II<br />- 함수형 반복|
|23.12.17|5회차|Ch 13 ~ 14|PART 2. 일급 추상|- 함수형 도구 체이닝<br />- 중첩된 데이터에 함수형 도구 사용하기|
|23.12.24|6회차|Ch 15 ~ 17|PART 2. 일급 추상|- 타임라인 격리하기<br />- 타임라인 사이에 자원 공유하기<br />- 타임라인 조율하기|
|23.12.31|7회차|Ch 18 ~ 19|PART 2. 일급 추상|- 반응형 아키텍처와 어니언 아키텍처<br />- 함수형 프로그래밍 여행에 앞서|

<br />

## 🗂️ 폴더 설명

> 테오의 함수형 프로그래밍 스터디의 설명을 그대로 인용했습니다.

### 1부
- `src/1week` : 더 좋게 바꿀 수 있는 방법은 무엇일까요? 간단한 함수를 리팩토링 해봅시다.
- `src/2week` : 책에 소개된 로직을 앱으로 구현한 프로젝트입니다. 함수형 철학을 토대로 리팩토링 해봅시다.
  - 단, 몇 개의 버그를 남겨 두었습니다. NaN이 된다던가, 무료 배송 아이콘을 어떤 조건에 출력해야 하는지 등... 원하는 대로 확장시켜 보세요.
  - 테스트 프레임워크를 잘 활용하여 안전하고 견고한 앱으로 만들어 봅시다.

### 2부
- `src/refactoring` : 리팩토링 전과, 그 후. 어떤 차이가 있을까요? 어떻게 고민하면 좀 더 클린 코드 철학을 녹여서 만들 수 있을까요?
- `src/utils` : 여러분이 구현하는 함수형 유틸리티 코드가 들어갑니다. `map, filter, reduce, unique, groupBy, promise...` 함수형 유틸리티는 결국 어떤 것으로 귀결될까요?
- `src/use-rxjs` : 함수형 유틸리티 중 가장 유명한 RxJS를 직접 사용하고 적용해보면서 지금껏 공부해왔던, 사고해왔던 함수형 프로그래밍이 이런 패러다임이구나! 를 느끼는 경험을 가져가 보세요.

<br />

## 🔗 참고 링크
> 테오의 함수형 프로그래밍 스터디의 링크를 그대로 인용했습니다.

### 1부 관련 아티클
- [자바스크립트는 왜 프로토타입을 선택했을까](https://medium.com/@limsungmook/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C-997f985adb42)
- [[개발인턴] script 언어와 type 언어](https://blog.barogo.io/%EA%B0%9C%EB%B0%9C%EC%9D%B8%ED%84%B4-script-%EC%96%B8%EC%96%B4%EC%99%80-type%EC%96%B8%EC%96%B4-96e037b35de0)
- [컴파일러와 인터프리터의 차이점 (비교 차트 포함) - 기술 - 2023](https://ko.surveillancepackages.com/difference-between-compiler-and-interpreter-2a62)
- [함수형 코딩 스터디를 해봅시다!](https://velog.io/@teo/functional-programming-study)
- [console.log 값을 비교할 수 있는 테스트 유틸 by Siny](https://github.com/solmin0302/FunctionalProgramming/pull/2/files#diff-b393fca7fe777ecd1f46de50b82777ae2402dc20a609c6ad4afe7744f8e350d2)
- [1. 좋은 함수 만들기 - 부작용과 거리두기](https://jojoldu.tistory.com/697)

### 2부 관련 아티클
- [함수형 프로그래밍과 ES6+](https://www.youtube.com/watch?v=4sO0aWTd3yc)
- [[Javascript] 지연 평가(Lazy evaluation) 를 이용한 성능 개선](https://armadillo-dev.github.io/javascript/whit-is-lazy-evaluation/)
- [Iteration protocols - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
- [[제13회-3] 서비스에 함수형 / 동시성 적용사례](https://youtu.be/Y8d5P9M51xs)
- [marpple/FxTS](https://github.com/marpple/FxTS)
- [[FECrash] ChatGPT를 이용해서 뚝딱 만든 함수형 프로그래밍 5주차 복습 교재](https://velog.io/@teo/FECrash-ChatGPT%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%[…]%B0%8D-5%EC%A3%BC%EC%B0%A8-%EB%B3%B5%EC%8A%B5-%EA%B5%90%EC%9E%AC)
- ["테오의 함수형 프로그래밍" 오픈채팅](https://open.kakao.com/o/gtb5620e)
- [Async code: From Vanilla JavaScript to Promises to async/await](https://medium.com/@linlinghao/async-code-from-vanilla-javascript-to-promises-to-async-await-fc440d9818dd)
- [Build a JavaScript Promise | Skilled.dev](https://skilled.dev/course/build-a-javascript-promise)
- [자바스크립트의 Promise 직접 구현하기](https://blog.hyunmin.dev/14)
- [Custom Promise 구현으로 프로미스 파혜치기](https://p-iknow.netlify.app/js/custom-promise)
- [[JS] 자바스크립트 Promise 객체 직접 구현해보기](https://velog.io/@turtle601/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Promise-%EA%B0%9D%EC%B2%B4-%EC%A7%81%EC%A0%91-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0)
