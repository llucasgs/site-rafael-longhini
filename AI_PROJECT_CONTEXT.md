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

## Instrucao importante do projeto

O arquivo `AGENTS.md` informa:

```md
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
```

Interpretacao pratica: antes de mudancas profundas em APIs do Next.js, validar contra a documentacao local instalada em `node_modules/next/dist/docs/`.

## Estado atual do Git no momento desta atualizacao

```text
 M .gitignore
 M AI_PROJECT_CONTEXT.md
 M src/components/Sections/Section5/Experience.tsx
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
?? public/Models/Chassis/
?? public/Models/Oculus/
?? public/Models/Robot/
?? src/components/Three/ExperienceModelCanvas.tsx
```

Leitura: ha trabalho em andamento na Section5 `Experience`, novos modelos 3D em `public/Models`, novas chaves de experiencia em todos os JSONs de idioma e ajustes no `.gitignore`. Nao assumir que esses arquivos ja foram commitados.

## Estrutura relevante

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    FloatingButtons/
      FloatingButtons.tsx
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
      Section5/
        Experience.tsx
    Three/
      PrinterCanvas.tsx
      PrinterModel.tsx
      ExperienceModelCanvas.tsx
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
    Section5/
      logoLonghini.svg
      logoArteres.svg
      logoCardenas.svg
      logoAmemiya.svg
  Models/
    3DPrinter/
      printer-optimized.glb
      license.txt
    Robot/
      robot-optimized.glb
      license.txt
    Chassis/
      chassis-optimized.glb
      license.txt
    Oculus/
      oculus-optimized.glb
      license.txt
