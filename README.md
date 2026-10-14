# Portfólio — Miguel Paula

Site pessoal em Next.js 16 (App Router), PT-BR em `/` e EN em `/en`. Página 100% estática.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
```

## Editar conteúdo

Todo texto e link mora em `src/content/site.ts`:

- `links` — e-mail e links dos mods (CurseForge/Modrinth). Link `null` mostra "link em breve".
- `pt` / `en` — os textos das duas línguas, lado a lado.

Imagens ficam em `public/img/` (webp, até 1920 px).

## Publicar

O site está no ar em **https://miguel-aw.github.io**. Todo `git push` na `main` publica sozinho
(GitHub Actions, `.github/workflows/deploy.yml`): lint, build estático (`STATIC_EXPORT=1`) e deploy.

- Ver o deploy: aba **Actions** do repositório.
- Domínio próprio: Settings → Pages → Custom domain, e trocar `NEXT_PUBLIC_SITE_URL` no workflow.
- Alternativa: importar o repositório na Vercel funciona sem configuração.

## Layouts

`/` é o **Multipista**. Alternativas (fora da busca do Google): `/layouts/programacao`, `/layouts/artes`,
`/layouts/maximalismo`, com vitrine em `/layouts`. Componentes em `src/components/layouts/`.

## Estrutura

- `src/app/(pt)` e `src/app/(en)/en` — um layout raiz por idioma (`<html lang>` certo em cada um).
- `src/components/Portfolio.tsx` — a página inteira.
- `src/app/globals.css` — identidade visual (tokens no topo).
