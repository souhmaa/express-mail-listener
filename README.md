# express-mail-listener

1. Ouvrir le fichier config/mail-config.js

2. Editer les entrées suivantes:
    * **username: Your email address**,
    * **password: Your email password**.

3. Ouvrir le fichier suivant config/aws-config.js
4. Editer les entrées suivantes:
    * **accessKeyId = Your Amazon access key accessKeyId**,
    * **secretAccessKey = Your Amazon secret access Key**,
    * **bucketname = The identifier of your Amazon bucket**.

5. Sous la racine du projet, lancer la commande suivante: 'node index.js'

6. L'application est en écoute de l'adresse mail configurée.

7. Envoyer un mail à l'adresse configurée, le mail doit respecter les détails suivants:
    * SUBJECT: SALE ou PURCHASE ou OTHERS,
    * BODY: Dans le corps de l'email, insérer les metadata à uploader avec le document,
    * Le format des metadata est le suivant:
        * **metadata:clé:valeur**
    * Attachez un document à votre mail.
    * Send...

8. Vous trouverez le document sous le bucket Amazon configuré
    