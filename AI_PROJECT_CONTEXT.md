# Contexto do Projeto para Claude/ChatGPT

Arquivo preparado para ser carregado em assistentes de IA no navegador. Ele resume o projeto, a arquitetura atual, os arquivos relevantes, decisoes tecnicas e pontos de atencao.

## Como usar

Anexe este arquivo no Claude/ChatGPT e use um prompt como:

```text
Voce e um desenvolvedor senior especialista em Next.js, React, TypeScript, Tailwind CSS, SEO, acessibilidade e performance.

Analise o contexto do projeto antes de sugerir alteracoes. Respeite a arquitetura existente, preserve o comportamento atual e seja cuidadoso com Next.js 16, pois este projeto informa que ha mudancas de API/convensoes em relacao a versoes anteriores.

Objetivo: [descreva aqui a tarefa].
```

## Identidade do projeto

| Item | Informacao |
| --- | --- |
| Nome | `site-longhini` |
| Tipo | Landing page institucional |
| Empresa | Longhini Desenvolvimento Industrial |
| Responsavel citado | Rafael Longhini Lopes |
| Segmento | Desenvolvimento industrial, projetos mecanicos, engenharia reversa, prototipagem 3D, automacao industrial |
| Idioma principal | Portugues do Brasil |
| Publico | Clientes industriais e empresas que precisam transformar ideias em produtos, dispositivos, moldes, ferramentas ou maquinas especiais |

## Stack tecnica

| Area | Tecnologia |
| --- | --- |
| Framework | Next.js `16.2.4` |
| React | React `19.2.4` |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS `4` |
| 3D | Three.js, `@react-three/fiber`, `@react-three/drei` |
| Icones | `lucide-react` |
| Utilitarios | `clsx` |
| Fonte | Montserrat via `next/font/google` |
| i18n | Implementacao propria com React Context e arquivos JSON |

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

## Dependencias principais

```json
{
  "@react-three/drei": "^10.7.7",
  "@react-three/fiber": "^9.6.1",
  "clsx": "^2.1.1",
  "lucide-react": "^1.12.0",
  "next": "16.2.4",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "three": "^0.184.0"
}
```

## Instrucao importante do projeto

O arquivo `AGENTS.md` contem:

```md
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
```

Interpretacao pratica: antes de mudancas profundas em APIs do Next.js, validar contra a documentacao local instalada em `node_modules/next/dist/docs/`.

## Estado atual do Git no momento desta atualizacao

```text
 M src/app/page.tsx
 D src/components/Sections/Section2/IndustrialShowcase.tsx
 D src/components/Sections/Section3/Services.tsx
 M src/components/ui/SectionTitle.tsx
 M src/i18n/ar-SA.json
 M src/i18n/de-DE.json
 M src/i18n/en-US.json
 M src/i18n/es-ES.json
 M src/i18n/fr-FR.json
 M src/i18n/he-IL.json
 M src/i18n/hi-IN.json
 M src/i18n/it-IT.json
 M src/i18n/ja-JP.json
 M src/i18n/ko-KR.json
 M src/i18n/pt-BR.json
 M src/i18n/ru-RU.json
 M src/i18n/zh-CN.json
?? AI_PROJECT_CONTEXT.md
?? public/Sections/Section2/
?? src/components/Sections/Section2/Services.tsx
?? src/components/Sections/Section3/IndustrialShowcase.tsx
```

Leitura: houve reorganizacao de secoes. `Services` esta em `Section2` e `IndustrialShowcase` esta em `Section3`. Os caminhos antigos aparecem como deletados. Tambem ha novo asset visual em `public/Sections/Section2/3Dprinter.webp` e todos os arquivos de traducao foram modificados.

