# Web Scraper de Produtos da Amazon

Este é um projeto de web scraper desenvolvido em Node.js utilizando a biblioteca Puppeteer para extrair informações do produto `garlic press` do site da Amazon.

## Como Usar

### Pré-requisitos

- Node.js instalado no seu sistema ([Baixe aqui](https://nodejs.org/))

### Instalação

1. Clone este repositório para o seu ambiente local:

```bash
 git clone git@github.com:GabrielaMoura25/FinalTask---Carvalho-Aleixo.git
```

2. Navegue até o diretório do projeto:

```bash
 cd FinalTask---Carvalho-Aleixo
```

3. Instale as dependências do projeto:

```bash
 npm install
```

### Execução

Para executar o web scraper, utilize o seguinte comando:

```bash
 node index.js ou npm start
```

Se quiser que o scraper abra uma instância do navegador Chrome controlada pelo Puppeteer enquanto começa a extrair informações dos produtos da Amazon, va até o arquivo `index.js` e altere a propriedade `headless` para `false`.

## Estrutura do Projeto

- `index.js`: Arquivo principal responsável pela execução do scraper.
- `scrapers/`: Pasta contendo os módulos de scraping específicos para diferentes sites.
- `scrapers/amazonScraper.js`: Módulo de scraping para o site da Amazon.
- `scrapers/productScraper.js`: Módulo de scraping genérico para extrair detalhes de produtos.
- `utils/`: Pasta contendo funções utilitárias compartilhadas entre os scrapers.
- `utils/scrapeUtils.js`: Módulo contendo funções de scraping comuns utilizadas pelos scrapers.
