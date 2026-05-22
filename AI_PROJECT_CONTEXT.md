# Contexto do Projeto para Claude/ChatGPT

Arquivo preparado para ser carregado em assistentes de IA no navegador. Ele resume o estado atual do projeto, a arquitetura, os arquivos relevantes, decisoes tecnicas e pontos de atencao.

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
| Segmento | Desenvolvimento industrial, projetos mecanicos, engenharia reversa, prototipagem 3D, automacao industrial, ferramentaria, dispositivos, moldes e maquinas especiais |
| Idioma principal | Portugues do Brasil |
| Publico | Clientes industriais e empresas que precisam transformar ideias em produtos, dispositivos, moldes, ferramentas, prototipos, automacoes ou maquinas especiais |

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

Dev dependencies relevantes:

```json
{
  "@gltf-transform/cli": "^4.3.0",
  "@tailwindcss/postcss": "^4",
  "eslint": "^9",
  "eslint-config-next": "16.2.4",
  "tailwindcss": "^4",
  "typescript": "^5"
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

Interpretacao pratica: antes de mudancas em APIs, convencoes, metadata, roteamento, imagens ou comportamento do Next.js, validar contra a documentacao local instalada em `node_modules/next/dist/docs/`.

## Estado atual do Git no momento desta atualizacao

```text
 M AI_PROJECT_CONTEXT.md
```

Leitura: antes desta atualizacao do proprio contexto, `git status --short --untracked-files=normal` nao retornava arquivos modificados ou nao rastreados. A unica alteracao atual esperada e este `AI_PROJECT_CONTEXT.md`.

## Estrutura relevante

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    Footer/
      Footer.tsx
    FloatingButtons/
      FloatingButtons.tsx
    Header/
      Header.tsx
      NavMenu.tsx
      MobileMenu.tsx
      LanguageSelector.tsx
    Sections/
      Section1/Hero.tsx
      Section2/Services.tsx
      Section3/Expertise.tsx
      Section4/Customers.tsx
      Section5/Experience.tsx
      Section6/IndustrialModels.tsx
      Section7/Contact.tsx
    Three/
      PrinterCanvas.tsx
      PrinterModel.tsx
      ModelCanvas.tsx
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
  Footer/
    devSignature.svg
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
    Section7/
      longhiniSpace.webp
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
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Sections/Section1/Hero";
import { Services } from "@/components/Sections/Section2/Services";
import { Expertise } from "@/components/Sections/Section3/Expertise";
import { Customers } from "@/components/Sections/Section4/Customers";
import { Experience } from "@/components/Sections/Section5/Experience";
import { IndustrialModels } from "@/components/Sections/Section6/IndustrialModels";
import { Contact } from "@/components/Sections/Section7/Contact";

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
        <IndustrialModels />
        <Contact />{" "}
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
```

Ponto de atencao: existe um `{" "}` apos `<Contact />`. Nao parece necessario funcionalmente; pode ser removido em limpeza futura.

## Layout global e SEO

`src/app/layout.tsx`:

- Usa Montserrat via `next/font/google`.
- Envolve a aplicacao com `LanguageProvider`.
- Define `html lang="pt-BR"` inicialmente.
- Define `metadata` usando `site.seo` de `src/constants/site.ts`.
- Define `title.default`, `title.template`, `description`, `keywords`, `authors`, `robots`, Open Graph e Twitter card.

Pontos de atencao:

| Ponto | Impacto | Recomendacao |
| --- | --- | --- |
| Metadata sem `metadataBase`, canonical e URL OG explicita | Compartilhamento social e canonicalizacao menos fortes | Adicionar quando houver dominio oficial e imagem social |
| Textos acentuados aparecem com mojibake em leituras de terminal | Risco de editar conteudo corrompido por engano | Validar encoding real antes de alterar textos |

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
| `pt-BR.json` | 201 chaves |
| Demais JSONs | 201 chaves |

Validacao feita no momento desta atualizacao: todos os 13 JSONs possuem a mesma estrutura do `pt-BR.json`, com 201 chaves, sem chaves faltando ou extras.

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

Observacoes:

