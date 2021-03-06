# 개념 설명

## Babel

<p align="center"><img src="./ReadmeAsset/Babel.png"></p>
- 일부 최신 Browser만 동작하는 기능이나, 예전 Browser에서 작동하지 않는 기능을 구현해야 할 경우(`크로스 브라우징`) 우리는 어떻게 해야할까?

> Web은 브라우저나 플랫폼마다 보여지는 모습이 다른 경우가 많은데, 이러한 차이를 최소화 하여 브라우저, 환경에 영향을 최소한으로 받고 해당 웹 서비스를 사용할 수 있게 최적화를 하는 작업으로 크로스 브라우징을 진행

- 이러한 이슈를 해결하기 위해 나온것이 `Babel`

- ESNext, JSX 등 다른 언어로 분류되는 언어들에 대해서도 모든 브라우저에서 동작할 수 있도록 호환성을 지켜주는 좋은 친구다! (근데 왜 바벨일까? , 바벨탑과 관련 있을까?)

> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- 바벨의 빌드 과정

1. 파싱(Parsing) : 코드를 읽고 추상 구문 트리(AST)로 변환하는 단계
2. 변환(Transforming) : 추상 구문 트리를 변경
3. 출력(Printing) : 변경된 결과물을 출력

- `Parsing` , `Printing` 은 `Babel Plugin`(바벨이 어떤 코드를 어떻게 변환할지)이 진행

- `Babel`플러그인들을 세트로 묶어놓은 경우를 `Preset`이라고 부르는데, `preser-env`가 대표적

- `Babel`은 `Polyfill`(최신 ECMA 환경 구축을 위해 존재하지 않는 빌트인 메소드를 추가) 도 같이 진행해준다

- `Babel`의 `Polyfill`의 경우 Deprecated 되었는데( 허걱 어떡해! ) 이제는 `transform-runtime`을 설치해서 사용해보자

  - Babel 모듈들 ( 어떤 놈들인지 체크해보자 )

  ```
  "@babel/core"
  "@babel/runtime"
  "@babel/plugin-transform-runtime"
  "@babel/preset-env"
  "@babel/preset-react"
  "@babel/preset-typescript"
  "babel-loader"
  ```

### Webpack

- 과거 Html과 CSS로 구성하면 되던 `Web page`에 비해 `Web Application`의 복잡도가 증가하면서 자바스크립트 코드의 양이 많아지게 되었다

- 코드의 양이 많아 진다는것은 유지보수의 어려움과 직결이 되기 때문에 모듈로 관리하는 방법이 필요 하게 되었다

- 또한 영원히 같으면 편했을 `JS`가 어느 순간부터는 혁신적인 모습을 통해 `ES6` 부터는 모든 브라우저가 이를 지원하지 않게 되었다.

- 그래서 개발자들은 브라우저와 버전에 상관없이 편한 모듈 시스템을 원했고 이렇게 탄생하게 된 아이가 `Webpack`이다 (응애응애)

### 그래서 Webpack이 뭔데!

- `Webpack`여러 파일을 하나로 합쳐주는 자바스크립트 번들러이다.

- 하나의 entry point에서 시작하여 의존하는 모듈을 찾고, `하나`의 결과물을 만들어 내며 컴파일 소도, 로더의 사용 같은 여러가지 장점이 존재한다.

- `Webpack`은 `webpack.config.js`와 같은 파일에 옵션을 주어 사용할수 있는데 `mode(실행모드)`, `entry(시작점 경로)`, `output(번들링 결과물위치)` 과 같은 옵션들이 있다

- WebPack은 모든 파일을 `lodaer`의 관점으로 생각하는데, `JS`,`CSS`,`Image` 기타등등을 전부 모듈로 보기 때문에 `import`를 통해 가져오게 된다.

- 이러한 방식은 다양한 소스를 `JS`에서 바로 사용할수 있게 하여 매우 생산성을 높일수 있게 해주었다.

## Wbpack Plugin

<p align="center"><img src="./ReadmeAsset/Webpack.png"></p>
- `Webpack`에도 플러그인 들이 존재하는데 이게 처음에는 편했겠지만, 가면갈수록 많아지고 어쩌면 우리를 괴롭게 하는지도 모르겠다

