@AGENTS.md

# Портфоліо Olha Sokolova

## Проєкт і стек

Сайт-портфоліо UI/UX-дизайнерки: головна, проєкти (з сторінкою кейсу), About, Contacts, Get in touch. Темна тема, прямі кути, жовтий акцент.

- Next.js (App Router), TypeScript, Tailwind CSS v4.
- Сторінки в `app/`, компоненти в `components/`, Storybook у `.storybook/` і `stories/`.
- Картинки в `assets/`, резюме (PDF) у `public/`.
- Скрипти: `npm run dev`, `npm run build`, `npm run storybook`.

## Робота з Git

- Уся робота йде в гілці `main`.
- Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт, тому перед пушем питай мене.

## Кольори

Єдине джерело: `@theme` у `app/globals.css`. Стандартна палітра Tailwind скинута, працюють лише ці токени (`bg-accent`, `text-ink`, `border-line`):

- `canvas`: фон сторінки.
- `surface`: поля форми, блоки на темному.
- `line`: розділювачі, декоративні рамки.
- `accent`: кнопки, картки проєктів, посилання, фокус.
- `ink`: основний текст.
- `ink-muted`: приглушений текст, межа поля форми (контраст не менше 3:1).
- `danger`: текст помилки, межа поля в помилці.

## Типографіка

Шрифт `font-sans`: Helvetica Neue, Helvetica, Arial (системний стек, веб-шрифтів немає).

- `text-display`: логотип, 64 px, жирний.
- `text-heading`: заголовки сторінок, 48 px.
- `text-lead`: меню, кнопки, підзаголовки, 24 px.
- `text-body`: основний текст, 20 px.
- `text-small`: мета, списки, поля форми, 18 px.
- `text-caption`: мітки великими літерами (`uppercase` лише з ним), 14 px.

## Відступи, радіуси й пропорції

- Відступи: 8, 12, 16, 24, 32 px, у класах числа 2, 3, 4, 6, 8 (`p-4`, `gap-6`). Між великими секціями: `section`.
- Радіуси: `rounded-control`, `rounded-card`. Обидва 0, кути прямі.
- Пропорції: `aspect-portrait` (3:4), `aspect-cover` (16:9), `aspect-case-logo` (2:1).
- Розкладка сторінок: `max-w-content` (1120 px), `max-w-prose` (664 px), точка перелому `tablet` (896 px) між `md` і `lg`.
- Ширини блоків (відсотки від батьківського): `w-hero-photo` (19/60), `w-hero-gap` (1/15), `w-cards` (75%), `w-cards-offset` (20%), `w-about-photo` (1/3), `w-menu` (50%).
- Фокус і підкреслення: `outline-focus` (колір окремо, `outline-accent`), `underline-offset-link`, `underline-current`. Не використовуй `outline-2`, `outline-offset-2`, `underline-offset-4/8`, `decoration-2`.

## Компоненти

Лежать у `components/<Назва>/` разом з історією (`.stories.tsx`) і документацією (`.mdx`). Дивитися в Storybook (`npm run storybook`, сторінка «Токени»: `stories/Tokens.mdx`).

- `Button`: кнопка або посилання (`href`). Варіанти `primary` (`bg-accent`, текст `canvas`) і `secondary` (межа `ink-muted`), розміри `md`, `lg`. Стани: hover, focus, disabled через `aria-disabled` і пояснення `disabledReason`.
- `FormField`: поле з підписом над ним. Параметри `error`, `errorMessage`, `multiline`, `required`. Стани: hover, focus, disabled, помилка (`danger`).
- `WorkCard`: клікабельна картка проєкту з обкладинкою `aspect-cover`. Параметри `imagePosition`, `showTitle`, `meta`, `surface` (`canvas` або `accent`: від нього залежить колір фокуса). Hover: заливка `canvas`, текст `ink`.
- `Navigation`: меню сайту. На вузькому екрані згортається в кнопку «Menu», Escape закриває. Активний пункт: `underline-current`, `aria-current="page"`.

## Правила

- Кольори, розміри тексту, радіуси й пропорції беруться лише з токенів вище.
- Класи, яких немає в `@theme` (`text-white`, `bg-black`, `text-sm`, `rounded-md`, `gray-500`), не використовуй.
- Відступи в компонентах лише з кроків 8, 12, 16, 24, 32 px (числа 2, 3, 4, 6, 8). Токени розкладки сторінки (`max-w-content`, `w-cards`, `section` тощо) лише на сторінках, не всередині компонентів.
- Значення в квадратних дужках (`p-[13px]`, `h-[150px]`, `text-[#2B4BDB]`) і hex заборонені.
- Нові кольори не додавай.
- Використовуй готові компоненти замість нових.
- Кожен інтерактивний елемент має стани default, hover, focus, disabled. Поле форми має ще й стан помилки.
- Вимкнена кнопка: `aria-disabled` з поясненням, а не атрибут `disabled`.
- Картинки лежать у `assets/` і імпортуються (`import cover from "@/assets/cover.jpg"`), не з `public/`.
- Після змін у компоненті онови його історію й документацію в Storybook у тому ж кроці. Змінився `@theme`: онови `stories/Tokens.mdx` і перезапусти `npm run dev`.
- Кнопка прямокутна, жовта, текст `canvas`. Мазок пензля зі старого сайту не переносимо.
- Картки проєктів жовті (`accent`), текст `canvas`; при наведенні заливка `canvas`, текст `ink`, межа `accent` лишається.
- Файл резюме лишається зі старим прізвищем (`Olha_Okulevych_Resume.pdf`), на сайті ім'я Olha Sokolova.

### Винятки

- Декор: для декоративних картинок (рука, скріпка, лінія; `alt=""`, `aria-hidden`) дозволені позиціювання й трансформації поза токенами: дробові ширини й зсуви (`w-1/5`, `left-1/16`), `rotate-*`, `translate-*`, `-scale-x-100`, `z-10`.
- Смуги на всю ширину: декоративні блоки без вмісту (жовта підложка під картками, `aria-hidden`) можуть виходити за межі контенту через `left-1/2`, `w-screen`, `-translate-x-1/2`.
- Фото з нахилом: одне змістовне фото (портрет на About) може мати `rotate-2`. Інші кути й трансформації для змістовних зображень не дозволені.
- `z-10` дозволений також для випадного меню в `Navigation`.

## Посилання

- План сайту: `docs/site-plan.md`
- Storybook: `npm run storybook`, відкривається на `http://localhost:6006`
