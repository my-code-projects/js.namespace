# js.namespace

Padronizações de nomes e organização de código.
Escopos globais e locais.
Uma variável sem a palavra reservada VAR será sempre GLOBAL.
Primeiro declarações e depois atribuições(hosting).
Declarando uma variavel e uma function elas se tornam atributos do objeto window.

OU seja, Namespace em Javascript é possível? Não só possível como é muito fácil e eficaz.  

Primeiro precisamos compreender realmente a importância do namespace em aplicações orientadas a objeto, recomenda a leitura do excelente artigo do Matt DeClaire sobre essa importância.

Quando você desenvolve uma aplicação e/ou um serviço é preciso garantir que as classes, métodos, variáveis e etc., sejam realmente única e exclusivamente da sua aplicação, seus objetos não podem de maneira alguma entrar em conflito com qualquer outro objeto que ele possa (ou não) interagir.  Quando seu código interage com ele mesmo fica mais fácil detectar possíveis conflitos, mas quando ele é distribuído tudo começa a ficar mais complicado. O Namespace garante, em boa parte dos casos, exclusividade a um domínio de nomes de objetos no escopo da aplicação.

Vamos fazer uma analogia um pouco estranha, mas que vai poder ilustrar como conflitos de nome atrapalham o desenvolvimento de software. Creio que muitos que leem esse artigo já utilizaram ou pelo menos conhecem jQuery e sua clássica função seletora $(), só que essa função também existe no framework Prototype e no MooTools, ou seja, se você usar qualquer um desses frameworks juntos terá problemas ao trabalhar com a função $().

## The Project

Este código serviu para estudo e aprofundamento do conhecimento em javascript.
