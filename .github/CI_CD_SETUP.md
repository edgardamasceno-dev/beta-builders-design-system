# CI/CD Setup - GitHub Actions

Este documento resume a implementação completa do pipeline de CI/CD usando GitHub Actions para o projeto de Design System.

## 🚀 O que foi implementado

### 1. **Substituição ESLint → Biome**
- ✅ Removido ESLint
- ✅ Configurado Biome como linter e formatter
- ✅ Migrada configuração para versão mais recente
- ✅ Ajustadas regras para React components e testes

### 2. **Scripts atualizados**
```json
{
  "lint": "biome check .",
  "lint:fix": "biome check --write .",
  "format": "biome format .",
  "format:write": "biome format --write .",
  "test:e2e": "playwright test",
  "test:e2e:report": "npx playwright show-report"
}
```

### 3. **GitHub Actions Workflows**

#### 📋 **CI Pipeline** (`.github/workflows/ci.yml`)
Executa em push/PR para `main` e `development`:

- **Lint Check**: Biome linting e formatting
- **Unit Tests & Coverage**: Jest com 100% coverage obrigatório
- **E2E Tests**: Playwright com Storybook

#### 🚀 **Deploy Pipeline** (`.github/workflows/deploy.yml`)
Executa em push para `main`:

- **Deploy automático** do Storybook para GitHub Pages

### 4. **Dependências adicionadas**
- `@biomejs/biome` - Linter e formatter
- `http-server` - Para servir Storybook nos testes E2E
- `@commitlint/cli` e `@commitlint/config-conventional` - Para validação de commits

### 5. **Configurações de qualidade**
- **Husky hooks** corrigidos (pre-commit, commit-msg)
- **lint-staged** configurado para Biome
- **commitlint** para Conventional Commits

## 🔧 Como funciona

### Fluxo de Desenvolvimento
1. **Desenvolvimento** em feature branches
2. **Pre-commit**: lint-staged executa Biome automaticamente
3. **Commit**: commitlint valida formato (Conventional Commits)
4. **Push**: GitHub Actions executa CI pipeline
5. **Pull Request**: Todos os checks devem passar para merge
6. **Merge para main**: Deploy automático do Storybook

### Comandos locais
```bash
# Lint e format
npm run lint          # Verifica problemas
npm run lint:fix      # Corrige problemas automaticamente
npm run format:write  # Formata arquivos

# Testes
npm run test:coverage # Testes unitários com coverage
npm run test:e2e      # Testes E2E com Playwright
npm run test:e2e:report # Abre relatório dos testes E2E

# Storybook
npm run storybook     # Inicia Storybook dev
npm run build-storybook # Build para produção
```

## ⚙️ Próximos Passos

### 1. **Configurar Branch Protection** (Manual)
Siga as instruções em `.github/BRANCH_PROTECTION.md` para:
- Proteger branch `main`
- Exigir status checks: `lint`, `test`, `e2e`
- Exigir reviews antes do merge
- Impedir push direto na main

### 2. **Configurar GitHub Pages** (Manual)
1. Vá para `Settings` > `Pages`
2. Source: `GitHub Actions`
3. O deploy será automático após merge na main

### 3. **Configurar Codecov** (Opcional)
Para relatórios de coverage públicos:
1. Conecte o repositório no [codecov.io](https://codecov.io)
2. O CI já está configurado para enviar relatórios

## 📊 Status Checks Obrigatórios

Para merge na `main`, todos estes checks devem passar:

### ✅ **lint** (Lint Check)
- Executa `biome check .`
- Verifica formatação, imports, regras de código
- Falha se houver problemas de lint

### ✅ **test** (Unit Tests & Coverage)
- Executa `npm run test:coverage`
- Requer 100% coverage para componentes custom
- Exclui `src/components/ui/` (shadcn components)

### ✅ **e2e** (E2E Tests)
- Executa `npm run test:e2e`
- Testa componentes no Storybook com Playwright
- Verifica se todos os stories renderizam corretamente

## 🛠️ Troubleshooting

### Problema: Testes E2E falhando
```bash
# Instalar browsers do Playwright
npx playwright install

# Rodar localmente
npm run build-storybook
npx http-server storybook-static -p 6006 &
npm run test:e2e
```

### Problema: Lint falhando
```bash
# Ver problemas
npm run lint

# Corrigir automaticamente
npm run lint:fix
```

### Problema: Coverage baixo
- Foque nos componentes em `src/components/` (exceto `ui/`)
- Não teste componentes shadcn em `src/components/ui/`
- Componentes custom precisam de 100% coverage

## 📝 Configuração Biome

Principais configurações em `biome.json`:
- **Formatter**: 2 espaços, aspas duplas, semicolons
- **Linter**: Regras recomendadas + customizações
- **Import Type**: Desabilitado para React components
- **Unused Imports**: Desabilitado para flexibilidade

---

**🎉 Implementação completa!** O pipeline garante qualidade de código através de:
- Lint automático com Biome
- 100% test coverage obrigatório  
- Testes E2E para componentes
- Deploy automático do Storybook
- Branch protection na main 