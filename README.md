# Mochung - 모바일 청첩장 서비스

Mochung은 모바일 청첩장 서비스 웹 애플리케이션입니다. 사용자가 쉽게 결혼식 초대장을 생성하고 공유할 수 있도록 설계되었습니다.

## 🚀 기술 스택

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: Zustand (예정)
- **Deployment**: Vercel (예정)

## 📂 프로젝트 구조

```
mochung/
├── public/          # 정적 파일 (이미지, 아이콘 등)
├── src/             # 소스 코드
│   ├── app/        # 페이지 및 레이아웃
│   ├── components/ # 재사용 가능한 UI 컴포넌트
│   ├── hooks/      # 커스텀 훅
│   ├── utils/      # 유틸리티 함수
│   ├── styles/     # 전역 스타일 및 Tailwind 설정
│   ├── store/      # Zustand 상태 관리 (예정)
├── .gitignore       # Git 무시 파일 목록
├── package.json     # 프로젝트 설정 및 의존성
├── README.md        # 프로젝트 설명 파일
└── tsconfig.json    # TypeScript 설정
```

## 📌 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/JeanYoungPark/mochung.git
cd mochung
```

### 2. 패키지 설치

```bash
npm install
# 또는
yarn install
```
### 3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

로컬에서 `http://localhost:3000`에 접속하여 확인할 수 있습니다.

## 📌 주요 기능 (예정)

- 초대장 템플릿 선택 및 커스터마이징
- 결혼식 일정 및 장소 정보 입력
- 초대 링크 공유 기능
- RSVP(참석 여부) 응답 수집
- 사진 및 동영상 업로드 지원

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

---

추가 기능이나 개선 아이디어가 있다면 [Issue](https://github.com/JeanYoungPark/mochung/issues)를 남겨주세요! 😊