| Ponto | Estado |
| --- | --- |
| `about` | Aponta para o `id="about"` do Hero |
| `contact` | Aponta para a Section7 real de contato |
| `industrial-models` | Existe como secao, mas nao aparece no menu principal |

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
- Renderiza a secao `id="about"`.
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
- Os logos aparecem coloridos por padrao.

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
- Renderiza uma timeline de experiencia profissional.
- Usa `ExperienceCard`, um card accordion com logo, cargo, periodo, local e descricao.
- Usa `ScrollReveal` nos cards.
- Usa timeline mobile e timeline desktop separadas.
- A experiencia atual mostra selo `experience.card.current`.

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

## IndustrialModels

`src/components/Sections/Section6/IndustrialModels.tsx`:

- Client component.
- Renderiza a secao `id="industrial-models"`.
- Exibe tres cards com modelos 3D interativos em grid responsivo.
- Usa `dynamic()` com `ssr: false` para carregar `ModelCanvas`.
- Cada card usa `IntersectionObserver` proprio para renderizar o modelo apenas quando o card se aproxima da viewport (`rootMargin: "280px 0px"`).
- Cada card usa `role="img"` e `aria-label` vindo de i18n.
- Usa `ScrollReveal`.

Modelos:

| Modelo | Caminho | Chave aria | Ajustes |
| --- | --- | --- | --- |
| Robo | `/Models/Robot/robot-optimized.glb` | `industrialModels.models.robot.ariaLabel` | `rotation: [0, -Math.PI / 4, 0]`, `fitMargin: 1.1` |
| Chassi | `/Models/Chassis/chassis-optimized.glb` | `industrialModels.models.chassis.ariaLabel` | `rotation: [0, -Math.PI / 8, 0]`, `fitMargin: 0.9` |
| Oculus | `/Models/Oculus/oculus-optimized.glb` | `industrialModels.models.oculus.ariaLabel` | `rotation: [0, -Math.PI / 6, 0]`, `fitMargin: 1` |

## ModelCanvas

`src/components/Three/ModelCanvas.tsx`:

- Client component.
- Componente generico para renderizar modelos GLB.
- Usa `Canvas` de `@react-three/fiber`.
- Usa `Bounds fit clip observe` e `Center` para enquadrar modelos de tamanhos diferentes.
- Usa `useGLTF(modelPath)`.
- Desativa `castShadow` e `receiveShadow`.
- Marca materiais como `needsUpdate`.
- Usa `ACESFilmicToneMapping` e `SRGBColorSpace`.
- Usa `Environment preset="city"`.
- Usa `OrbitControls` com rotacao, zoom e pan habilitados.
- `frameloop="demand"` e `dpr={[1, 1.25]}` para reduzir custo de renderizacao.

## Contact

`src/components/Sections/Section7/Contact.tsx`:

- Client component.
- Renderiza a secao `id="contact"`.
- Usa `SectionTitle` com `contact.title` e `contact.description`.
- Usa `site.links.whatsapp`, `site.links.email` e `site.links.linkedin`.
- Usa `site.contact.email` no bloco de informacoes.
- Renderiza tres cards de acao:
  - WhatsApp.
  - E-mail comercial.
  - LinkedIn.
- Usa imagem `/Sections/Section7/longhiniSpace.webp` no card lateral da empresa.
- Usa `InfoPill` para e-mail, localizacao, atendimento e foco.
- O grid de informacoes usa `grid-cols-1 sm:grid-cols-2`; e-mail e foco ocupam duas colunas em telas `sm+`.
- O badge de CTA usa ponto pulsante e camada `bg-orange-500/10 animate-pulse`.
- Usa `ScrollReveal`, `aria-label`, `alt`, foco visivel e links externos com `target="_blank"` e `rel="noopener noreferrer"`.

Ponto de atencao: `LinkedInIcon` e um SVG manual local, nao um icone de `lucide-react`.

## Footer

`src/components/Footer/Footer.tsx`:

