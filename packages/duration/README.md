<div align="center">

![Sapphire Logo](https://cdn.skyra.pw/gh-assets/sapphire-banner.png)

# @sapphire/duration

**Duration utilities for JavaScript.**

[![GitHub](https://img.shields.io/github/license/sapphiredev/utilities)](https://github.com/sapphiredev/utilities/blob/main/LICENSE.md)
[![codecov](https://codecov.io/gh/sapphiredev/utilities/branch/main/graph/badge.svg?token=OEGIV6RFDO)](https://codecov.io/gh/sapphiredev/utilities)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/duration?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/duration)
[![npm](https://img.shields.io/npm/v/@sapphire/duration?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/duration)

</div>

**Table of Contents**

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Human Readable Milliseconds](#human-readable-milliseconds)
    -   [Parsing a Duration](#parsing-a-duration)
    -   [Serializing a Duration](#serializing-a-duration)
    -   [Localizing with Durations](#localizing-with-durations)
-   [Buy us some doughnuts](#buy-us-some-doughnuts)
-   [Contributors ✨](#contributors-%E2%9C%A8)

## Features

-   Written in TypeScript
-   Bundled with esbuild so it can be used in NodeJS and browsers
-   Offers CommonJS, ESM and UMD bundles
-   Fully tested

## Installation

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @sapphire/duration
```

## Usage

**Note:** While this section uses `require`, the imports match 1:1 with ESM imports. For example `const { Duration } = require('@sapphire/duration')` equals `import { Duration } from '@sapphire/duration'`.

### Human Readable Milliseconds

Milliseconds are often hard for humans to quickly parse, so it's nice to use
named enum members to make it easier to read.

```typescript
// Import the Time enum
const { Time } = require('@sapphire/duration');

setTimeout(() => {
	// Do something in half a second
}, Time.Second / 2 /* 500 */);

setTimeout(() => {
	// Do something in 6 hours
}, Time.Hour * 6 /* 21600000 */);

setTimeout(() => {
	// Do something in 1 day
}, Time.Day /* 86400000 */);
```

### Parsing a Duration

```typescript
// Import the Duration class
const { Duration } = require('@sapphire/duration');

// Create a Duration from a string
new Duration('1d3h15m3s').offset; // 98103000
new Duration('1 day, 3h & 15m, some extra characters, and another 3 seconds').offset; // 98103000

// The date from now after the specified duration
new Duration('1d3h15m3s').fromNow;

// Or use a specific date
new Duration('1d3h15m3s').dateFrom(new Date('2020-01-01T00:00:00.000Z'));
```

<details>
	<summary>
		<b>Show all available tokens</b>
	</summary>

```typescript
new Duration('1 nanosecond').offset; // 0.000001
new Duration('2 nanoseconds').offset; // 0.000002
new Duration('1 ns').offset; // 0.000001

new Duration('1 millisecond').offset; // 1
new Duration('2 milliseconds').offset; // 2
new Duration('1 ms').offset; // 1

new Duration('1 second').offset; // 1000
new Duration('2 seconds').offset; // 2000
new Duration('1 sec').offset; // 1000
new Duration('2 secs').offset; // 2000
new Duration('1 s').offset; // 1000

new Duration('1 minute').offset; // 60000
new Duration('2 minutes').offset; // 120000
new Duration('1 min').offset; // 60000
new Duration('2 mins').offset; // 120000
new Duration('1 m').offset; // 60000

new Duration('1 hour').offset; // 3600000
new Duration('2 hours').offset; // 7200000
new Duration('1 hr').offset; // 3600000
new Duration('2 hrs').offset; // 7200000
new Duration('1 h').offset; // 3600000

new Duration('1 day').offset; // 86400000
new Duration('2 days').offset; // 172800000
new Duration('1 d').offset; // 86400000

new Duration('1 week').offset; // 604800000
new Duration('2 weeks').offset; // 1209600000
new Duration('1 wk').offset; // 604800000
new Duration('2 wks').offset; // 1209600000
new Duration('1 w').offset; // 604800000

new Duration('1 month').offset; // 2629800000
new Duration('2 months').offset; // 5259600000
new Duration('1 b').offset; // 2629800000
new Duration('2 mo').offset; // 5259600000

new Duration('1 year').offset; // 31557600000
new Duration('2 years').offset; // 63115200000
new Duration('1 yr').offset; // 31557600000
new Duration('2 yrs').offset; // 63115200000
new Duration('1 y').offset; // 31557600000
```

</details>

### Serializing a Duration

```typescript
// Import the DurationFormatter class
const { DurationFormatter } = require('@sapphire/duration');

const formatter = new DurationFormatter();

// Serialize a duration
formatter.format(98103000); // 1 day 3 hours 15 minutes 3 seconds
formatter.format(-98103000); // -1 day 3 hours 15 minutes 3 seconds

// Serialize a duration with specified precision
formatter.format(98103000, 2); // 1 day 3 hours
```

### Localizing with Durations

```typescript
// Import the DurationFormatter class
const { DurationFormatter, TimeTypes } = require('@sapphire/duration');

// Create custom unit names
const units = {
	[TimeTypes.Year]: {
		1: 'año',
		DEFAULT: 'años'
	}
};

// Create a formatter the custom units
const formatter = new DurationFormatter(units);

// Serialize a duration
formatter.format(31557600000); // 1 año
formatter.format(63115200000); // 2 años
```

## Buy us some doughnuts

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, PayPal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

|   Donate With   |                       Address                       |
| :-------------: | :-------------------------------------------------: |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
|      Ko-fi      |      [Click Here](https://sapphirejs.dev/kofi)      |
|     Patreon     |    [Click Here](https://sapphirejs.dev/patreon)     |
|     PayPal      |     [Click Here](https://sapphirejs.dev/paypal)     |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=favna" title="Code">💻</a> <a href="#infra-favna" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#projectManagement-favna" title="Project Management">📆</a> <a href="https://github.com/sapphiredev/utilities/commits?author=favna" title="Documentation">📖</a> <a href="https://github.com/sapphiredev/utilities/commits?author=favna" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/kyranet"><img src="https://avatars0.githubusercontent.com/u/24852502?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aura Román</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=kyranet" title="Code">💻</a> <a href="#projectManagement-kyranet" title="Project Management">📆</a> <a href="https://github.com/sapphiredev/utilities/pulls?q=is%3Apr+reviewed-by%3Akyranet" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/sapphiredev/utilities/commits?author=kyranet" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/PyroTechniac"><img src="https://avatars2.githubusercontent.com/u/39341355?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gryffon Bellish</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=PyroTechniac" title="Code">💻</a> <a href="https://github.com/sapphiredev/utilities/pulls?q=is%3Apr+reviewed-by%3APyroTechniac" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/sapphiredev/utilities/commits?author=PyroTechniac" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/vladfrangu"><img src="https://avatars3.githubusercontent.com/u/17960496?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vlad Frangu</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=vladfrangu" title="Code">💻</a> <a href="https://github.com/sapphiredev/utilities/issues?q=author%3Avladfrangu" title="Bug reports">🐛</a> <a href="https://github.com/sapphiredev/utilities/pulls?q=is%3Apr+reviewed-by%3Avladfrangu" title="Reviewed Pull Requests">👀</a> <a href="#userTesting-vladfrangu" title="User Testing">📓</a> <a href="https://github.com/sapphiredev/utilities/commits?author=vladfrangu" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/Stitch07"><img src="https://avatars0.githubusercontent.com/u/29275227?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stitch07</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Stitch07" title="Code">💻</a> <a href="#projectManagement-Stitch07" title="Project Management">📆</a> <a href="https://github.com/sapphiredev/utilities/commits?author=Stitch07" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/apps/depfu"><img src="https://avatars3.githubusercontent.com/in/715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>depfu[bot]</b></sub></a><br /><a href="#maintenance-depfu[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/allcontributors"><img src="https://avatars0.githubusercontent.com/in/23186?v=4?s=100" width="100px;" alt=""/><br /><sub><b>allcontributors[bot]</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=allcontributors[bot]" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Nytelife26"><img src="https://avatars1.githubusercontent.com/u/22531310?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler J Russell</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Nytelife26" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Alcremie"><img src="https://avatars0.githubusercontent.com/u/54785334?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ivan Lieder</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Alcremie" title="Code">💻</a> <a href="https://github.com/sapphiredev/utilities/issues?q=author%3AAlcremie" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/RealShadowNova"><img src="https://avatars3.githubusercontent.com/u/46537907?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hezekiah Hendry</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=RealShadowNova" title="Code">💻</a> <a href="#tool-RealShadowNova" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/Vetlix"><img src="https://avatars.githubusercontent.com/u/31412314?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vetlix</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Vetlix" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ethamitc"><img src="https://avatars.githubusercontent.com/u/27776796?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ethan Mitchell</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=ethamitc" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/noftaly"><img src="https://avatars.githubusercontent.com/u/34779161?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Elliot</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=noftaly" title="Code">💻</a></td>
    <td align="center"><a href="https://jurien.dev"><img src="https://avatars.githubusercontent.com/u/5418114?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jurien Hamaker</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=jurienhamaker" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://fanoulis.dev/"><img src="https://avatars.githubusercontent.com/u/38255093?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Charalampos Fanoulis</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=cfanoulis" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/apps/dependabot"><img src="https://avatars.githubusercontent.com/in/29110?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dependabot[bot]</b></sub></a><br /><a href="#maintenance-dependabot[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://kaname.netlify.app/"><img src="https://avatars.githubusercontent.com/u/56084970?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kaname</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=kaname-png" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nandhagk"><img src="https://avatars.githubusercontent.com/u/62976649?v=4?s=100" width="100px;" alt=""/><br /><sub><b>nandhagk</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/issues?q=author%3Anandhagk" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://megatank58.me/"><img src="https://avatars.githubusercontent.com/u/51410502?v=4?s=100" width="100px;" alt=""/><br /><sub><b>megatank58</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=megatank58" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/UndiedGamer"><img src="https://avatars.githubusercontent.com/u/84702365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>UndiedGamer</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=UndiedGamer" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Lioness100"><img src="https://avatars.githubusercontent.com/u/65814829?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lioness100</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Lioness100" title="Documentation">📖</a> <a href="https://github.com/sapphiredev/utilities/commits?author=Lioness100" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://gitlab.com/DavidPH/"><img src="https://avatars.githubusercontent.com/u/44669930?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=DavidPHH" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/apps/renovate"><img src="https://avatars.githubusercontent.com/in/2740?v=4?s=100" width="100px;" alt=""/><br /><sub><b>renovate[bot]</b></sub></a><br /><a href="#maintenance-renovate[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://renovate.whitesourcesoftware.com/"><img src="https://avatars.githubusercontent.com/u/25180681?v=4?s=100" width="100px;" alt=""/><br /><sub><b>WhiteSource Renovate</b></sub></a><br /><a href="#maintenance-renovate-bot" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://fc5570.me/"><img src="https://avatars.githubusercontent.com/u/68158483?v=4?s=100" width="100px;" alt=""/><br /><sub><b>FC</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=FC5570" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Tokipudi"><img src="https://avatars.githubusercontent.com/u/29551076?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jérémy de Saint Denis</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Tokipudi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ItsMrCube"><img src="https://avatars.githubusercontent.com/u/25201357?v=4?s=100" width="100px;" alt=""/><br /><sub><b>MrCube</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=ItsMrCube" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/bitomic"><img src="https://avatars.githubusercontent.com/u/35199700?v=4?s=100" width="100px;" alt=""/><br /><sub><b>bitomic</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=bitomic" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://c43721.dev/"><img src="https://avatars.githubusercontent.com/u/55610086?v=4?s=100" width="100px;" alt=""/><br /><sub><b>c43721</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=c43721" title="Code">💻</a></td>
    <td align="center"><a href="https://commandtechno.com/"><img src="https://avatars.githubusercontent.com/u/68407783?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Commandtechno</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Commandtechno" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dhruv-kaushikk"><img src="https://avatars.githubusercontent.com/u/73697546?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aura</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=dhruv-kaushikk" title="Code">💻</a></td>
    <td align="center"><a href="https://axis.moe/"><img src="https://avatars.githubusercontent.com/u/54381371?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=axisiscool" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/imranbarbhuiya"><img src="https://avatars.githubusercontent.com/u/74945038?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Parbez</b></sub></a><br /><a href="#maintenance-imranbarbhuiya" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/NotKaskus"><img src="https://avatars.githubusercontent.com/u/75168528?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paul Andrew</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=NotKaskus" title="Documentation">📖</a></td>
    <td align="center"><a href="https://linktr.ee/mzato0001"><img src="https://avatars.githubusercontent.com/u/62367547?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mzato</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Mzato0001" title="Code">💻</a> <a href="https://github.com/sapphiredev/utilities/issues?q=author%3AMzato0001" title="Bug reports">🐛</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/MajesticString"><img src="https://avatars.githubusercontent.com/u/66224939?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Harry Allen</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=MajesticString" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/EvolutionX-10"><img src="https://avatars.githubusercontent.com/u/85353424?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Evo</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=EvolutionX-10" title="Code">💻</a></td>
    <td align="center"><a href="https://enes.ovh/"><img src="https://avatars.githubusercontent.com/u/61084101?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Enes Genç</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=enxg" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/muchnameless"><img src="https://avatars.githubusercontent.com/u/12682826?v=4?s=100" width="100px;" alt=""/><br /><sub><b>muchnameless</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=muchnameless" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/r-priyam"><img src="https://avatars.githubusercontent.com/u/50884372?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Priyam</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=r-priyam" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
