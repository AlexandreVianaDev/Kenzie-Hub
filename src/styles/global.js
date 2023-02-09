import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative: #59323F;
  --color-grey-0: #F8F9FA;
  --color-grey-1: #868E96;
  --color-grey-2: #343B41;
  --color-grey-3: #212529;
  --color-grey-4: #121214;

  --color-white: #FFFFFF;

  --color-negative: #E83F5B;
  --color-sucess: #3FE864;

  --bg-color: #121214;

  --font-1: 1.125rem; /* 18 pixels */
  --font-2: 1rem; /* 16 pixels */
  --font-3: .875rem; /* 14 pixels */
  --font-4: 0.75rem; /* 12 pixels */
  --font-100: 3rem;

  --font-weight-1: 700;
  --font-weight-2: 600;
  --font-weight-3: 400;

  --line-heigth-1: 1.75rem; /* 28 pixels */
  --line-heigth-2: 1.625rem; /* 26 pixels */
  --line-heigth-3: 1.5rem; /* 24 pixels */
  --line-heigth-4: 1.375rem; /* 22 pixels */
  --line-heigth-5: 1.125rem; /* 18 pixels */

  --radius-1: 4px;
  --radius-2: 8px;
  --radius-100: 100%;

  --gap-1: 2rem; /* 32 pixels */
  --gap-2: 1.75rem; /* 28 pixels */
  --gap-3: 1.5rem; /*  24 pixels */
  --gap-4: 1.25rem; /* 20 pixels */
  --gap-5: 1rem; /* 16 pixels */
  --gap-6: 0.875rem; /* 14 pixels */

  --container-1: 1200px;

  --font-family-1: 'Inter', sans-serif;
}

body * {
  font-family: var(--font-family-1);
  color: var(--color-grey-0);
  font-size: var(--font-2);
  font-weight: var(--font-weight-3);
  line-height: var(--line-heigth-2);
}

img {
  max-width: 100%;
}

body {
    background-color: var(--bg-color);
    color: var(--color-grey-0);
}

.container {
  width: 90%;
  max-width: var(--container-1);
  margin: 0 auto;
}

.huge-title {
  font-size: var(--font-100);
  font-weight: var(--font-weight-1);
  line-height: var(--line-heigth-1);
}

.title-1 {
  font-size: var(--font-1);
  font-weight: var(--font-weight-1);
  line-height: var(--line-heigth-1);
}

.title-2 {
  font-size: var(--font-2);
  font-weight: var(--font-weight-2);
  line-height: var(--line-heigth-2);
}

.title-3 {
  font-size: var(--font-3);
  font-weight: var(--font-weight-1);
  line-height: var(--line-heigth-3);
}

.headline {
  color: var(--color-grey-1);
  font-size: var(--font-4);
  font-weight: var(--font-weight-3);
  line-height: var(--line-heigth-4);
}

.headline-bold {
  color: var(--color-grey-1);
  font-size: var(--font-4);
  font-weight: var(--font-weight-2);
  line-height: var(--line-heigth-5);
}

.headline-italic {
  color: var(--color-grey-1);
  font-size: var(--font-4);
  font-weight: var(--font-weight-3);
  line-height: var(--line-heigth-5);
  font-style: italic;
}

.text-center {
  text-align: center;
}

.loading {
  position: absolute;
  /* top: calc(vw/2); */
  margin: 0 auto;
}

button {
  font-size: var(--font-2);
  font-weight: var(--font-weight-2);
  line-height: var(--line-heigth-5);
  border-radius: var(--radius-2);
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 10px 22px;
}

button:hover {
    background-color: var(--color-primary-focus);
}

button:disabled {
    background-color: var(--color-primary-negative);
}

.button-disabled {
    background-color: var(--color-grey-1);
}

.button-disabled:hover {
    background-color: var(--color-grey-2);
}

/* COMPONENTIZAR AQUI EM DIANTE */
form {
  background-color: var(--color-grey-3);
  border-radius: var(--radius-1);
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

form > h2 {
  text-align: center;
}

form > label {
  font-size: var(--font-4);
  font-weight: var(--font-weight-3);
  line-height: var(--line-heigth-4);
}

form > input {
  background-color: var(--color-grey-2);
  border: 1px solid var(--color-grey-2);
  border-radius: var(--radius-1);
  padding: 8px 14px;
  color: var(--color-grey-0);
}

form > input:hover, form > input:focus {
  border: 1px solid var(--color-grey-0);
}

form > p {
  color: var(--color-grey-1);
}

.field__error {
  color: var(--color-negative);
  font-size: var(--font-4);
}

form > .select__container {
  width: 100%;
  background-color: var(--color-grey-2);
  border: 1px solid var(--color-grey-2);
  border-radius: var(--radius-1);
  padding: 8px 14px;
  color: var(--color-grey-0);
}

form > .select__container > select {
  width: 100%;
  background-color: var(--color-grey-2);
  border: none;
}

form > .select__container > select > option {
  color: var(--color-grey-0);
  border: none;
}
`;

export default GlobalStyle;