- Client component.
- Renderiza o rodape apos `main` e antes de `FloatingButtons`.
- Usa `Container`, `Image`, `site`, `useLanguage` e icones `ChevronDown`/`ExternalLink`/`Globe` de `lucide-react`.
- Usa logo `/Header/longhiniLogo.svg`.
- Usa assinatura visual do desenvolvedor em `/Footer/devSignature.svg`.
- Usa `site.developer` para nome, site, Instagram e LinkedIn do desenvolvedor.
- Usa `site.modelCredits` para listar creditos/licencas/fontes dos modelos 3D.
- `ModelCredits` usa `<details>`/`<summary>` para mostrar/ocultar os creditos.
- A assinatura visual aponta para `site.developer.instagram`.
- Os links do desenvolvedor usam `site.developer.website`, `site.developer.instagram` e `site.developer.linkedin`.
- `LinkedInIcon` e `InstagramIcon` sao SVGs manuais locais, seguindo o mesmo padrao usado na `Contact` para evitar problemas com icones externos em links.
- Exibe ano atual com `new Date().getFullYear()`.
- Usa chaves `footer.*` do i18n.

Pontos de atencao:

| Ponto | Impacto | Recomendacao |
| --- | --- | --- |
| Texto de copyright aparece com `Â©` no terminal | Pode ser apenas mojibake de exibicao ou caractere incorreto real | Validar no editor; preferir `&copy;` ou caractere correto se necessario |
| Creditos de modelos 3D ficam em `site.modelCredits` | Centraliza atribuicoes e facilita manutencao | Manter toda nova licenca/fonte de modelo nesse array |

## Constantes do site

`src/constants/site.ts` centraliza dados de marca, contato, links e SEO.

Estrutura atual:

```ts
export const site = {
  name: "LONGHINI - DESENVOLVIMENTO INDUSTRIAL",
  brandName: "LONGHINI",
  businessArea: "DESENVOLVIMENTO INDUSTRIAL",
  owner: "Rafael Longhini Lopes",
  headline: "...",
  slogan: "Transformo a sua ideia em realidade.",
  location: "...",
  description: "...",
  contact: {
    phone: "+55 11 98060-9919",
    whatsappNumber: "5511980609919",
    email: "comercial@longhinieng.com.br",
  },
  links: {
    whatsapp: "https://wa.me/5511980609919",
    email: "mailto:comercial@longhinieng.com.br",
    linkedin: "https://www.linkedin.com/in/rafael-longhini-lopes-69256751/",
  },
  developer: {
    name: "Lucas Garcia e Silva",
    website: "https://devllucasgs.com.br",
    instagram: "https://www.instagram.com/devllucas_gs/",
    linkedin: "https://www.linkedin.com/in/lucasgarciaesilva/",
  },
  modelCredits: [
    {
      title: "3D Printer - Bambu Lab A1 Mini",
      source: "https://sketchfab.com/...",
      author: "neilvfx",
      authorUrl: "https://sketchfab.com/neilvfx",
      license: "CC-BY-4.0",
      licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
      attributionRequired: true,
    },
    // Chassis, Oculus e Robot tambem ficam neste array.
  ],
  seo: {
    title: "Longhini Desenvolvimento Industrial | Solucoes Industriais",
    titleTemplate: "%s | Longhini Desenvolvimento Industrial",
    description: "...",
    openGraphDescription: "...",
    twitterDescription: "...",
    keywords: ["..."],
  },
} as const;
```

Ponto de atencao: leituras no terminal exibiram alguns textos acentuados como mojibake. Confirmar o conteudo real no editor antes de alterar estes textos.

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

## Modelos 3D e .gitignore

O `.gitignore` ignora arquivos fonte e texturas dos modelos 3D, mantendo principalmente GLBs otimizados e licencas como candidatos a versionamento.

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

## SEO e acessibilidade

Pontos positivos:

- `metadata` definido no layout a partir de `site.seo`.
- `robots.index` e `robots.follow`.
- Open Graph e Twitter card basicos.
- `alt` em imagens relevantes.
- `aria-label` em navegacao, hero, menu mobile, accordions, clientes, modelos 3D, contato, footer e botoes flutuantes.
- `focus-visible:ring` em controles interativos.
- Menu mobile com `aria-modal`, `role="dialog"`, `aria-expanded` e Escape.
- `document.documentElement.lang` atualizado ao trocar idioma.
- Cards de servico, expertise e experiencia usam `aria-expanded` e `aria-controls`.
- Logos de clientes e experiencias possuem texto alternativo via i18n.
- Cards 3D usam `role="img"` com `aria-label`.
- Footer usa `<details>`/`<summary>` para creditos de modelos 3D e links externos com `rel="noopener noreferrer"`.

Pontos de melhoria:

