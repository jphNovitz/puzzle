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

3 Faire bouger les pièces.
-------------------------

  
  