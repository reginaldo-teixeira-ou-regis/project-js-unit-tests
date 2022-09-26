const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la.
  Abaixo você verá uma série de testes e passos que irão guiar você e, que devem NECESSARIAMENTE ser realizados em ordem para o bom desenvolvimento do sistema.

  Desenvolvimento:
  - Uma função: 
    createMenu()
  - Recebe um parâmetro que é um objeto, o menu:
    Exemplo: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.

  A função createMenu() então, retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

*/

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    /* fail('Teste vazio!'); */
    // TESTE 1: Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.
    const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
    expect(objetoRetornado.fetchMenu).toBeTruthy();
    // TESTE 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, 
    // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.
    const objetoRetornado2 = createMenu({ food: {}, drink: {} });
    expect(objetoRetornado2.fetchMenu()).toEqual({ food: {}, drink: {}});
    // TESTE 3: Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'
    const objetoQualquer = { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} };
    const objetoRetornado3 = createMenu(objetoQualquer);
    expect(objetoRetornado3.fetchMenu()).toEqual(objetoQualquer); // Retorno: objetoQualquer
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    const objetoRetornado4 = createMenu(objetoQualquer);
    expect(objetoRetornado4.consumption.length).toEqual(0); // Retorno: []

    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------

    // TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado,
    // passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada
    // ao array retornado em `objetoRetornado.consumption`.
    const objetoRetornado5 = createMenu(objetoQualquer);
    objetoRetornado5.order("coxinha");
    expect(objetoRetornado5.consumption[0]).toEqual('coxinha');

    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------

    // TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
    const objetoRetornado6 = createMenu(objetoQualquer);
    objetoRetornado6.order("coxinha");
    objetoRetornado6.order("agua");
    objetoRetornado6.order("sopa");
    objetoRetornado6.order("sashimi");
    expect(objetoRetornado.consumption).toEqual(["coxinha", "agua", "sopa", "sashimi"]);

    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------

    // TESTE 7: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.
    const objetoRetornado7 = createMenu(objetoQualquer);
    objetoRetornado7.order('coxinha');
    objetoRetornado7.order('agua');
    objetoRetornado7.order('coxinha');
    expect(objetoRetornado.consumption).toEqual(['coxinha', 'agua', 'coxinha']);

    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------

    // TESTE 8: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    const objetoRetornado8 = createMenu(objetoQualquer);
    objetoRetornado8.order('coxinha');
    objetoRetornado8.order('agua');
    objetoRetornado8.order('coxinha');
    expect(objetoRetornado8.pay()).toEqual(12.87);
    // ```
  
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
