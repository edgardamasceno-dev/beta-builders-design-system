# Configuração de Branch Protection

Este documento descreve as configurações de **Branch Protection Rules** que devem ser aplicadas no repositório GitHub para garantir a qualidade do código antes do merge na branch `main`.

## Configuração Necessária

### Para a branch `main`:

1. **Acesse as configurações do repositório:**
   - Vá para `Settings` > `Branches`
   - Clique em `Add rule` ou edite a regra existente para a branch `main`

2. **Configurações obrigatórias:**

   #### ✅ Restrict pushes that create files larger than 100MB
   - [x] Ativar esta opção

   #### ✅ Require a pull request before merging
   - [x] Ativar esta opção
   - [x] **Require approvals**: 1 (mínimo)
   - [x] **Dismiss stale reviews when new commits are pushed**
   - [x] **Require review from code owners** (se houver CODEOWNERS file)

   #### ✅ Require status checks to pass before merging
   - [x] Ativar esta opção
   - [x] **Require branches to be up to date before merging**
   
   **Status checks obrigatórios:**
   - `lint` (Lint Check)
   - `test` (Unit Tests & Coverage)
   - `e2e` (E2E Tests)

   #### ✅ Require conversation resolution before merging
   - [x] Ativar esta opção

   #### ✅ Require signed commits
   - [x] Ativar esta opção (recomendado para maior segurança)

   #### ✅ Require linear history
   - [x] Ativar esta opção (força squash ou rebase)

   #### ✅ Require deployments to succeed
   - [ ] Não necessário para este projeto

   #### ✅ Lock branch
   - [ ] Não ativar (permitir merges autorizados)

   #### ✅ Do not allow bypassing the above settings
   - [x] Ativar esta opção
   - [x] **Restrict pushes that create files larger than specified limit**

## Fluxo de Trabalho

Com essas configurações, o fluxo será:

1. **Desenvolvimento** acontece na branch `development` ou em feature branches
2. **Pull Requests** são criados para merge na `main`
3. **CI Pipeline** executa automaticamente:
   - ✅ Lint check com Biome
   - ✅ Testes unitários com coverage
   - ✅ Testes E2E com Playwright
4. **Code Review** é obrigatório (mínimo 1 aprovação)
5. **Merge** só é permitido após todos os checks passarem

## Status Checks Detalhados

### 🔍 **lint** (Lint Check)
- Executa `npm run lint` usando Biome
- Verifica formatação, imports, e regras de código
- **Deve passar** para permitir merge

### 🧪 **test** (Unit Tests & Coverage)
- Executa `npm run test:coverage`
- Roda todos os testes unitários com Jest
- Gera relatório de coverage
- **Deve passar** para permitir merge

### 🎭 **e2e** (E2E Tests)
- Executa `npm run test:e2e`
- Roda testes E2E com Playwright
- Testa componentes no Storybook
- **Deve passar** para permitir merge

## Configuração via GitHub CLI (Opcional)

Você também pode configurar via comando (requer GitHub CLI):

```bash
# Criar regra de proteção para main
gh api repos/:owner/:repo/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["lint","test","e2e"]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true}' \
  --field restrictions=null \
  --field allow_force_pushes=false \
  --field allow_deletions=false
```

## Verificação

Para verificar se as configurações estão corretas:

1. Tente fazer push direto na `main` - deve ser bloqueado
2. Crie um PR com falhas nos testes - deve ser bloqueado  
3. Crie um PR válido - deve permitir merge após aprovação e checks

---

**⚠️ Importante:** Essas configurações garantem que apenas código de qualidade seja merged na branch principal, mantendo a estabilidade do projeto. 