| Ponto | Impacto | Recomendacao |
| --- | --- | --- |
| `industrial-models` nao aparece no menu | Secao pode ser descoberta apenas por rolagem | Decidir se deve entrar no menu ou permanecer como bloco visual de apoio |
| Metadata sem URL/imagem OG explicita | Compartilhamento social menos forte | Adicionar `metadataBase`, canonical, `openGraph.url` e `openGraph.images` quando houver dominio/imagem |
| Modelos 3D em secoes principais | Pode pesar em mobile | Validar performance real em dispositivos fracos |
| Mojibake em terminal | Pode causar edicao incorreta de textos | Confirmar encoding/conteudo no editor antes de alterar copy |
| `<Contact />{" "}` em `page.tsx` | Pequena sujeira de markup | Remover em limpeza futura |

## Validacao conhecida

Validacao executada nesta atualizacao:

```text
Todos os arquivos src/i18n/*.json possuem 201 chaves.
Nao ha chaves faltando ou extras em relacao ao pt-BR.json.
```

Validacao anterior registrada:

```text
npm.cmd run lint falhou por 2 erros:

src/components/Header/MobileMenu.tsx
  react-hooks/set-state-in-effect em setMounted(true)

src/contexts/LanguageContext.tsx
  react-hooks/set-state-in-effect em setLanguage(stored)
```

Esses erros devem ser tratados separadamente antes de considerar o lint limpo. O lint nao foi reexecutado durante esta atualizacao de contexto.

## Recomendacoes tecnicas prioritarias

| Prioridade | Acao | Motivo |
| --- | --- | --- |
| Alta | Validar encoding dos textos acentuados | Evita corromper conteudo em `site.ts` e JSONs |
| Alta | Resolver erros atuais de lint | Mantem qualidade e reduz regressao |
| Media | Validar performance dos modelos 3D em mobile | Three.js pode impactar celulares |
| Media | Adicionar metadata canonica/OG completa quando houver dominio | Melhora SEO e compartilhamento |
| Media | Decidir se `industrial-models` deve entrar na navegacao | Melhora descoberta da secao, se ela for estrategica |
| Baixa | Remover `{" "}` apos `<Contact />` | Limpeza simples de JSX |

## Convencoes atuais do codigo

- Componentes client-side declaram `"use client"` no topo.
- Alias `@/*` aponta para `./src/*`.
- Componentes visuais ficam em `src/components`.
- Footer fica em `src/components/Footer/Footer.tsx`.
- Secoes ficam em `src/components/Sections/SectionN`.
- Textos multilingues ficam em `src/i18n/*.json`.
- Estado global de idioma fica em `src/contexts/LanguageContext.tsx`.
- Estilizacao e majoritariamente via classes Tailwind.
- Icones vem de `lucide-react`, com excecao dos SVGs manuais locais `LinkedInIcon` na `Contact` e `LinkedInIcon`/`InstagramIcon` no `Footer`.
- Imagens publicas sao referenciadas por caminho absoluto a partir de `public`.
- Modelos 3D ficam em `public/Models/<Nome>/`.
- Para modelos 3D no React, preferir carregamento sob demanda com `dynamic(..., { ssr: false })` e/ou `IntersectionObserver`.
- Para SEO/copy institucional, preferir atualizar `src/constants/site.ts` e `src/i18n/*.json` conforme a responsabilidade de cada texto.
- Creditos/licencas/fontes dos modelos 3D ficam em `site.modelCredits`.

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
12. Considere que `Experience` existe como Section5, com timeline, accordions e logos.
13. Considere que `IndustrialModels` existe como Section6, com tres modelos 3D carregados sob demanda.
14. Considere que `Contact` existe como Section7, com WhatsApp, e-mail, LinkedIn e imagem institucional.
15. Considere que `Footer` existe, usa `site.modelCredits`, `site.developer`, SVGs manuais para LinkedIn/Instagram e asset `/Footer/devSignature.svg`.
16. Considere que `FloatingButtons` renderiza botao de voltar ao topo e WhatsApp.
17. Considere que todos os 13 arquivos de idioma possuem 201 chaves sincronizadas.
18. Valide APIs de Next.js na documentacao local antes de alteracoes estruturais.

Minha tarefa e:
[descreva a tarefa]
```
