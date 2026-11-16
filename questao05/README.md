# 💳 Simulador Bancário – Conta Digital

![React Native](https://img.shields.io/badge/React_Native-0.81.5-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-~54.0.37-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Aplicativo mobile desenvolvido em **React Native** com **Expo** que simula operações financeiras básicas de uma conta digital, permitindo gerenciar saldo por meio de depósitos e saques.

---

## 📋 Sobre o Projeto

Iniciando com um saldo padrão de **R$ 1.000,00**, o aplicativo atualiza o montante em tempo real a cada transação realizada, aplicando validações de segurança financeira e formatação monetária no padrão brasileiro.

### ✨ Funcionalidades

- **Gestão de Saldo em Tempo Real:** Exibição destacada do saldo disponível formatado em Reais (`R$`).
- **Operações Financeiras:**
  - **Depositar:** Soma valores positivos ao saldo atual e limpa o campo de entrada automaticamente.
  - **Sacar:** Deduz valores do saldo disponível mediante validação de fundos.
- **Trava de Saldo Insuficiente:** Impede saques superiores ao saldo disponível em conta, exibindo um alerta detalhado.
- **Validação de Valores:** Bloqueia tentativas de movimentação com valores nulos, negativos ou inválidos, aceitando vírgula ou ponto.

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
   cd questao05
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
<img width="1863" height="878" alt="Captura de tela 2026-11-05 154613" src="https://github.com/user-attachments/assets/b0541637-3c30-4304-bd38-df7dce1a5897" />
<img width="739" height="1600" alt="WhatsApp Image 2026-11-05 at 00 27 30" src="https://github.com/user-attachments/assets/00273a23-3f41-4506-8fe8-ff15210a58cf" />
<img width="739" height="1600" alt="WhatsApp Image 2026-11-05 at 00 29 00" src="https://github.com/user-attachments/assets/87262a21-1378-4313-ae9a-11054bee6f27" />

