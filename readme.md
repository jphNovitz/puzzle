Je me suis lancé un petit défi: créer un puzzle coulissant, une série de carrés forment une image.  Une fois le puzzle mélangé 
le but du jeu est de recrééer l'image en faisant  glisser les carrés un par un.  
  
Voici les différente choses que j'ai mise en place pour atteindre mon objectif.  



1 Phase d'abstraction
----------------------

Pour les différentes étapes ci-dessous, l'élément central est l'abstraction c'est à dire avoir le modèle de ce que je veux faire et 
de ce que je vais mettre en place pour ma réalisation.  Quels sont les diffétents éléments à créer et comment je vais les faire mettre 
en action et les faire intéragir entre eux.  

C'est important car la première phase d'un projet doit être l'analyse.  
Bien fixer les idées sur ce que l'on a besoin, mettre en place le contexte c'est avoir une bonne base.  Le langage utilisé importe moins. 
Si je l'ai bien pensé, je pourrait l'adapter à n'importe quel langaage ou framework.


  Ce que je veux
  --------------

* une image composée de carrés ;
* un bouton qui: 
  * mélange les carrés pour déformer l'image ;
  * lance un chronomètre.
* un bouton pour arrêter le jeux et tout remettre à zéro ;
* une information sur le l'avancement de la résolution du puzzle ;
* Un affichage final sur la réussite ou l'échec du jeu.


  Une image composée de carrés.
  ----------------------------
  Deux méthodes sont possibles :
  * Prendre une image de base et la découper pour avroir les miniatures.  Assembler celles-ci comme autant de cases.
  * créer les différentes case et n'afficher pour chacune qu'une partie d'une même image de fond d'écran.

  Mélanger le puzzle.
  --------------------
L'idée qui viens directement en tête est simple.  J'ai une série de cases, je dois le mélanger.  
Simple: c'est un tableau je n'ai qu'à le mélanger et (ré)afficher les cases dans le désordre.  

Cela fonctionne bien les éléments sont mélangés... fausse piste.  
  
Le principe d'un puzzle est de pouvoir le résoudre.  
Mélanger signigie que les pieces doivent être déplacées pour se mélanger progressivement.  Si le jeu est monté
avec les pièces dans le désordre rien ne dis qu'il est possible de de reconstituer.
  
Une meilleure solution serait de se baser sur le 'trou', la case vide.  
Faire coulisser les cases une par une (un certain nombre de fois) pour mélanger le jeu progressivement.  
   
  
Je définis une variable pour haut - bas - droite - gauche.  
Je vérifie si la case existe (si je ne déborde pas du cadre) et je fais glisser.  
Le blanc de balade et mélange l'image.  C'est ça qu'il me faut !  
  
  Des boutons
  -----------
    
Rien de plus simple qu'un bouton.  Deux choses sont possibles en fonction du contexte:
* le clique sur le bouton appelle une fonction, déclenche quelque chose.
* écouter un évènement 'clique' sur ce bouton.  
  
     
3 Faire bouger les pièces.
-------------------------

  
  
  
  
  
  
  
  
  
   
 J'ai une image de base, je l'ai recadrée pour qu'elle corresponde à ce dont j'avais besoins.
 
 J'ai créé une série de douze divs 'thumbs' comprises dans un container. Il faut quatre div pour chaque ligne, il suffit de leur donner une largeur 
 adéquat.  
   
 Mes carrés sont blancs il leur faut un fond et je n'ai qu'une grande image.  
 J'utilise les propriétés [background-image](https://developer.mozilla.org/fr/docs/Web/CSS/background-image) pour placer l'image de fond et [background-position](https://developer.mozilla.org/fr/docs/Web/CSS/background-position) pour afficher une zone differente d'un div à l'autre.
   
 L'image de fond sera toujours la même, c'est une bonne pratique de mettre cette propriété  dans une seule classe et de la réutiliser.  La *position* devra, elle,
  être différente pour chaque div.  J'ai donc utilisé deux classes 'thumb' qui se charge d'afficher le *background* et de fixer les dimensions de la div.  
 Les classes de t1 à t2 sont chargées de préciser la position.
 
  ```css
.thumb {
    background-image: url("../img/out-league.png");
    background-size: 80vw;
    width: 20vw;
    min-width: 20vw;
    height: 20vw;
}

#t1 {
    background-position: top 0vw left 0vw;
}

```



```javascript
var orders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

orders.sort(() => Math.random() - 0.5);

for (let i = 0; i < children.length; i++) {
         setTimeout(function () {
            if (children[i].id !== 't12') {
                children[i].removeAttribute('id')
                children[i].id = 't' + orders[i]
            } else {
                orders.push(orders[i])
            }
        }, 200 * i, i)
    }
```
  
  
  
```javascript
for (let i = 0; i < 100; i++) {
        setTimeout(function () {
            let target = document.getElementById('t12')
            let up = nPreviousSibling(target, 4)
            let left = nPreviousSibling(target, 1)
            let down = nNextSibling(target, 4)
            let right = nNextSibling(target, 1)
            let randTarget = Math.floor(Math.random() * 4) + 1;
            switch (randTarget) {
                case 1:
                    if (up) {
                        let temp = target.id
                        target.id = up.id
                        up.id = temp
                    } else i--;
                    break;
                case 2:
                    if (left) {
                        let temp = target.id
                        target.id = left.id
                        left.id = temp
                    } else i--;
                    break;
                case 3:
                    if (down) {
                        let temp = target.id
                        target.id = down.id
                        down.id = temp
                    } else i--;
                    break;
                case 4:
                    if (right && childIndex(target) % 4 !== 0) { 
                        // childIndex avoid swapping righter uo and lefter under it
                        let temp = target.id
                        target.id = right.id
                        right.id = temp
                    } else i--;
                    break;

            }
        }, 60 * i, i)
    }
```  