#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){

    int vet[10];

    srand(time(NULL));
    for (int i = 0; i < 10; i++){
        vet[i] = rand() % 10;
        for (int j = 0; j != i; j++){
            if (vet[j] == vet[i]){
                vet[i] = rand() % 10;
                j = -1;
            }
        }
    }

    int senha[5] = {1, 2, 3, 4, 5};
    int senha_informada;

    printf("Digite os numeros do codigo que correspondem aos elementos da senha de forma sequencial\n\n");
    printf("Codigo |  Digito da Senha\n");

    for (int i = 0, j = 0; i < 10; i += 2, j++){
        int opcao_escolhida;
        printf("--------------------------\n");
        printf("  #%d   |   %d    ou    %d  \n", j+1, vet[i], vet[i + 1]);
    }

    printf("\n");

    int verificador_erro = 0;

    for (int i = 0; i < 5; i++){
        printf("Codigo #%d: ", i+1);
        scanf("%d", &senha_informada);

        if (senha[i] != vet[(senha_informada - 1) * 2] && senha[i] != vet[(senha_informada - 1) * 2 + 1]){
            verificador_erro++;
        }
    }

    if (verificador_erro == 0)
        printf("\nLogado com sucesso!!\n");
    else
        printf("\nA senha nao converge!!\n");

    return 0;
}