- `lodaer`는 파일 단위로 처리하는 반면, `Plugin`은 결과물을 처리한다(난독화, 추출 기타 등등).

---

### 대표 플러그인

- `BannerPlugin` : 기본 플러그인,`build Ifno` ,`git info`같은 내용들을 추가할 수 있다.

- `DefinePlugin` : 기본 플러그인, 여러 환경에서 개발할 때 환경에 따라 API 주소가 다를 수 있는데 이러한 환경 의존적인 정보를 관리하기 위한 플러그인이다.

- `HtmlWebpackPlugin` : HTML 파일을 후처리 하는데 사용한다.

- `CleanWebpackPlugin` : 빌드 이전 결과물을 제거하는 플러그인이다.

- `MiniCssExtractPlugin` :CSS를 별도 파일로 뽑아내는 플러그인이다.

- 내가 사용한 `Webpack`

- "@pmmmwh/react-refresh-webpack-plugin": '메모리상에 build 결과를 만들어놓고 수정된 부분만 감지해'
- "clean-webpack-plugin": '사용하지 않는 웹팩 Asset을 제거'

- "css-loader": "CSS 처리기",
- "style-loader": "<stlye>태그 삽힙하여 CSS에 DOM추가",

- "html-webpack-plugin": "HTML에 후처리",
- "react-refresh": "수정된 사항을 빠르게 고쳐준다",

- 아래 내용들은 스스로 찾아보도록하자 (필수적인 내용이라 찾아보길 권장)
- "webpack":
- "webpack-cli":
- "webpack-dev-server":
- "webpack-merge":

## TypesScript

<p align="center"><img src="./ReadmeAsset/TypeScript.png"></p>

- HTML5가 등장하기 이전까지 웹 애플리케이션은 플래시, 실버라이트, 액티브엑스와 같은 플러그인에 의존하여 인터랙티브한 웹페이지를 구축해왔다

- 그러다가 HTML5가 등장함으로써 플러그인에 의존하던 구축 방식은 자바스크립트로 대체가 되었고 AJAX의 활성화로 사용자 경험을 제공할 수 있는 SPA(Single Page Application)가 대세가 되었다

- `TypeScript`는 이러한 `Javascript` 개발에 `정적 타입 시스템`을 도입하고 하는 노력에서 나온 친구다 (ex: 자매품 커피스크립트)

- TypeScript는 ES5의 Superset이므로 기존의 자바스크립트(ES5) 문법을 그대로 사용이 가능하다

- 또한, ES6의 새로운 기능들을 사용하기 위해 Babel과 같은 별도 트랜스파일러(Transpiler)를 사용하지 않아도 ES6의 새로운 기능을 기존의 자바스크립트 엔진(현재의 브라우저 또는 Node.js)에서 실행할 수 있다.

- `TypeScript`는 `tsconfig.json` 파일에서 컴파일에 관련된 설정들을 컨트롤 할수있다.

### 기본 옵션

"incremental": true, 증분 컴파일 설정 여부

"target": "es5", 사용할 특정 ECMAScript 버전 설정: 'ES3' (기본), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 혹은 'ESNEXT'.

"module": "commonjs", 모듈을 위한 코드 생성 설정: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'.

"lib": [], 컴파일에 포함될 라이브러리 파일 목록

"allowJs": true, 자바스크립트 파일 컴파일 허용 여부

"checkJs": true, .js 파일의 오류 검사 여부

"jsx": "preserve", JSX 코드 생성 설정: 'preserve', 'react-native', 혹은 'react'.

"declaration": true, '.d.ts' 파일 생성 여부.

"declarationMap": true, 각 '.d.ts' 파일의 소스맵 생성 여부.

"sourceMap": true, '.map' 파일 생성 여부.

"outFile": "./", 단일 파일로 합쳐서 출력합니다.

"outDir": "./", 해당 디렉토리로 결과 구조를 보냅니다.

"rootDir": "./", 입력 파일의 루트 디렉토리(rootDir) 설정으로 --outDir로 결과 디렉토리 구조를 조작할 때 사용됩니다.

"composite": true, 프로젝트 컴파일 여부

"tsBuildInfoFile": "./", 증분 컴파일 정보를 저장할 파일

"removeComments": true, 주석 삭제 여부

"noEmit": true, 결과 파일 내보낼지 여부