```

## Arquivos omitidos deste contexto

| Caminho | Motivo |
| --- | --- |
| `node_modules/` | Dependencias instaladas, muito grande |
| `.next/` | Build/cache local |
| `package-lock.json` | Muito extenso; usar apenas quando precisar reproduzir instalacao exata |
| Imagens `.webp`, `.png` | Binarios; foram descritos por caminho |
| Modelos `.glb`, `.gltf`, `.bin`, texturas | Binarios 3D ou fontes de modelo; foram descritos por caminho |
| Logos `.svg` | Assets; foram listados por caminho |

## Arquitetura da pagina

`src/app/page.tsx` monta a landing page nesta ordem:

```tsx
import { FloatingButtons } from "@/components/FloatingButtons/FloatingButtons";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Sections/Section1/Hero";
import { Services } from "@/components/Sections/Section2/Services";
import { Expertise } from "@/components/Sections/Section3/Expertise";
import { Customers } from "@/components/Sections/Section4/Customers";
import { Experience } from "@/components/Sections/Section5/Experience";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Expertise />
        <Customers />
        <Experience />
        <section id="contact" className="min-h-screen" />
      </main>

      <FloatingButtons />
    </>
  );
}
```

Ponto atual: `contact` ainda parece placeholder vazio. `Experience` ja e uma secao real.

## Layout global e SEO

`src/app/layout.tsx`:

- Usa Montserrat via `next/font/google`.
- Envolve a aplicacao com `LanguageProvider`.
- Define metadados basicos de SEO.
- Define `html lang="pt-BR"` inicialmente.
- Define Open Graph e Twitter card, mas ainda sem `metadataBase`, URL canonica ou imagem OG explicita.

Ponto de atencao: algumas leituras no terminal podem exibir textos acentuados com mojibake. Validar o arquivo real em UTF-8 antes de alterar conteudo textual.

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

Estado atual das chaves:

| Arquivo | Chaves |
| --- | --- |
| `pt-BR.json` | 159 chaves |
| Demais JSONs | 159 chaves |

Estado atual de i18n: todos os 13 JSONs possuem a mesma estrutura do `pt-BR.json`, com 159 chaves, sem chaves faltando ou extras no momento da validacao.

## Header e navegacao

Componentes:

| Arquivo | Responsabilidade |
| --- | --- |
| `Header.tsx` | Header fixo, logo, navegacao desktop, seletor de idioma e menu mobile |
| `NavMenu.tsx` | Navegacao por botoes que chamam `scrollToSection` |
| `MobileMenu.tsx` | Menu mobile com portal, overlay, Escape e bloqueio de scroll no body |
| `LanguageSelector.tsx` | Dropdown de idiomas com bandeiras e estado ativo |

Itens de navegacao atuais:

```ts
const navItems = [
  { id: "about", labelKey: "header.nav.about" },
  { id: "services", labelKey: "header.nav.services" },
  { id: "expertise", labelKey: "header.nav.expertise" },
  { id: "customers", labelKey: "header.nav.customers" },
  { id: "experience", labelKey: "header.nav.experience" },
  { id: "contact", labelKey: "header.nav.contact" },
];
```

Pontos de atencao:

| Ponto | Impacto | Recomendacao |
| --- | --- | --- |
| `about` no menu | Confirmar se ha alvo real com `id="about"` | Ajustar se o Hero nao tiver esse id |
| `contact` | Ainda parece placeholder vazio | Implementar conteudo real ou remover temporariamente do menu |

## FloatingButtons

`src/components/FloatingButtons/FloatingButtons.tsx`:

- Client component.
- Renderiza dois botoes flutuantes no canto inferior direito:
  - Botao de voltar ao topo.
  - Link para WhatsApp (`site.links.whatsapp`).
- O botao de voltar ao topo aparece apos `window.scrollY > 320`.
- Usa `ArrowBigUp` de `lucide-react`.
- Usa textos acessiveis em `floatingButtons.scrollTopAriaLabel` e `floatingButtons.whatsappAriaLabel`.

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

- Client component.
- Usa `Image` do Next.js.
- Usa o asset `/Sections/Section2/3Dprinter.png`.
- Renderiza 6 cards de servicos em formato accordion.
- Cada card tem estado proprio (`isOpen`).
- Usa `useId()` para criar `aria-controls`.
- Usa `aria-expanded`, `aria-controls` e `aria-label` no botao do card.
- Esconde/exibe a descricao com grid rows (`grid-rows-[0fr]` / `grid-rows-[1fr]`).
- Usa `SectionTitle` com a API `title` e `description`.

Servicos:

| Servico | Chave |
| --- | --- |
| Desenvolvimento de produtos | `services.items.productDevelopment` |
| Engenharia reversa | `services.items.reverseEngineering` |
| Prototipagem 3D | `services.items.prototyping` |
| Ferramentas, moldes e dispositivos | `services.items.tooling` |
| Automacao e melhorias industriais | `services.items.automation` |
| Estruturacao produtiva e gestao | `services.items.industrialManagement` |

## Expertise e modelo 3D da impressora

`src/components/Sections/Section3/Expertise.tsx`:

- Client component.
- Combina a secao de expertise com o modelo 3D interativo da impressora.
- Usa `dynamic()` com `ssr: false` para carregar `PrinterCanvas`.
- Usa `IntersectionObserver` para renderizar o canvas apenas quando a secao se aproxima.
- A secao tem `id="expertise"`.
- Usa tres grupos de conhecimento:
  - Metodologias e melhoria continua.
  - Normas, qualidade e seguranca.
  - Capacidades tecnicas e industriais.
- Usa cards em formato accordion com pills.
- Usa tres cards de resumo tambem em accordion.

`src/components/Three/PrinterCanvas.tsx` e `PrinterModel.tsx`:

- Carregam `/Models/3DPrinter/printer-optimized.glb`.
- Usam `Canvas`, `PerspectiveCamera`, luzes, `Environment` e `OrbitControls`.
- `frameloop="demand"` e DPR limitado ajudam performance.

## Customers

`src/components/Sections/Section4/Customers.tsx`:

- Client component.
- Renderiza a secao `id="customers"`.
- Usa `SectionTitle` com `customers.title` e `customers.description`.
- Usa `ScrollReveal` para animar titulo e itens da grade.
- Usa `Image` do Next.js para logos SVG de clientes.
- Usa `unoptimized` nos logos SVG.
- Cada logo usa `alt={t(customer.altKey)}`.
- A grade e responsiva: 2 colunas no mobile, 3 no `md`, 5 no `lg`.
- Os logos aparecem coloridos por padrao. A classe `grayscale` foi removida.

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

## Experience

`src/components/Sections/Section5/Experience.tsx`:

- Client component.
- Renderiza a secao `id="experience"`.
- Usa `SectionTitle` com `experience.title` e `experience.description`.
- Define dois tipos de cards:
  - `ExperienceCard`: card accordion de experiencia profissional.
  - `Experience3DCard`: card visual com modelo 3D interativo.
- Usa `ExperienceModelCanvas` carregado via `next/dynamic` com `ssr: false`.
- Usa `IntersectionObserver` para iniciar os modelos 3D apenas quando a area dos modelos se aproxima da viewport (`rootMargin: "400px 0px"`).
- Usa `ScrollReveal` nos cards.
- Usa timeline mobile e timeline desktop separadas.

Timeline:

| Layout | Bloco | Comportamento |
| --- | --- | --- |
| Mobile | `relative mx-auto max-w-3xl md:hidden` | Linha vertical a esquerda e cards empilhados |
| Desktop | `relative mx-auto hidden max-w-6xl md:block` | Grid `grid-cols-[1fr_3rem_1fr]`, cards alternados esquerda/direita |

Experiencias atuais:

| Empresa | Chave | Logo |
| --- | --- | --- |
| Longhini Desenvolvimento Industrial | `experience.items.longhini` | `/Sections/Section5/logoLonghini.svg` |
| Arteres | `experience.items.arteres` | `/Sections/Section5/logoArteres.svg` |
| Cardenas Industria Mecanica | `experience.items.cardenas` | `/Sections/Section5/logoCardenas.svg` |
| Amemiya Honda Motos | `experience.items.amemiya` | `/Sections/Section5/logoAmemiya.svg` |

Modelos 3D da Experience:

| Modelo | Caminho | Chave aria |
| --- | --- | --- |
| Robo | `/Models/Robot/robot-optimized.glb` | `experience.models.robot.ariaLabel` |
| Chassi | `/Models/Chassis/chassis-optimized.glb` | `experience.models.chassis.ariaLabel` |
| Oculus | `/Models/Oculus/oculus-optimized.glb` | `experience.models.oculus.ariaLabel` |

Ponto de atencao: as chaves `experience.models.*.ariaLabel` ja existem em todos os JSONs no momento desta atualizacao.

## ExperienceModelCanvas

`src/components/Three/ExperienceModelCanvas.tsx`:

- Client component.
- Usa `Canvas` de `@react-three/fiber`.
- Usa `Bounds fit clip observe` e `Center` para enquadrar modelos de tamanhos diferentes.
- Usa `useGLTF(modelPath)`.
- Desativa `castShadow` e `receiveShadow`.
- Marca materiais como `needsUpdate`.
- Usa `ACESFilmicToneMapping` e `SRGBColorSpace`.
- Usa `Environment preset="city"`.
- Usa `OrbitControls` com rotacao, zoom e pan habilitados.
- `frameloop="demand"` e `dpr={[1, 1.25]}` para reduzir custo de renderizacao.

## Modelos 3D e .gitignore

O `.gitignore` ignora arquivos fonte e texturas dos modelos 3D, mantendo apenas GLBs otimizados e licencas como candidatos a versionamento.

Regras relevantes:

```gitignore
# 3D source files - 3DPrinter
public/Models/3DPrinter/printer-metalrough.glb
public/Models/3DPrinter/scene.gltf
public/Models/3DPrinter/scene.bin
public/Models/3DPrinter/textures/

