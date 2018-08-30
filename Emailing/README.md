# Exemples et bonnes pratiques pour la création d'emailing responsives

#### La création d'emailing est spécifique en HTML. Beaucoup de clients mail ne supporte pas le HTML et CSS avancés. Il faut utiliser des balises standards et intégrer les styles directement dans les balises HTML.
#### Le fichier "emailing.html" contient le code d'un emailing "de base".
#### Pour des emailings plus compliqués, vous pouvez vous inspirer des templates de Litmus joints qui maximisent la compatibilité entre les différents clients mail.
#### Il existe aussi des frameworks comme [Foundation for Email](https://foundation.zurb.com/emails.html) ou [MJML](https://mjml.io/) qui peuvent être utilisés si vous êtes amené à développer régulièrement des emailings compliqués.

### Quelques bonnes pratiques

* Utiliser les balises standards (table, tr, td, span&hellip;) pour la structure. La sémantique HTML n'a pas d'importance car il n'y a pas de besoin de référencement.
* **Ne pas utiliser de JavaScript.**
* Définir les styles directement dans les balises &lt;TD&gt;, &lt;TABLE&gt;, &lt;P&gt;, &lt;A&gt;, &lt;IMG&gt;, &hellip;.<br />
* Utiliser le style dans le &lt;HEAD&gt; pour la version responsive et les déclarations générales qui seront prises en compte sur les clients modernes.
* Utiliser des polices de caractères standards. L'utilisation de Web Fonts est possible mais pas compatible avec beaucoup de client mail. Bien penser à définir les polices alternatives.
* **Ne pas utiliser d'images en background dans la version par défaut.**
* Définir les tailles de lignes et colonnes en utilisant des "spacers" (gif transparents). Des cellules vides ne sont parfois pas prises en compte sous certains clients.
* Définir les tailles natives des images.
* Utiliser les formats JPG et GIF pour les images (pas de PNG, SVG).
* Ajouter des ALT aux images quand nécessaires (certains clients, par défaut, n'affichent pas les images mais afficherons le texte alternatif).
* L'appel des images doit se faire en HTTP, directement depuis le serveur ou elles sont hébergées.<br />
* Comme pour un site web, le poids des images doit être optimisé (il existe des outils en ligne pour resizer ou réduire le poids des images)
* Encoder les caract&egrave;res sp&eacute;ciaux. Sous certaines bo&icirc;tes mail, ils peuvent appara&icirc;tre sous la forme &#65533;&nbsp;!!
Vous pouvez vous aider de cet outil en ligne&nbsp;: [Usefool Web Tool](http://usefulwebtool.com/fr/convertir-entites-html.php)
* Le fichier emailing.html est un exemple assez simple, c'est une bonne base. Des modèles plus avancés (et encore plus compatibles) sont disponibles sur le Web. Par exemple ceux de [Litmus](https://litmus.com/resources/free-responsive-email-templates) (ici joints).

### Pour tester le rendu de votre emailing sous différents clients :

Il existe des outils gratuits :
* [PutsMail](https://putsmail.com/) : permet d'envoyer votre emailing directement sur des adresses e-mail personnelles.
* [Inbox Inspector](http://www.inboxinspector.com/) : permet d'avoir un rendu sous différents clients mail.

Et des payants : Litmus, Email on Acid, …