"importHelpers": true, 'tslib'에서 헬퍼를 가져올 지 여부

"downlevelIteration": true, 타겟이 'ES5', 'ES3'일 때에도 'for-of', spread 그리고 destructuring 문법 모두 지원

"isolatedModules": true, 각 파일을 분리된 모듈로 트랜스파일 ('ts.transpileModule'과 비슷합니다).

### 엄격한 타입-확인 옵션

---

"strict": true, 모든 엄격한 타입-체킹 옵션 활성화 여부

"noImplicitAny": true, 'any' 타입으로 구현된 표현식 혹은 정의 에러처리 여부

"strictNullChecks": true, 엄격한 null 확인 여부

"strictFunctionTypes": true, 함수 타입에 대한 엄격한 확인 여부

"strictBindCallApply": true, 함수에 엄격한 'bind', 'call' 그리고 'apply' 메소드 사용 여부

"strictPropertyInitialization": true, 클래스의 값 초기화에 엄격한 확인 여부

"noImplicitThis": true, 'any' 타입으로 구현된 'this' 표현식 에러처리 여부

"alwaysStrict": true, strict mode로 분석하고 모든 소스 파일에 "use strict"를 추가할 지 여부

### 추가적인 확인

---

"noUnusedLocals": true, 사용되지 않은 지역 변수에 대한 에러보고 여부

"noUnusedParameters": true, 사용되지 않은 파라미터에 대한 에러보고 여부

"noImplicitReturns": true, 함수에서 코드의 모든 경로가 값을 반환하지 않을 시 에러보고 여부

"noFallthroughCasesInSwitch": true, switch문에서 fallthrough 케이스에 대한 에러보고 여부

### 모듈 해석 옵션

---

"moduleResolution": "node", 모듈 해석 방법 설정: 'node' (Node.js) 혹은 'classic' (TypeScript pre-1.6).

"baseUrl": "./", non-absolute한 모듈 이름을 처리할 기준 디렉토리

"paths": {}, 'baseUrl'를 기준으로 불러올 모듈의 위치를 재지정하는 엔트리 시리즈

"rootDirs": [], 결합된 컨텐츠가 런타임에서의 프로젝트 구조를 나타내는 루트 폴더들의 목록

"typeRoots": [], 타입 정의를 포함할 폴더 목록, 설정 안 할 시 기본적으로 ./node_modules/@types로 설정

"types": [], 컴파일중 포함될 타입 정의 파일 목록

"allowSyntheticDefaultImports": true, default export이 아닌 모듈에서도 default import가 가능하게 할 지 여부, 해당 설정은 코드 추출에 영향은 주지 않고, 타입확인에만 영향을 줍니다.

"esModuleInterop": true, 모든 imports에 대한 namespace 생성을 통해 CommonJS와 ES Modules 간의 상호 운용성이 생기게할 지 여부, 'allowSyntheticDefaultImports'를 암시적으로 승인합니다.

"preserveSymlinks": true, symlik의 실제 경로를 처리하지 않을 지 여부

"allowUmdGlobalAccess": true, UMD 전역을 모듈에서 접근할 수 있는 지 여부

### 소스 맵 옵션

---

"sourceRoot": "", 소스 위치 대신 디버거가 알아야 할 TypeScript 파일이 위치할 곳

"mapRoot": "", 생성된 위치 대신 디버거가 알아야 할 맵 파일이 위치할 곳

"inlineSourceMap": true, 분리된 파일을 가지고 있는 대신, 단일 파일을 소스 맵과 가지고 있을 지 여부

"inlineSources": true, 소스맵과 나란히 소스를 단일 파일로 내보낼 지 여부, '--inlineSourceMap' 혹은 '--sourceMap'가 설정되어 있어야 한다.

### 실험적 옵션

---

"experimentalDecorators": true, ES7의 decorators에 대한 실험적 지원 여부

"emitDecoratorMetadata": true, decorator를 위한 타입 메타데이터를 내보내는 것에 대한 실험적 지원 여부

### 추가적 옵션

---

"skipLibCheck": true, 정의 파일의 타입 확인을 건너 뛸 지 여부

"forceConsistentCasingInFileNames": true 같은 파일에 대한 일관되지 않은 참조를 허용하지 않을 지 여부