# 3D source files - Robot
public/Models/Robot/scene.gltf
public/Models/Robot/scene.bin
public/Models/Robot/textures/

# 3D source files - Oculus
public/Models/Oculus/scene.gltf
public/Models/Oculus/scene.bin
public/Models/Oculus/textures/

# 3D source files - Chassis
public/Models/Chassis/scene.gltf
public/Models/Chassis/scene.bin
```

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

Nao usar API antiga baseada em `children` e `eyebrow`.

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
- `aria-label` em navegacao, hero, menu mobile, accordions, clientes, experiencia e botoes flutuantes.
- `focus-visible:ring` em controles interativos.
- Menu mobile com `aria-modal`, `role="dialog"`, `aria-expanded` e Escape.
- `document.documentElement.lang` atualizado ao trocar idioma.
- Cards de servico, expertise e experiencia usam `aria-expanded` e `aria-controls`.
- Logos de clientes e experiencias possuem texto alternativo via i18n.
- Cards 3D da Experience usam `role="img"` com `aria-label`.

Pontos de melhoria:

| Ponto | Impacto | Recomendacao |
| --- | --- | --- |
| `about` no menu pode nao ter alvo | Clique pode nao rolar se nao houver elemento com esse id | Confirmar `Hero` ou criar/ajustar id |
| `contact` placeholder vazio | UX/SEO incompletos | Implementar conteudo real ou remover temporariamente do menu |
| Metadata sem URL/imagem OG explicita | Compartilhamento social menos forte | Adicionar `metadataBase`, `openGraph.url`, `openGraph.images` quando houver dominio/imagem |
| Modelos 3D em secoes principais | Pode pesar em mobile | Validar performance real em dispositivos fracos |

## Validacao conhecida

`npm.cmd run lint` ja foi executado anteriormente e falhou por 2 erros nao relacionados as ultimas alteracoes:

```text
src/components/Header/MobileMenu.tsx
  react-hooks/set-state-in-effect em setMounted(true)

src/contexts/LanguageContext.tsx
  react-hooks/set-state-in-effect em setLanguage(stored)
```

Esses erros devem ser tratados separadamente antes de considerar o lint limpo.

## Recomendacoes tecnicas prioritarias

| Prioridade | Acao | Motivo |
| --- | --- | --- |
| Alta | Implementar `contact` ou remover temporariamente do menu | Evita navegacao para area vazia |
| Alta | Confirmar alvo do menu `about` | Evita navegacao quebrada |
| Media | Validar performance dos 4 modelos 3D em mobile | Three.js pode impactar celulares |
| Media | Resolver erros atuais de lint | Mantem qualidade e reduz regressao |
| Media | Adicionar metadata canonica/OG completa quando houver dominio | Melhora SEO e compartilhamento |
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
- Modelos 3D ficam em `public/Models/<Nome>/`.
- Para modelos 3D no React, preferir carregamento sob demanda com `dynamic(..., { ssr: false })` e/ou `IntersectionObserver`.

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
10. Considere que `Expertise` contem o canvas 3D da impressora carregado sob demanda.
11. Considere que `Customers` existe como Section4, tem logos SVG coloridos e esta no menu.
12. Considere que `Experience` existe como Section5, com timeline, accordions, logos e tres modelos 3D carregados sob demanda.
13. Considere que `FloatingButtons` renderiza botao de voltar ao topo e WhatsApp.

Minha tarefa e:
[descreva a tarefa]
```
