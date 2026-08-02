# Estratégia de manutenção temporária

Este projeto pode sair do ar temporariamente sem excluir o deploy da Vercel e sem trocar a URL pública. A estratégia atual exibe uma página amigável de manutenção e responde com sinais HTTP adequados para buscadores.

## Objetivo

Manter a landing page indisponível por um período curto, neste caso 7 dias, preservando:

- a URL principal do cliente;
- o histórico do projeto na Vercel;
- a experiência do visitante;
- a sinalização correta para SEO.

## Como funciona

O arquivo `src/proxy.ts` intercepta as requisições públicas e reescreve a resposta para a rota interna `/manutencao`.

Na prática:

| Recurso | Comportamento |
| --- | --- |
| `/` e rotas públicas do site | Exibem a página de manutenção |
| Assets estáticos | Continuam liberados para carregar CSS, imagens, fontes e modelos |
| Status HTTP | `503 Service Unavailable` |
| Retentativa sugerida | `Retry-After: 604800`, equivalente a 7 dias |
| Indexação | `X-Robots-Tag: noindex, nofollow` |

O status `503` é importante porque comunica indisponibilidade temporária. É como colocar uma placa de "voltamos logo" na porta, em vez de remover a loja do mapa.

## Página exibida

A página está em `src/app/manutencao/page.tsx` e contém:

- mensagem amigável sobre manutenção breve;
- botões de contato por WhatsApp e e-mail;
- dados básicos da Longhini;
- metadados com `robots: noindex, nofollow`.

## Como desativar a manutenção

Quando o cliente autorizar o retorno da landing page, altere em `src/proxy.ts`:

```ts
const MAINTENANCE_ENABLED = false;
```

Depois faça novo build/deploy. Com isso, o `proxy` passa a devolver `NextResponse.next()` e a landing page original volta a responder normalmente.

## Alternativas consideradas

| Abordagem | Prós | Contras | Quando usar |
| --- | --- | --- | --- |
| Excluir projeto da Vercel | Simples e rápido | Pode quebrar URL, histórico, deploys e SEO | Quase nunca para pausas curtas |
| Substituir a home por uma página estática | Fácil de entender | Pode responder `200 OK`, confundindo buscadores | Manutenção sem preocupação com SEO |
| Proxy com `503` e `Retry-After` | Melhor sinal técnico e reversível | Exige atenção ao matcher do proxy | Recomendado para pausas temporárias |

## Validação recomendada

Antes de publicar:

```bash
npm.cmd run build
```

Depois de publicar, valide os cabeçalhos:

```bash
curl -I https://longhinieng.com.br
```

O retorno esperado durante a manutenção deve incluir:

```txt
HTTP/1.1 503 Service Unavailable
Retry-After: 604800
X-Robots-Tag: noindex, nofollow
```
