# Publicando Novas Versões do Beta Builders Design System

Este documento descreve o processo para publicar novas versões do Beta Builders Design System.

## Versionamento Semântico (SemVer)

Utilizamos o [Versionamento Semântico 2.0.0](https://semver.org/lang/pt-BR/) para gerenciar as versões do nosso Design System. Isso significa que cada versão segue o formato `MAIOR.MENOR.PATCH`:

*   **MAIOR (Major):** Incrementado quando há mudanças incompatíveis na API.
*   **MENOR (Minor):** Incrementado quando há adição de funcionalidades de forma compatível com versões anteriores.
*   **PATCH:** Incrementado quando há correções de bugs compatíveis com versões anteriores.

## Processo de Release

Nosso processo de release é automatizado e baseado nos Conventional Commits. Utilizamos ferramentas que geram o changelog e incrementam a versão automaticamente com base nos tipos de commit.

1.  **Garanta que a `main` esteja atualizada:** Certifique-se de que todas as funcionalidades e correções que você deseja incluir na nova versão foram mergeadas na branch `main`.

    ```bash
    git checkout main
    git pull origin main
    ```

2.  **Execute o comando de release:** Utilize a ferramenta de release configurada no projeto (ex: `semantic-release`, `standard-version`). Este comando irá:
    *   Analisar os commits desde a última release.
    *   Determinar o próximo número de versão (MAIOR, MENOR ou PATCH).
    *   Gerar o `CHANGELOG.md` com base nos commits.
    *   Criar um novo commit com a atualização da versão e do changelog.
    *   Criar uma tag Git para a nova versão.
    *   Publicar o pacote no npm (ou outro registro de pacotes).
    *   Criar uma nova release no GitHub.

    Exemplo (se usando `semantic-release`):
    ```bash
    # Certifique-se de ter as variáveis de ambiente configuradas (GITHUB_TOKEN, NPM_TOKEN)
    npx semantic-release
    ```

    Exemplo (se usando `standard-version`):
    ```bash
    npx standard-version
    git push --follow-tags origin main
    ```

3.  **Verifique a Publicação:** Após a execução do comando de release, verifique se:
    *   Uma nova tag foi criada no GitHub.
    *   Uma nova release foi criada no GitHub com o changelog.
    *   O pacote foi publicado com sucesso no registro de pacotes (ex: npm).

## Changelog

O `CHANGELOG.md` é gerado automaticamente a partir das mensagens de commit. É crucial seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para que o changelog seja gerado corretamente.

## Revertendo uma Release

Reverter uma release é um processo complexo e deve ser evitado. Se for absolutamente necessário, entre em contato com os mantenedores do projeto para discutir a melhor abordagem.
