# Commitizen & Changelog Workflow

Este projeto utiliza **Commitizen** para padronizar as mensagens de commit e **Conventional Changelog** para gerar automaticamente o changelog baseado nos commits.

## 📋 Comandos Disponíveis

### 1. Fazer Commit com Commitizen
```bash
npm run commit
```
ou
```bash
npx cz
```

Este comando abrirá um wizard interativo que te guiará através do processo de criação de um commit convencional.

### 2. Gerar Changelog
```bash
npm run changelog
```

Gera automaticamente o changelog baseado nos commits convencionais desde a última versão.

### 3. Release Automatizado
```bash
npm run release
```

Utiliza o `standard-version` para:
- Gerar automaticamente uma nova versão (patch, minor, major)
- Atualizar o CHANGELOG.md
- Criar um commit de release
- Criar uma tag git

## 🎯 Tipos de Commit Disponíveis

O Commitizen oferece os seguintes tipos de commit:

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Mudanças na documentação
- **style**: Mudanças que não afetam o código (espaços, formatação, etc.)
- **refactor**: Refatoração de código (sem adicionar funcionalidade ou corrigir bug)
- **perf**: Melhorias de performance
- **test**: Adição ou correção de testes
- **chore**: Mudanças no processo de build ou ferramentas auxiliares
- **ci**: Mudanças nos arquivos de configuração de CI
- **build**: Mudanças que afetam o sistema de build

## 🔄 Fluxo de Trabalho Recomendado

### Para Desenvolvimento Diário:
1. Faça suas alterações normalmente
2. Use `git add .` para adicionar arquivos ao staging
3. Use `npm run commit` em vez de `git commit`
4. Siga o wizard do Commitizen

### Para Releases:
1. Quando pronto para uma nova versão:
   ```bash
   npm run release
   ```
2. Push das mudanças e tags:
   ```bash
   git push --follow-tags origin main
   ```

## 📝 Exemplo de Uso do Commitizen

Quando você executa `npm run commit`, o Commitizen perguntará:

```
? Select the type of change that you're committing: feat
? What is the scope of this change: components
? Write a short, imperative tense description: add new Button component
? Provide a longer description: (press enter to skip)
? Are there any breaking changes? No
? Does this change affect any open issues? No
```

Resultado: `feat(components): add new Button component`

## ⚙️ Configuração

A configuração do Commitizen está no `package.json`:

```json
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```

A configuração do `standard-version` está em `.versionrc.json` para personalizar como o changelog é gerado.

## 📊 Benefícios

1. **Padronização**: Todos os commits seguem o mesmo padrão
2. **Changelog Automatizado**: O changelog é gerado automaticamente
3. **Versionamento Semântico**: Versões são incrementadas automaticamente
4. **Integração com CI/CD**: Commits convencionais podem ser usados para automação
5. **Melhor Comunicação**: Commits são mais descritivos e estruturados

## 🚀 Integração com GitHub

Os commits convencionais se integram bem com:
- **GitHub Releases**: Use o changelog para criar releases
- **Pull Requests**: Commits bem estruturados melhoram a revisão
- **Actions**: Podem ser usados para automatizar deploys baseados no tipo de commit 