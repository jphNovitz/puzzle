L'objectif était de créer un puzzle enfantin composé de carrés. Un carré est vide et l'image est reconsittuée en faisant glisser les différentes pièces.  
  
Plusieurs choses étaient à réaliser lors de ce défi: 

1 Créer le puzzle.
-----------------
Le puzzle sera composé de 12 carrés, 4 rangées et quatre colonnes.
Au départ les carrés forment une image. Mélangez et il y a puzzle.  
  
 Comment ?  
   
 Une méthode possible aurait consisté  a créer 12 'images partielles' en recoupant l'image
 de base avec un logiciel de traitement d'image.  L'intétêt est limité et le principe pas très intéressant.  
   
 La méthode choisie est celle-ci:
 
 J'ai prix une image de base, je l'ai recadrée pour qu'elle corresponde à ce dont j'avais besoins.
 
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

2 Mélanger le puzzle.
--------------------
L'idée qui viens directement en tête est simple.  J'ai une série de cases, je dois le mélanger. Simple: c'est un tableau je n'ai cas le mélanger
et afficher les cases dans le désordre.  Pour les mélanger, un par un, je supprime leur id et recrée un id avec la valeur mélangée.
(*) children a été défini plus haut, children.length correspond au nombres de cases (nombre d'enfants du parent 'container')

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
  
Cela fonctionne bien les éléments sont mélangés... fausse piste.  
Le principe d'un puzzle est de pouvoir le résoudre.  
Mélanger signigie que les pieces doivent être déplacées pour se mélanger prograssivement.  Si le jeu est monté
avec les pièces dans le désordre rien ne dis qu'il est possible de de reconstituer.
  
 Une meilleure solution est de se baser sur le trou, la case blanche.  
 Faire bouger les cases une par une (un certain nombre de fois) mélange le jeu progressivement.  
   
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
  
Je définis une variable pour haut - bas - droite - gauche.  
Je vérifie si la case existe (si je ne déborde pas du cadre) et je fais glisser.  
Le blanc de balade et mélange l'image.  C'est ça qu'il me faut !  
  
   
3 Faire bouger les pièces.
-------------------------

  
  