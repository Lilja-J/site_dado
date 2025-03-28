# 🎲🔥 Sexy Dice

Sexy Dice é um jogo interativo que sorteia combinações de ações e partes do corpo para criar momentos divertidos e sensuais. O usuário pode personalizar o idioma e habilitar ou desabilitar a verificação de combinações sensíveis.

## 🚀 Funcionalidades

- **🎲 Sorteio de Combinações:** Gera uma ação e uma parte do corpo aleatoriamente.
- **🌍 Idiomas Suportados:** Inglês (`en`) e Português (`pt`).
- **🔞 Verificação de Combinações Sensíveis:** Permite habilitar ou desabilitar ações que envolvem partes sensíveis.
- **📱 Interface Responsiva:** Design moderno e estilizado com animações.

## 🛠 Tecnologias Utilizadas

- **⚛️ React:** Biblioteca para construção da interface.
- **🦺 TypeScript:** Tipagem estática para maior segurança no código.
- **🎨 TailwindCSS:** Framework para estilização rápida e responsiva.

## 📂 Estrutura útil do Projeto


```plaintext
src/
├── components/
│   ├── DiceGame.tsx          # Componente principal do jogo
│   ├── LanguageSelector.tsx  # Componente para seleção de idioma
├── utils/
│   ├── diceData.ts           # Dados de ações e partes do corpo
│   ├── combinationUtils.ts   # Lógica para verificar combinações seguras

```

## 🎮 Como Usar

1. **Selecione o Idioma:**
   - Use o seletor no canto superior direito para alternar entre Inglês e Português.
2. **Habilite ou Desabilite Ações Sensíveis:**
   - Escolha entre "Habilitar" ou "Desabilitar" no grupo de opções abaixo do título.
3. **Clique em "Rolar Dado":**
   - O sistema sorteará uma ação e uma parte do corpo.
   - Se a verificação de ações sensíveis estiver habilitada, combinações inseguras serão evitadas.

🎉 **Divirta-se!**

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

```sh
npm start
```
Inicia o aplicativo no modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

```sh
npm run build
```
Compila o aplicativo para produção na pasta `build`.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir *issues* ou enviar *pull requests*.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
