### `questao02/README.md`

```markdown
# 🎓 Sistema Acadêmico – Avaliação de Desempenho

![React Native](https://img.shields.io/badge/React_Native-0.81.5-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-~54.0.37-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Aplicativo mobile desenvolvido em **React Native** com **Expo** para cálculo de média aritmética e verificação automática de status acadêmico de estudantes.

---

## 📋 Sobre o Projeto

O sistema permite inserir o nome do aluno e três notas avaliativas (escala de `0.0` a `10.0`). Após o processamento, o aplicativo exibe a média final formatada e destaca visualmente a situação do estudante (**Aprovado** ou **Reprovado**).

### ✨ Funcionalidades

- **Cálculo de Média Aritmética:** Processamento instantâneo das três notas informadas.
- **Classificação Dinâmica:**
  - **Aprovado:** Média $\ge 7.0$ (destaque visual em verde).
  - **Reprovado:** Média $< 7.0$ (destaque visual em vermelho).
- **Validação Rigorosa:** Verifica se o nome foi preenchido e garante que todas as notas estejam estritamente no intervalo entre `0.0` e `10.0` (com suporte a vírgula ou ponto).
- **Interface Dark Mode:** Design limpo com feedback visual claro e responsivo ao teclado.

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
   cd questao02
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

<img width="1862" height="886" alt="Captura de tela 2026-11-05 152826" src="https://github.com/user-attachments/assets/3cf4f73e-4c9a-4000-b6f4-0009e25e9464" />
