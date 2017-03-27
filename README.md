# mail-listener

1. Ajouter la variable d'environnement suivante: **NODE_LOG_PATH**, associer à cette variable le chemin d'un dossier de logs valide.
    * **Exemple:** NODE_LOG_PATH=E:\Work\logs
2. Ouvrir le fichier config/mail-config.js

3. Editer les entrées suivantes:
    * **username: Your email address**,
    * **password: Your email password**.

4. Ouvrir le fichier suivant config/aws-config.js
5. Editer les entrées suivantes:
    * **accessKeyId = Your Amazon access key accessKeyId**,
    * **secretAccessKey = Your Amazon secret access Key**,
    * **bucketname = The identifier of your Amazon bucket**.

6. Sous la racine du projet, lancer la commande suivante: 'node index.js'

7. L'application est en écoute de l'adresse mail configurée.

8. Envoyer un mail à l'adresse configurée, le mail doit respecter les détails suivants:
    * Subject: SALE ou PURCHASE ou OTHERS,
    * Body: Dans le corps de l'email, insérer les metadata à uploader avec le document,
    * Le format des metadata est le suivant:
        * **metadata:clé:valeur**
    * Attachez un document à votre mail.
    * Send...

9. Vous trouverez le document sous le bucket Amazon configuré.