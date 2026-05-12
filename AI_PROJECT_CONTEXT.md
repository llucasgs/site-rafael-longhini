# Contexto do Projeto para Claude/ChatGPT

Arquivo preparado para ser carregado em assistentes de IA no navegador. Ele resume o projeto, a arquitetura atual, os arquivos relevantes, decisoes tecnicas e pontos de atencao.

## Como usar

Anexe este arquivo no Claude/ChatGPT e use um prompt como:

```text
Voce e um desenvolvedor senior especialista em Next.js, React, TypeScript, Tailwind CSS, SEO, acessibilidade e performance.

Analise o contexto do projeto antes de sugerir alteracoes. Respeite a arquitetura existente, preserve o comportamento atual e seja cuidadoso com Next.js 16, pois este projeto informa que ha mudancas de API/convencoes em relacao a versoes anteriores.

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

## Dependencias de desenvolvimento relevantes

```json
{
  "@gltf-transform/cli": "^4.3.0",
  "@tailwindcss/postcss": "^4",
  "eslint": "^9",
  "eslint-config-next": "16.2.4",
  "typescript": "^5"
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
 M src/i18n/pt-BR.json
?? public/Sections/Section4/
?? src/components/Sections/Section4/
```

Leitura: a pagina principal foi alterada para incluir a nova secao `Customers`. O arquivo `pt-BR.json` recebeu chaves de clientes. A pasta `public/Sections/Section4/` contem novos logos SVG de clientes e `src/components/Sections/Section4/` contem a nova secao.

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
        Expertise.tsx
      Section4/
        Customers.tsx
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
      3Dprinter.png
    Section4/
      logo01Colgate.svg
      logo02Tramontina.svg
      logo03Bridgestone.svg
      logo04VigorAlimentos.svg
      logo05Valeo.svg
      logo06DormerPramet.svg
      logo07Wheaton.svg
      logo08Noar.svg
      logo09Farmacap.svg
      logo010Arteres-Estojos.svg
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
| Logos `.svg` | Assets de cliente; foram listados por caminho |

## Arquitetura da pagina

`src/app/page.tsx` monta a landing page nesta ordem:

```tsx
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Sections/Section1/Hero";
import { Services } from "@/components/Sections/Section2/Services";
import { Expertise } from "@/components/Sections/Section3/Expertise";
import { Customers } from "@/components/Sections/Section4/Customers";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Expertise />
        <Customers />
        <section id="experience" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </>
  );
}
```

As secoes `experience` e `contact` ainda parecem placeholders vazios.

## Layout global e SEO

`src/app/layout.tsx`:

- Usa Montserrat via `next/font/google`.
- Envolve a aplicacao com `LanguageProvider`.
- Define metadados basicos de SEO.
- Define `html lang="pt-BR"` inicialmente.
- Define Open Graph e Twitter card, mas ainda sem `metadataBase`, URL canonica ou imagem OG explicita.

Ponto de atencao: leituras no terminal exibem textos acentuados como `SoluÃ§Ãµes`. Isso pode ser apenas encoding do terminal, mas vale validar os arquivos reais em UTF-8 antes de alterar conteudo textual.

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

Ponto de atencao importante: no estado atual, a chave `customers` foi encontrada apenas em `src/i18n/pt-BR.json`. Como o `LanguageContext` cai para `pt-BR` quando uma chave nao existe no idioma ativo, a secao `Customers` funciona nos demais idiomas, mas exibira textos em portugues ate que as traducoes sejam adicionadas aos outros JSONs.

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

Pontos de atencao:

| Ponto | Impacto | Recomendacao |
| --- | --- | --- |
| `about` no menu | Nao ha uma secao com `id="about"` visivel em `page.tsx` | Confirmar se o `Hero` possui esse id internamente; se nao possuir, ajustar |
| `customers` fora do menu | A nova secao existe, mas nao aparece na navegacao | Decidir se deve entrar como "Clientes" |
| `experience` e `contact` | Existem como placeholders vazios | Implementar conteudo real ou remover temporariamente do menu |

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

`src/components/Sections/Section2/Services.tsx`:

- E um client component.
- Usa `Image` do Next.js.
- Usa o asset `/Sections/Section2/3Dprinter.png`.
- Renderiza 6 cards de servicos em formato accordion.
- Cada card tem estado proprio (`isOpen`).
- Usa `useId()` para criar `aria-controls`.
- Usa `aria-expanded`, `aria-controls` e `aria-label` no botao do card.
- Usa `ChevronDown` rotacionado quando aberto.
- Esconde/exibe a descricao com grid rows (`grid-rows-[0fr]` / `grid-rows-[1fr]`).
- Usa `SectionTitle` com a API `title` e `description`.
- A imagem possui `alt={t("services.imageAlt")}`, portanto esta sendo tratada como conteudo informativo, nao como imagem puramente decorativa.

Servicos:

| Servico | Chave |
| --- | --- |
| Desenvolvimento de produtos | `services.items.productDevelopment` |
| Engenharia reversa | `services.items.reverseEngineering` |
| Prototipagem 3D | `services.items.prototyping` |
| Ferramentas, moldes e dispositivos | `services.items.tooling` |
| Automacao e melhorias industriais | `services.items.automation` |
| Estruturacao produtiva e gestao | `services.items.industrialManagement` |

Chaves relevantes em `services`:

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

## Expertise e modelo 3D

`src/components/Sections/Section3/Expertise.tsx`:

- E um client component.
- Combina a secao de expertise com o modelo 3D interativo.
- Usa `dynamic()` com `ssr: false` para carregar `PrinterCanvas`.
- Usa `IntersectionObserver` para renderizar o canvas apenas quando a secao se aproxima.
- Isso ajuda performance, pois evita iniciar Three.js no carregamento inicial.
- A secao tem `id="expertise"`.
- Usa tres grupos de conhecimento:
  - Metodologias e melhoria continua.
  - Normas, qualidade e seguranca.
  - Capacidades tecnicas e industriais.
- Usa cards em formato accordion com pills.
- Usa tres cards de resumo tambem em accordion.
- Todos os textos visiveis dessa secao estao usando `t(...)` no estado atual observado.

Grupos de expertise:

| Grupo | Chave |
| --- | --- |
| Metodologias e melhoria continua | `expertise.groups.methods` |
| Normas, qualidade e seguranca | `expertise.groups.standards` |
| Capacidades tecnicas e industriais | `expertise.groups.technical` |

Cards de resumo:

| Card | Chave |
| --- | --- |
| Melhoria continua | `expertise.summaryCards.continuousImprovement` |
| Execucao tecnica | `expertise.summaryCards.technicalExecution` |
| Visao de fabrica | `expertise.summaryCards.factoryVision` |

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

Observacao historica: nao existe mais `src/components/Sections/Section3/IndustrialShowcase.tsx` no estado atual do workspace. O modelo 3D foi incorporado em `Expertise.tsx`.

## Customers

`src/components/Sections/Section4/Customers.tsx`:

- E um client component.
- Renderiza a nova secao `id="customers"`.
- Usa `SectionTitle` com `customers.title` e `customers.description`.
- Usa `ScrollReveal` para animar o titulo e os itens da grade.
- Usa `Image` do Next.js para logos SVG de clientes.
- Usa `unoptimized` nos logos SVG.
- Cada logo usa `alt={t(customer.altKey)}`.
- A grade e responsiva: 2 colunas no mobile, 3 no `md`, 5 no `lg`.
- Os cards possuem hover com elevacao, borda, brilho e transicao de grayscale para cor.

Clientes/logos atuais:

| Cliente | Asset | Chave de alt |
| --- | --- | --- |
| Colgate | `/Sections/Section4/logo01Colgate.svg` | `customers.logos.colgate` |
| Tramontina | `/Sections/Section4/logo02Tramontina.svg` | `customers.logos.tramontina` |
| Bridgestone | `/Sections/Section4/logo03Bridgestone.svg` | `customers.logos.bridgestone` |
| Vigor | `/Sections/Section4/logo04VigorAlimentos.svg` | `customers.logos.vigor` |
| Valeo | `/Sections/Section4/logo05Valeo.svg` | `customers.logos.valeo` |
| Dormer Pramet | `/Sections/Section4/logo06DormerPramet.svg` | `customers.logos.dormerPramet` |
| Wheaton | `/Sections/Section4/logo07Wheaton.svg` | `customers.logos.wheaton` |
| Noar | `/Sections/Section4/logo08Noar.svg` | `customers.logos.noar` |
| Farmacap | `/Sections/Section4/logo09Farmacap.svg` | `customers.logos.farmacap` |
| Arteres Estojos | `/Sections/Section4/logo010Arteres-Estojos.svg` | `customers.logos.arteresEstojos` |

Pontos de atencao:

| Ponto | Impacto | Recomendacao |
| --- | --- | --- |
| Chaves `customers` so existem em `pt-BR.json` | Outros idiomas exibem fallback em portugues | Adicionar traducoes aos demais JSONs |
| Secao nao esta no menu | Usuario pode nao descobrir a secao via navegacao principal | Considerar item "Clientes" no `navItems` |
| Nome do arquivo `logo010...` | Funciona, mas foge do padrao `logo10...` | Manter se ja referenciado ou renomear com cuidado |

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

`src/components/ui/SectionTitle.tsx` usa a API atual:

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

Nao usar a API antiga baseada em `children` e `eyebrow`.

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
- `aria-label` em navegacao, hero, menu mobile, accordions e secao de clientes.
- `focus-visible:ring` em controles interativos.
- Menu mobile com `aria-modal`, `role="dialog"`, `aria-expanded` e Escape.
- `document.documentElement.lang` atualizado ao trocar idioma.
- Cards de servico e expertise usam `aria-expanded` e `aria-controls`.
- Logos de clientes possuem texto alternativo via i18n.

Pontos de melhoria:

| Ponto | Impacto | Recomendacao |
| --- | --- | --- |
| `customers` so traduzido em `pt-BR` | Site parcialmente em portugues nos outros idiomas | Replicar/traduzir a chave em todos os JSONs |
| `about` no menu pode nao ter alvo | Clique pode nao rolar se nao houver elemento com esse id | Confirmar `Hero` ou criar/ajustar id |
| `customers` fora do menu | Nova secao menos acessivel pela navegacao | Adicionar item de menu se fizer sentido |
| Placeholders `experience` e `contact` vazios | UX/SEO incompletos | Implementar conteudo real ou remover do menu |
| Possivel encoding quebrado | Conteudo pode renderizar errado | Confirmar arquivos em UTF-8 |
| Metadata sem URL/imagem OG explicita | Compartilhamento social menos forte | Adicionar `metadataBase`, `openGraph.url`, `openGraph.images` quando houver dominio/imagem |
| Modelo 3D em secao principal | Pode pesar em mobile | Validar performance e fallback visual em dispositivos fracos |

## Recomendacoes tecnicas prioritarias

| Prioridade | Acao | Motivo |
| --- | --- | --- |
| Alta | Adicionar traducoes de `customers` aos demais JSONs | Evita fallback em portugues quando outro idioma esta ativo |
| Alta | Confirmar alvo do menu `about` | Evita navegacao quebrada |
| Alta | Implementar `experience` e `contact` ou remover temporariamente do menu | Evita navegacao para areas vazias |
| Media | Decidir se `customers` deve entrar no menu | Melhora descobribilidade da nova secao |
| Media | Validar encoding UTF-8 dos textos | Evita caracteres quebrados em producao |
| Media | Testar accordions de `Services` e `Expertise` com teclado e leitor de tela | Garante acessibilidade real |
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
- O modelo 3D fica em `public/Models/3DPrinter/`.

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
9. Considere que `Services` e um accordion com imagem `/Sections/Section2/3Dprinter.png`.
10. Considere que `Expertise` tambem contem o canvas 3D carregado sob demanda.
11. Considere que `Customers` existe como Section4, mas suas traducoes ainda estao somente em `pt-BR.json`.

Minha tarefa e:
[descreva a tarefa]
```
