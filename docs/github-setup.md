# PflegeDoc auf GitHub erstellen

## 1. Neues Repository anlegen
1. Gehe auf https://github.com/new
2. Repository-Name: `pflegedoc`
3. Sichtbarkeit wählen (Private empfohlen)
4. Ohne Initial-README erstellen (dieses Repo enthält bereits Dateien)

## 2. Lokales Repository mit GitHub verbinden
```bash
git remote add origin git@github.com:<dein-user>/pflegedoc.git
git branch -M main
git push -u origin main
```

## 3. Nächste Schritte
- GitHub Issues für MVP-Backlog anlegen
- GitHub Projects Board erstellen (MVP, In Arbeit, Review, Done)
- GitHub Actions für grundlegende Checks ergänzen
