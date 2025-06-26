# Contribuindo para o Beta Builders Design System

Agradecemos o seu interesse em contribuir! Para garantir um fluxo de trabalho eficiente e consistente, siga as diretrizes abaixo.

## Fluxo de Desenvolvimento (GitHub Flow)

Nosso projeto segue um fluxo de trabalho simples baseado no GitHub Flow:

1.  **Crie uma Branch:** Para cada nova funcionalidade, correção de bug ou melhoria, crie uma nova branch a partir da `main`. Use um nome descritivo para a branch (ex: `feat/nova-componente`, `fix/bug-no-card`, `docs/atualizar-readme`).

    ```bash
    git checkout main
    git pull origin main
    git checkout -b sua-nova-branch-descritiva
    ```

2.  **Desenvolva:** Faça suas alterações e commits na sua nova branch. Certifique-se de que seu código siga as convenções de estilo do projeto e que os testes (se houver) passem.

3.  **Commit Messages:** Utilize o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para suas mensagens de commit. Isso nos ajuda a gerar changelogs automaticamente e entender o histórico do projeto.

    Exemplos:
    *   `feat: Adiciona componente de botão`
    *   `fix: Corrige erro de alinhamento no cabeçalho`
    *   `docs: Atualiza documentação de instalação`
    *   `chore: Atualiza dependências`
    *   `refactor: Refatora lógica de autenticação`

4.  **Push para o GitHub:** Envie sua branch para o repositório remoto.

    ```bash
    git push origin sua-nova-branch-descritiva
    ```

5.  **Crie um Pull Request (PR):** Abra um Pull Request da sua branch para a branch `main`. Certifique-se de preencher o template de PR fornecido.

6.  **Revisão de Código:** Seu PR será revisado por outro membro da equipe. Esteja aberto a feedback e faça as alterações solicitadas.

7.  **Merge:** Assim que o PR for aprovado e todos os checks passarem, ele será mesclado na branch `main`.

## Boas Práticas

*   **Testes:** Se aplicável, adicione ou atualize testes para suas alterações.
*   **Documentação:** Atualize a documentação relevante (README, Storybook, etc.) para refletir suas mudanças.
*   **Linting e Formatação:** Certifique-se de que seu código esteja formatado corretamente e passe nas verificações de linting.
*   **Mantenha a `main` atualizada:** Antes de criar uma nova branch ou um PR, certifique-se de que sua branch `main` local esteja atualizada com a `main` remota.