## Estrutura relevante

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    Header/
      Header.tsx
      NavMenu.tsx
      MobileMenu.tsx
      LanguageSelector.tsx
    Sections/
      Section1/
        Hero.tsx
      Section2/
        Services.tsx
      Section3/
        IndustrialShowcase.tsx
      Section4/
        Expertise.tsx
    Three/
      PrinterCanvas.tsx
      PrinterModel.tsx
    ui/
      Container.tsx
      ScrollReveal.tsx
      SectionTitle.tsx
  contexts/
    LanguageContext.tsx
  constants/
    site.ts
  i18n/
    pt-BR.json
    en-US.json
    es-ES.json
    de-DE.json
    fr-FR.json
    it-IT.json
    ja-JP.json
    ko-KR.json
    ru-RU.json
    zh-CN.json
    ar-SA.json
    he-IL.json
    hi-IN.json
  types/
    i18n.ts
  utils/
    scrollToSection.ts

public/
  Header/
    longhiniLogo.svg
    Flags/*.webp
  Sections/
    Section1/
      longhiniPicture.webp
      longhiniPicture.png
    Section2/
      3Dprinter.webp
  Models/
    3DPrinter/
      printer-optimized.glb
      license.txt
```

## Arquivos omitidos deste contexto

| Caminho | Motivo |
| --- | --- |
| `node_modules/` | Dependencias instaladas, muito grande |
| `.next/` | Build/cache local |
| `package-lock.json` | Muito extenso; usar apenas quando precisar reproduzir instalacao exata |
| Imagens `.webp`, `.png` | Binarios; foram descritos por caminho |
| Modelo `.glb` | Binario 3D; foi descrito por caminho |

## Arquitetura da pagina

`src/app/page.tsx` monta a landing page nesta ordem:

```tsx
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Sections/Section1/Hero";
import { Services } from "@/components/Sections/Section2/Services";
import { IndustrialShowcase } from "@/components/Sections/Section3/IndustrialShowcase";
import { Expertise } from "@/components/Sections/Section4/Expertise";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <IndustrialShowcase />
        <Expertise />
        <section id="experience" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </>
  );
}
```

As secoes `experience` e `contact` ainda parecem placeholders.

## Layout global e SEO

`src/app/layout.tsx`:

- Usa Montserrat via `next/font/google`.
- Envolve a aplicacao com `LanguageProvider`.
- Define metadados basicos de SEO.
- Define `html lang="pt-BR"` inicialmente.

Ponto de atencao: leituras no terminal exibiram textos acentuados como `SoluÃ§Ãµes`. Isso pode ser apenas encoding do terminal, mas vale validar os arquivos em UTF-8 antes de mexer em conteudo textual.

## Estilo global

`src/app/globals.css`:

- Importa Tailwind CSS 4 com `@import "tailwindcss"`.
- Define tokens no `@theme`: `longhini-bg`, `longhini-surface`, `longhini-card`, `longhini-orange`, `longhini-blue`.
- Usa fundo escuro com gradientes radiais e linear.
- Define `scroll-behavior: smooth`.
- Define selecao de texto com fundo laranja translucido.

## Sistema de idioma

`src/contexts/LanguageContext.tsx`:

- E um client component.
- Importa todos os JSONs estaticamente.
- Mantem idioma em estado React.
- Persiste idioma no `localStorage`.
- Atualiza `document.documentElement.lang`.
- A funcao `t(key, variables?)` resolve chaves aninhadas por ponto.
- Fallback: idioma atual -> `pt-BR` -> propria chave.

Idiomas suportados:

```ts
export type Language =
  | "pt-BR"
  | "en-US"
  | "es-ES"
  | "fr-FR"
  | "it-IT"
  | "de-DE"
  | "ru-RU"
  | "ar-SA"
  | "he-IL"
  | "hi-IN"
  | "ja-JP"
  | "ko-KR"
  | "zh-CN";
```

Todos os arquivos `src/i18n/*.json` aparecem como modificados no estado atual.

## Header

Componentes:

| Arquivo | Responsabilidade |
| --- | --- |
| `Header.tsx` | Header fixo, logo, navegacao desktop, seletor de idioma e menu mobile |
| `NavMenu.tsx` | Navegacao por botoes que chamam `scrollToSection` |
| `MobileMenu.tsx` | Menu mobile com portal, overlay, Escape e bloqueio de scroll no body |
| `LanguageSelector.tsx` | Dropdown de idiomas com bandeiras e estado ativo |

Itens de navegacao:

```ts
const navItems = [
  { id: "about", labelKey: "header.nav.about" },
  { id: "services", labelKey: "header.nav.services" },
  { id: "expertise", labelKey: "header.nav.expertise" },
  { id: "experience", labelKey: "header.nav.experience" },
  { id: "contact", labelKey: "header.nav.contact" },
];
```

Ponto de atencao: existe uma secao com `id="industrial-showcase"`, mas ela nao aparece no menu. O menu pula de `services` para `expertise`.

## Hero

`src/components/Sections/Section1/Hero.tsx`:

- Client component.
- Usa imagem `/Sections/Section1/longhiniPicture.webp`.
- Usa logo `/Header/longhiniLogo.svg`.
- CTA primario aponta para WhatsApp.
- CTA secundario rola para `services`.
- Usa cards/tags de tecnologia.
- Usa icones `lucide-react`.
- Tem `alt`, `aria-label`, `role="list"` e foco visivel.

Conteudo conceitual:

| Item | Conteudo |
| --- | --- |
| Titulo | Projeto e Desenvolvimento de Produtos |
| Proposta | Transformar ideias em produtos, dispositivos, moldes, ferramentas e maquinas especiais |
| Pessoa | Rafael Longhini Lopes |
| Tags | SolidWorks, AutoCAD, Engenharia Reversa, Impressao 3D |

## Services

`src/components/Sections/Section2/Services.tsx` foi atualizado e agora:

- E um client component.
- Usa `Image` do Next.js como imagem decorativa de fundo.
- Usa o asset `/Sections/Section2/3Dprinter.webp`.
- Renderiza 6 cards de servicos em formato accordion.
- Cada card tem estado proprio (`isOpen`).
- Usa `useId()` para criar `aria-controls`.
- Usa `aria-expanded`, `aria-controls` e `aria-label` no botao do card.
- Usa `ChevronDown` rotacionado quando aberto.
- Esconde/exibe a descricao com grid rows (`grid-rows-[0fr]` / `grid-rows-[1fr]`).
- Usa `SectionTitle` com a nova API `title` e `description`.

Servicos:

| Servico | Chave |
| --- | --- |
| Desenvolvimento de produtos | `services.items.productDevelopment` |
| Engenharia reversa | `services.items.reverseEngineering` |
| Prototipagem 3D | `services.items.prototyping` |
| Ferramentas, moldes e dispositivos | `services.items.tooling` |
| Automacao e melhorias industriais | `services.items.automation` |
| Estruturacao produtiva e gestao | `services.items.industrialManagement` |

Novas/atuais chaves relevantes em `services`:

```json
{
  "services": {
    "sectionAriaLabel": "...",
    "title": "SERVICOS",
    "description": "...",
    "imageAlt": "...",
    "card": {
      "toggleAria": "Alternar detalhes do servico {{service}}"
    }
  }
}
```

Observacao: no componente atual, a imagem de fundo recebe `alt=""` por ser decorativa. A chave `services.imageAlt` existe no JSON, mas nao esta sendo usada no componente.

## Industrial Showcase 3D

`src/components/Sections/Section3/IndustrialShowcase.tsx`:

- Client component.
- Usa `dynamic()` com `ssr: false` para carregar `PrinterCanvas`.
- Usa `IntersectionObserver` para renderizar o canvas apenas quando a secao se aproxima.
- Isso ajuda performance, pois evita iniciar Three.js no carregamento inicial.
- A secao tem `id="industrial-showcase"`.

`src/components/Three/PrinterCanvas.tsx`:

- Usa `Canvas` do `@react-three/fiber`.
- `frameloop="demand"` para renderizacao sob demanda.
- DPR limitado a `[1, 1.25]`.
- Usa `PerspectiveCamera`, luz ambiente, luz direcional, pontos de luz e `Environment`.
- Usa `OrbitControls` com rotacao, zoom e pan.

`src/components/Three/PrinterModel.tsx`:

- Carrega `/Models/3DPrinter/printer-optimized.glb`.
- Usa `useGLTF`.
- Desativa shadows.
- Marca materiais como `needsUpdate`.
- Escala padrao `2.8`, posicao `[0, -1.05, 0]`, rotacao `[0, -Math.PI / 4, 0]`.

Licenca do modelo:

- Existe `public/Models/3DPrinter/license.txt`.
- O JSON `pt-BR` menciona modelo baseado em "3D Printer - Bambu Lab A1 Mini" por `neilvfx`, licenciado sob `CC-BY-4.0`.

## Expertise

`src/components/Sections/Section4/Expertise.tsx`:

- Client component.
- Usa tres grupos de conhecimento:
  - Metodologias e melhoria continua.
  - Normas, qualidade e seguranca.
  - Capacidades tecnicas e industriais.
- Usa cards com pills.

Ponto de atencao: no final da secao ainda existem textos fixos em portugues dentro do componente, nao vindos do sistema de i18n:

```tsx
Melhoria continua
Estruturacao de processos com foco em produtividade, organizacao e reducao de desperdicios.

Execucao tecnica
Integracao entre projeto, ferramentaria, prototipagem, dispositivos e producao industrial.

Visao de fabrica
Experiencia pratica em chao de fabrica aplicada a decisoes tecnicas mais viaveis e eficientes.
```

Recomendacao: se o site deve ser totalmente multilingue, mover esses textos para os arquivos JSON.

## Componentes UI compartilhados

### Container

`src/components/ui/Container.tsx`:

```tsx
import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("mx-auto w-full max-w-7xl px-6", className)}>
      {children}
    </div>
  );
}
```

### ScrollReveal

`src/components/ui/ScrollReveal.tsx`:

- Client component.
- Usa `IntersectionObserver`.
- Aplica transicao de opacidade e translate.
- Aceita `delay?: "none" | "sm" | "md" | "lg"`.
- Respeita `motion-reduce:transition-none`.

### SectionTitle

`src/components/ui/SectionTitle.tsx` foi atualizado. A API atual e:

```tsx
type SectionTitleProps = {
  title: string;
  description?: string;
  className?: string;
};
```

Uso esperado:

```tsx
<SectionTitle
  title={t("services.title")}
  description={t("services.description")}
/>
```

Antes ele recebia `children` e `eyebrow`; isso nao e mais valido na versao atual. Verificar se todas as secoes foram adaptadas para a nova API.

## Constantes do site

`src/constants/site.ts`:

```ts
export const site = {
  name: "LONGHINI - DESENVOLVIMENTO INDUSTRIAL",
  owner: "Rafael Longhini Lopes",
  headline:
    "Projeto e Desenvolvimento de Novos Produtos e Solucoes Industriais",
  slogan: "Transformo a sua ideia em realidade.",
  location: "Sao Paulo, Sao Paulo, Brasil",

  description:
    "Solucoes industriais personalizadas com projetos mecanicos, engenharia reversa, prototipagem 3D, automacao industrial, ferramentas de producao e maquinas especiais.",

  links: {
    whatsapp: "https://wa.me/5511980609919",
    linkedin: "https://www.linkedin.com/in/rafael-longhini-lopes-69256751",
  },
} as const;
```

Observacao: a leitura no terminal exibiu alguns acentos com mojibake. Validar o arquivo real em UTF-8 antes de alterar.

## Utilitario de scroll

`src/utils/scrollToSection.ts`:

```ts
export function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) return;

  const headerOffset = 96;

  const top =
    element.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}
```

## SEO e acessibilidade

Pontos positivos:

- `metadata` definido no layout.
- `robots.index` e `robots.follow`.
- Open Graph e Twitter card.
- `alt` em imagens relevantes.
- Imagem de fundo de `Services` tratada como decorativa com `alt=""`.
- `aria-label` em navegacao, hero, menu mobile e accordions de servicos.
- `focus-visible:ring` em controles interativos.
- Menu mobile com `aria-modal`, `role="dialog"`, `aria-expanded` e Escape.
- `document.documentElement.lang` atualizado ao trocar idioma.
- Cards de servico usam `aria-expanded` e `aria-controls`.

Pontos de melhoria:

| Ponto | Impacto | Recomendacao |
| --- | --- | --- |
| `SectionTitle` mudou de API | Pode quebrar secoes ainda usando `children`/`eyebrow` | Revisar `Expertise` e demais usos |
| Textos fixos em portugues no `Expertise.tsx` | i18n incompleto | Mover para JSON |
| Placeholders `experience` e `contact` vazios | UX/SEO incompletos | Implementar conteudo real ou remover do menu |
| `industrial-showcase` fora do menu | Navegacao menos previsivel | Decidir se deve aparecer no menu ou ser apenas secao visual |
| Possivel encoding quebrado | Conteudo pode renderizar errado | Confirmar arquivos em UTF-8 |
| `services.imageAlt` existe mas nao e usado | Chave inutil se imagem for decorativa | Remover chave ou usar se a imagem passar a ser informativa |
| Metadata sem URL/imagem OG explicita | Compartilhamento social menos forte | Adicionar `metadataBase`, `openGraph.url`, `openGraph.images` quando houver dominio/imagem |

## Recomendacoes tecnicas prioritarias

| Prioridade | Acao | Motivo |
| --- | --- | --- |
| Alta | Verificar todos os usos de `SectionTitle` | A API mudou e pode haver erro de TypeScript/build |
| Alta | Validar encoding UTF-8 dos textos | Evita caracteres quebrados em producao |
| Alta | Implementar `experience` e `contact` ou remover temporariamente do menu | Evita navegacao para areas vazias |
| Media | Internacionalizar textos fixos do `Expertise.tsx` | Mantem consistencia multilingue |
| Media | Testar accordion de `Services` em teclado e leitor de tela | Garante acessibilidade real |
| Media | Validar performance do modelo 3D em mobile | Three.js pode impactar celulares |
| Baixa | Considerar extrair dados de cards para configuracoes | Facilita manutencao futura |

## Convencoes atuais do codigo

- Componentes client-side declaram `"use client"` no topo.
- Alias `@/*` aponta para `./src/*`.
- Componentes visuais ficam em `src/components`.
- Secoes ficam em `src/components/Sections/SectionN`.
- Textos multilingues ficam em `src/i18n/*.json`.
- Estado global de idioma fica em `src/contexts/LanguageContext.tsx`.
- Estilizacao e majoritariamente via classes Tailwind.
- Icones vem de `lucide-react`.
- Imagens publicas sao referenciadas por caminho absoluto a partir de `public`.

## Prompt recomendado para proximas interacoes com IA

```text
Analise este projeto como um todo antes de responder.

Regras:
1. Nao invente informacoes.
2. Respeite Next.js 16.2.4 e React 19.2.4.
3. Preserve a arquitetura existente.
4. Priorize SEO, acessibilidade, performance e manutencao.
5. Se houver mais de uma abordagem, compare pros e contras e recomende uma.
6. Nao inclua node_modules, .next, package-lock completo ou assets binarios nas respostas.
7. Ao sugerir codigo, mostre exatamente quais arquivos alterar.
8. Considere que `SectionTitle` usa props `title`, `description` e `className`.
9. Considere que `Services` agora e um accordion com imagem decorativa de fundo.

Minha tarefa e:
[descreva a tarefa]
```
