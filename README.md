**Versão em Português** 🇵🇹 English version below
## 30 de Maio de 2023
### Licenciatura em Engenharia Informática (3.º ano), Universidade do Minho
## Sinopse

O objectivo principal deste teste é avaliar os conhecimentos obtidos durante as aulas no desenvolvimento de aplicações Web e outras tarefas afins.

Antes de começares, lê atentamente até ao fim para ficares com uma percepção do todo que se pretende. 
Vais ver que tomarás decisões mais acertadas depois de uma leitura completa.

## Recursos

Recursos para a realização da prova:
   * [Distribuição Arbórea nalgumas freguesias portuguesas](plantas.json) (dataset em JSON obtido de `dados.gov.pt`), este ficheiro tem a seguinte estrutura:

```json
[
  {
    "Id": 20615557,
    "Número de Registo": 3,
    "Código de rua": 1685467,
    "Rua": "Rua Júlio Dinis",
    "Local": "Zambujeiro",
    "Freguesia": "Alcabideche",
    "Espécie": "pinheiro manso",
    "Nome Científico": "Pinus pinea",
    "Origem": "",
    "Data de Plantação": "",
    "Estado": "Adulto",
    "Caldeira": "Sim",
    "Tutor": "Sim",
    "Implantação": "Arruamento",
    "Gestor": "DGEV",
    "Data de actualização": "23/07/2021 19:50:54",
    "Número de intervenções": 6
  },
  ...
]
```


## Exercício 1: Plantas (API de dados)

Neste exercício, irás implementar uma API de dados sobre o dataset fornecido.
Encontra-se dividido em 3 partes.

### 1.1 Setup 

Realiza as seguintes tarefas sem alterares os nomes da base de dados e coleção fornecidos:
* Analisa o dataset fornecido;
* Introduz as alterações que achares necessárias no dataset;
* Importa-o numa base de dados em MongoDB com os seguintes parâmetros:
    * database: `-d plantas`
    * collection: `-c plantas`
* Testa se a importação correu bem.

### 1.2 Queries

Especifica queries em MongoDB para responder às seguintes questões:
1. Quantos registos estão na base de dados;
2. Quantos registos de plantação se encontram na freguesia "São Domingos de Rana"?
3. Qual a lista de freguesias (ordenada alfabeticamente e sem repetições)? 
4. Qual a distribuição dos registos por freguesia (quantos registos em cada freguesia)
5. Qual a distribuição dos registos por espécie?

### 1.3 API de dados

Desenvolve agora uma API de dados, que responde na **porta 15030** e que responda às seguintes rotas/pedidos:

* `GET /plantas`: devolve uma lista com todos os registos;
* `GET /plantas/:id`: devolve o registo com identificador `id`;
* `GET /plantas?especie=EEEE`: devolve a lista dos registos correspondentes à espécie `EEEE`;
* `GET /plantas?implant=AAA`: devolve a lista dos registos com implantação `AAA`;
* `GET /plantas/freguesias`: devolve a lista de freguesias ordenada alfabeticamente e sem repetições;
* `GET /plantas/especies`: devolve a lista das espécies vegetais ordenada alfabeticamente e sem repetições;
* `POST /plantas`: acrescenta um registo novo à BD;
* `DELETE /plantas/:id`: elimina da BD o registo com o identificador `id`.

Antes de prosseguires, testa as rotas realizadas com o Postman ou similar.


## Exercício 2: Plantas (Interface)

Tendo a API desenvolvida, desenvolve agora um novo serviço, que responde na **porta 15031** e que irá responder da seguinte forma:
1. Se colocares no browser o endereço `http://localhost:15031` deverás obter a página principal constituída por:
    * Um cabeçalho com metainformação à tua escolha;
    * Uma tabela contendo a lista de registos, um por linha, com os campos: `_id`, `Freguesia`, `Espécie`, `Estado` e `Número de intervenções`;
    * O campo `_id` deverá ser um link para a página do contrato com esse identificador;
    * O campo `Espécie` deverá ser um link para a página dessa espécie.

