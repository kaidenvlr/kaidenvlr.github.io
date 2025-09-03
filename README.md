# Портфолио — React + TypeScript + Vite

## Локальная разработка

```bash
npm i
npm run dev
```

Откройте `http://localhost:5173`.

## Продакшен сборка

```bash
npm run build
npm run preview
```

## Деплой на GitHub Pages

Настроен workflow `.github/workflows/deploy.yml` на ветку `master`. После пуша:
- Проект собирается и загружается как артефакт Pages
- Выполняется деплой через `actions/deploy-pages`

Если используете собственный домен, положите файл `CNAME` в корень — он копируется в `dist` на `postbuild`.