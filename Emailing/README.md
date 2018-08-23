# Exemples et bonnes pratiques pour la création d'emailing responsives

#### La création d'emailing est spécifique en HTML. Beaucoup de clients mail ne supporte pas le HTML et CSS avancés. Il faut utiliser des balises standards et intégrer les styles directement dans les balises HTML.
#### Le fichier "emailing.html" contient le code d'un emailing "de base".
#### Pour des emailings plus compliqués, vous pouvez vous inspirer des templates de Litmus joints qui maximilisent la compatibilité entre les différents clients mail.

### Quelques bonnes pratiques

* Utiliser les balises standards (table, tr, td, span&hellip;) pour la structure. La sémantique HTML n'a pas d'importance car il n'y a pas de besoin de référencement.
* <b>Ne pas utiliser de JavaScript</b>
* Définir les styles directement dans les balises &lt;TD&gt;, &lt;TABLE&gt;, &lt;P&gt;, &lt;A&gt;, &lt;IMG&gt;, &hellip;. Utiliser le style dans le &lt;HEAD&gt; pour la version responsive et les déclarations générales qui seront prises en compte sur certains clients.
* Utiliser des polices de caractères standards. L'utilisation de Web Fonts est possible mais pas compatible avec beaucoup de client mail. Bien penser à définir les polices alternatives.<br />
* Définir les tailles de lignes et colonnes en utilisant des "spacers" (gif transparents). Des cellules vides ne sont parfois pas prises en compte sous certains clients.
* Définir les tailles des natives des images.
* Utiliser les formats JPG et GIF (pas de PNG, SVG).
* L'appel des images doit se faire en HTTP, directement depuis le serveur ou elles sont hébergées.<br />
* Encoder les caract&egrave;res sp&eacute;ciaux. Sous certaines bo&icirc;tes mail, ils peuvent appara&icirc;tre sous la forme &#65533;&nbsp;!!
Vous pouvez vous aider de cet outil en ligne&nbsp;: [Usefool Web Tool](http://usefulwebtool.com/fr/convertir-entites-html.php)
* Cet emailing est un exemple assez simple, c'est une bonne base. Des modèles plus avancés (et encore plus compatibles) sont disponibles sur le Web. Par exemple ceux de [Litmus](https://litmus.com/resources/free-responsive-email-templates).
