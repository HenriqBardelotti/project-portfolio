#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>
#define AGENCIA 0001;

typedef struct{
    int dia;
    int mes;
    int ano;
}Data;

typedef struct{
    Data data_movimentacao;
    int tipo_da_transacao; //1 - Saque, 2 - Depósito
    float valor_da_transacao;
}Extrato;

typedef struct{
    char rua[100];
    char numero[10];
    char complementeo[50];
    char bairro[50];
    char cidade[50];
    char sigla_estado[3];
    char cep[10];
    char pais[30];
}Endereco;

typedef struct{
    int agencia;
    int numero_da_conta;
    int senha;
    float saldo;
    Extrato extrato_bancario[1000];
    int status; //1 - Conta ativa, 0 - Conta inativa
}Conta;

typedef struct{
    char nome_completo[200];
    Data data_de_nascimento;
    int cpf;
    Endereco endereco_residencial;
    Conta contas[50];
}Cliente;

void menu_principal();
void menu_acessar_conta();
void login();

int main(){
    menu_principal();
    return 0;
}

void menu_principal(){
    int opcao;

    do{
        system("cls");

        printf("========= MENU PRINCIPAL =========\n");
        printf("1. Acessar Conta\n");
        printf("2. Criar Conta\n");
        printf("3. Gerenciar Contas\n");
        printf("0. Encerrar Sistema\n");
        printf("==================================\n");

        printf("\nInforme uma opcao: ");
        scanf("%d", &opcao);

        switch(opcao){
        case 1:
            menu_acessar_conta();
            break;
        case 2:
            break;
        case 3:
            break;
        case 0:
            break;
        default:
            printf("Opcao invalida!!");
            Sleep(1500);
            break;
        }
    }while(opcao != 0);
}

void menu_acessar_conta(){
    int opcao;

    do{
        system("cls");
        printf("========= ACESSAR CONTA =========\n");
        printf("1. Credencias\n");
        printf("2. Voltar\n");
        printf("==================================\n");

        printf("\nInforme uma opcao: ");
        scanf("%d", &opcao);

        switch(opcao){
        case 1:
            login();
            break;
        }
        case 2:
            return;
            break;
    }while(opcao != 2);
}