2. Se colocares no browser o endereço `http://localhost:15031/:id` deverás obter a página do registo com o identificador passado na rota:
    * Esta página deverá conter todos os campos do registo e um link para voltar à página principal.

3. Se colocares no browser o endereço `http://localhost:15031/especies/:id` deverás obter a página da espécie cujo nome corresponde ao parâmetro passado na rota (como fazes a associação do parâmetro à espécie é contigo, usa a imaginação):
    * Na página de cada espécie deverá constar o nome e a designação científica da espécie e uma tabela com a lista de registos dessa espécie (tabela com estrutura semelhante à da página principal).
  

**English version** :uk:

## 30th May 2023
### Bachelor's Degree in Informatics Engineering (3rd year), University of Minho
## Synopsis

The main objective of this test is to evaluate the knowledge acquired during the classes in web application development and related tasks.

Before you start, read carefully until the end to get an overview of the entire task. You will find that you'll make more informed decisions after a complete reading.

## Resources

Resources for the test:
   * [Tree Distribution in some Portuguese parishes](plantas.json) (JSON dataset obtained from `dados.gov.pt`), this file has the following structure:

```json
[
  {
    "Id": 20615557,
    "Número de Registo": 3,
    "Código de rua": 1685467,
    "Rua": "Rua Júlio Dinis",
    "Local": "Zambujeiro",
    "Freguesia": "Alcabideche",
    "Espécie": "pinheiro manso",
    "Nome Científico": "Pinus pinea",
    "Origem": "",
    "Data de Plantação": "",
    "Estado": "Adulto",
    "Caldeira": "Sim",
    "Tutor": "Sim",
    "Implantação": "Arruamento",
    "Gestor": "DGEV",
    "Data de actualização": "23/07/2021 19:50:54",
    "Número de intervenções": 6
  },
  ...
]
```

## Exercise 1: Plants (Data API)

In this exercise, you will implement a data API for the provided dataset.
It is divided into 3 parts.

### 1.1 Setup

Perform the following tasks without changing the names of the provided database and collection:
* Analyze the provided dataset;
* Make any necessary changes to the dataset;
* Import it into a MongoDB database with the following parameters:
    * database: `-d plantas`
    * collection: `-c plantas`
* Test if the importation was successful.

### 1.2 Queries

Specify MongoDB queries to answer the following questions:
1. How many records are in the database?
2. How many planting records are in the parish "São Domingos de Rana"?
3. What is the list of parishes (in alphabetical order and without repetitions)?
4. What is the distribution of records per parish (how many records in each parish)?
5. What is the distribution of records per species?

### 1.3 Data API

Now, develop a data API that responds on **port 15030** and answers the following routes/requests:

* `GET /plantas`: returns a list with all records;
* `GET /plantas/:id`: returns the record with identifier `id`;
* `GET /plantas?species=EEEE`: returns the list of records corresponding to species `EEEE`;
* `GET /plantas?implementation=AAA`: returns the list of records with implementation `AAA`;
* `GET /plantas/parishes`: returns the list of parishes in alphabetical order and without repetitions;
* `GET /plantas/species`: returns the list of plant species in alphabetical order and without repetitions;
* `POST /plantas`: adds a new record to the database;
* `DELETE /plantas/:id`: deletes the record with identifier `id` from the database.

Before proceeding, test the implemented routes with Postman or a similar tool.

## Exercise 2: Plants (Interface)

With the developed API, create a new service that responds on **port 15031** and will respond as follows:
1. If you enter the address `http://localhost:15031` in your browser, you should get the main page consisting of:
    * A header with metadata of your choice;
    * A table containing the list of records, one per row, with the fields: `_id`, `Freguesia`, `Espécie`, `Estado`, and `Número de intervenções`;
    * The field `_id` should be a link that leads to the detailed information of the corresponding record.
