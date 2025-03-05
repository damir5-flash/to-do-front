# 📌 To-Do Frontend

## 🚀 Как внести изменения в проект

Мы работаем через **Pull Requests**, чтобы контролировать все изменения. Следуйте инструкции ниже, чтобы внести свой вклад в проект.

---

### 🔹 1. Форкаем репозиторий

1. Перейдите в [основной репозиторий](https://github.com/damir5-flash/to-do-front)
2. Нажмите кнопку **Fork**, чтобы создать свою копию
3. Клонируйте форк на свой компьютер:
   ```bash
   git clone https://github.com/ВАШ_ЛОГИН/to-do-front.git
   cd to-do-front
   ```
4. Добавьте основной репозиторий как `upstream`, чтобы получать обновления:
   ```bash
   git remote add upstream https://github.com/damir5-flash/to-do-front.git
   ```

---

### 🔹 2. Создаём новую ветку

Перед работой создайте новую ветку для изменений:
```bash
 git checkout -b feature-name
```
_(где `feature-name` — название ветки, например, `asik-branch` и `jaras-branch`)_

Вносите изменения в код, затем сохраняйте их:
```bash
 git add .
 git commit -m "Краткое описание изменений"
```

Загрузите изменения в свой форк:
```bash
 git push origin feature-name
```

---

### 🔹 3. Отправляем Pull Request (PR)

1. Перейдите в свой форк на GitHub
2. Нажмите **"Contribute" → "Open Pull Request"**
3. Выберите:
   - **base**: `main` (из основного репозитория)
   - **compare**: `feature-name` (из вашего форка)
4. Опишите изменения и отправьте PR

После отправки я проверю код и, если всё хорошо, внесу его в `main`.

---

### 🔹 4. Обновляем свой форк (если `main` изменился)

Если `main` был обновлён, синхронизируйте свой форк:
```bash
 git checkout main
 git fetch upstream
 git merge upstream/main
 git push origin main
```
Теперь у вас актуальная версия проекта! 🚀
