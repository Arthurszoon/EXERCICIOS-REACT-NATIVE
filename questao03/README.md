<img width="1862" height="886" alt="Captura de tela 2026-11-05 152826" src="https://github.com/user-attachments/assets/8dd859d8-e568-4ec3-8afc-d6b4917f2087" />
### `questao03/README.md`

```markdown
# 📦 Controle de Estoque (Inventário)

![React Native](https://img.shields.io/badge/React_Native-0.81.5-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-~54.0.37-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Aplicativo mobile desenvolvido em **React Native** com **Expo** para gerenciamento, movimentação e monitoramento de saldo de produtos em estoque.

---

## 📋 Sobre o Projeto

O aplicativo simula um fluxo real de controle de inventário em duas etapas: cadastro inicial do item com seu saldo de abertura e gerenciamento contínuo de entradas e saídas, incluindo travas de segurança e alertas de reposição.

### ✨ Funcionalidades

- **Cadastro de Estoque Inicial:** Define o nome do item e o saldo inicial (bloqueando a edição do nome após o início da operação para manter a integridade do registro).
- **Movimentação Dinâmica:** Botões dedicados para **Adicionar** (entrada) e **Retirar** (saída) unidades do inventário.
- **Trava de Saldo Insuficiente:** Impede retiradas maiores que a quantidade disponível em estoque, exibindo alerta informativo.
- **Alerta de Nível Crítico:** Dispara notificações automáticas e altera o estado visual do card quando o estoque atinge **menos de 5 unidades**.

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) (`0.81.5`)
- [Expo](https://expo.dev/) (`~54.0.37`)
- [React](https://react.dev/) (`19.1.0`)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina
- Aplicativo **Expo Go** instalado no dispositivo móvel (Android/iOS) ou um emulador configurado

### Passo a passo

1. Acesse a pasta do projeto:
   ```bash
   cd questao03
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm start
Escaneie o QR Code exibido no terminal utilizando o Expo Go (Android) ou a câmera nativa (iOS), ou pressione a / i no terminal para abrir em um emulador.



# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).

