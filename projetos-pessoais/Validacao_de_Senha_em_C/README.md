# Explicação do Código: Validação de Senha Dinâmica

Este documento explica a lógica e o funcionamento do código em C fornecido. Ele implementa um sistema de validação de senha dinâmica com um conjunto de números gerados aleatoriamente, onde o usuário precisa escolher os números correspondentes aos elementos de uma senha predefinida.

---

## Funcionalidades do Código

1. **Geração de Números Aleatórios**:

   - O programa utiliza a função `rand()` para gerar 10 números aleatórios entre 0 e 9.
   - Garante que os números sejam únicos, evitando repetições com uma verificação em loop.

2. **Exibição de Opções**:

   - Os números gerados são agrupados em pares, e cada par é associado a uma posição da senha.
   - Os pares são exibidos ao usuário, que deve escolher um número de cada par.

3. **Validação da Senha**:

   - O programa compara as escolhas do usuário com a senha predefinida.
   - Se todas as escolhas forem corretas, o usuário é autenticado com sucesso; caso contrário, o acesso é negado.

---

## Estrutura do Código

### 1. Inclusão de Bibliotecas

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
```

As bibliotecas fornecem funções para entrada/saída, geração de números aleatórios e manipulação de tempo.

### 2. Geração do Vetor Aleatório

```c
int vet[10];
srand(time(NULL));
for (int i = 0; i < 10; i++) {
    vet[i] = rand() % 10;
    for (int j = 0; j != i; j++) {
        if (vet[j] == vet[i]) {
            vet[i] = rand() % 10;
            j = -1;
        }
    }
}
```

- `srand(time(NULL))`: Inicializa o gerador de números aleatórios com base no tempo atual.
- O loop garante que todos os 10 números no vetor `vet` são únicos.

### 3. Exibição dos Pares de Opções

```c
printf("Digite os numeros do codigo que correspondem aos elementos da senha de forma sequencial\n\n");
printf("Codigo |  Digito da Senha\n");

for (int i = 0, j = 0; i < 10; i += 2, j++) {
    printf("--------------------------\n");
    printf("  #%d   |   %d    ou    %d  \n", j+1, vet[i], vet[i + 1]);
}
```

- Os pares são exibidos ao usuário no formato "#Posição | Opção1 ou Opção2".

### 4. Entrada e Validação da Senha

```c
int verificador_erro = 0;
for (int i = 0; i < 5; i++) {
    printf("Codigo #%d: ", i+1);
    scanf("%d", &senha_informada);

    if (senha[i] != vet[(senha_informada - 1) * 2] && senha[i] != vet[(senha_informada - 1) * 2 + 1]) {
        verificador_erro++;
    }
}

if (verificador_erro == 0)
    printf("\nLogado com sucesso!!\n");
else
    printf("\nA senha nao converge!!\n");
```

- O usuário informa um código para cada posição da senha.
- As escolhas são verificadas com base nos números exibidos.
- Se houver erros, o acesso é negado.

### 5. Lógica de Validação da Senha

```c
if (senha[i] != vet[(senha_informada - 1) * 2] && senha[i] != vet[(senha_informada - 1) * 2 + 1])
```

**Explicação Detalhada:**

1. Cada posição da senha (`senha[i]`) possui duas opções possíveis, correspondentes a um par de números em `vet`.
2. `(senha_informada - 1) * 2`: Calcula o índice no vetor `vet` da primeira opção do par escolhido.
3. `(senha_informada - 1) * 2 + 1`: Calcula o índice da segunda opção do par correspondente.
4. O código verifica se o valor de `senha[i]` **não está presente** em nenhuma das duas posições associadas ao par escolhido.
5. Se o valor não coincidir com nenhuma das opções, o contador `verificador_erro` é incrementado.

**Exemplo:**

- Suponha:
  - `vet = {3, 7, 1, 5, 6, 2, 8, 9, 0, 4}`
  - `senha = {1, 2, 3, 4, 5}`
  - O usuário escolhe `2` como `senha_informada` para a posição 1 da senha.
- **Cálculo dos Índices:**
  - `(2 - 1) * 2 = 2`
  - `(2 - 1) * 2 + 1 = 3`
- **Verificação:**
  - O valor de `senha[0] (1)` é comparado com `vet[2] (1)` e `vet[3] (5)`.
  - Como `senha[0]` é igual a `vet[2]`, a condição do `if` é **falsa**, e nenhum erro é contado.

---

## Conclusão

Este código demonstra o uso de lógicas simples de programação para criar um sistema de validação dinâmica. Apesar de ser funcional, ele pode ser expandido para incluir mais recursos e melhorias em usabilidade e segurança.

