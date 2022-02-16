
![Git logo (1)](https://user-images.githubusercontent.com/72294509/153754076-afe729fa-6fcd-4ddb-a9ad-a1470a52f64f.png)
# 💡 Project

> 실내 공기 상태 분석을 위한 자동화 냉난방 및 환풍 시스템
> 
- 2022 테스트베드 데이터 수집,활용,확산을 위한 스마트캠퍼스 헤커톤
- 프로젝트 기간 : 2022.01.24 ~ 2022.02.16
<br>

## 🏆 Award

### ✨ 동국대학교 융합교육원 원장상 서비스 구현분야 우수상

<br>

# ✏ 개발 환경

![https://img.shields.io/badge/npm-7.5.3-brightgreen](https://img.shields.io/badge/npm-7.5.3-brightgreen)
![https://img.shields.io/badge/node-16.13.0-green](https://img.shields.io/badge/node-16.13.0-green)
![https://img.shields.io/badge/vue-2.6.10-blue](https://img.shields.io/badge/element--ui-2.7.0-brightgreen)
![https://img.shields.io/badge/vue-2.6.10-blue](https://img.shields.io/badge/vue-2.6.10-blue)
<br>

## 💻 시스템 구성도

<img width="1227" alt="Diagram (1)" src="https://user-images.githubusercontent.com/72294509/153754184-2a95601f-294c-4f5b-82cf-b6a79856a19f.png">
<br>

# 💻 주요 기능

- 실시간 공기질 데이터(온도, 습도, 이산화탄소, 미세먼지, 초미세먼지) 확인
    - 이산화탄소, 미세먼지, 초미세먼지 데이터를 값에 따라 **좋음/보통/나쁨**으로 처리하고 이를 각각 **초록/ 노랑/ 빨강**색으로 나타냄.
    - 5초마다 공기질 통합 감지 센서로부터 데이터를 받아와 값 갱신
- 환기 시점 및 냉난방 가습기 작동 필요 시점 알림
    - 데이터 처리 기준에 따라 적절한 조치 실시간 알림
    - 5초마다 공기질 통합 감지 센서로부터 데이터를 받아와 값 갱신
- 공기질 데이터(온도, 습도, 이산화탄소, 미세먼지, 초미세먼지) 하루 차트 확인
- 공기질 데이터(온도, 습도, 이산화탄소, 미세먼지, 초미세먼지) 일주일 차트 확인
<br>

# 👌 Commit Message Rules

Angular JS Git Commit Message Conventions Document를 따릅니다.

[Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)

- **feat** : 새로운 기능
- **fix** : 버그 수정
- **build** : 빌드 관련 파일 수정
- **chore** : 그 외 자잘한 수정
- **ci** : CI 관련 설정 수정
- **docs** : 문서 수정
- **style** : 코드 스타일 혹은 포맷 등
- **refactor** : 코드 리팩토링
- **test** : 테스트 코드 수정
<br>

# 👨‍👨‍👧‍👧 Developers
| Name                | GitHub                                       | Develop                                               |
| :------------------ | :------------------------------------------- | :---------------------------------------------------- |
| **임효빈** | [@Lim-Hyobin](https://github.com/Lim-Hyobin) | Team Leader & Frontend Develop |
| **정지영** | [@Jungjjeong](https://github.com/Jungjjeong)     | Frontend Develop & UI/UX Design     |
| **우승제** | [@iconkok](https://github.com/icankok)     | Sensor Algorithm & Backend Develop    |
| **박상준** | [@sangjun0412](https://github.com/sangjun0412)     | Sensor Algorithm & Backend Develop      |

<br>

## ✏ reference
[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/)
