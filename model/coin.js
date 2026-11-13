//Model-Klasse für die Münzen und 5Coins
export class Coin {

    constructor(x, y, width = 32, height = 32) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.collected = false;   // wurde die Münze eingesammelt?
        this.sprite = null;       // wird später vom Renderer gesetzt

        // Hitbox-Helfer (Bereich also rechteck, der für Kollision zählt)
        this.x1 = x;
        this.y1 = y;
        this.x2 = x + width;
        this.y2 = y + height;

    
    //Die Hitbox-Kanten (x1..y2) sind eine optionale Vereinfachung: Sie speichern die Rechteckgrenzen fertig, 
    // damit Kollisionen leichter zu prüfen sind und nach Positionsänderungen mit updateHitbox() konsistent bleiben.“
    //Ihr nutzt Kollision aber im Projekt hauptsächlich über x, y, width, height (siehe collision()), 
    // nicht zwingend über x1..y2. Trotzdem ist es als „Helfer“ da
    }

    // Wenn Coin gesammelt wird
    //Diese Methode wird aufgerufen, wenn der Spieler die Münze berührt
    //Aufruf im Controller z. B.: coin.collect();
    collect() {
        this.collected = true;
        //unsichtbar machen, für neustart einfacher
        this.sprite.visible = false;
    }

    //Vorteil: Beim Neustart müsst ihr nicht neu erzeugen, ihr könnt einfach visible = true setzen.
    //Genau das macht ihr in resetLevel():
    //coin.collected = false;
    //  coin.sprite.visible = true;

    // Update der Hitbox (falls Sprite Position verändert würde)
    updateHitbox() {
        this.x1 = this.x;
        this.y1 = this.y;
        this.x2 = this.x + this.width;
        this.y2 = this.y + this.height;
    }

    //Jetzt wird nicht mehr der alte x aus dem Konstruktor genutzt, sondern die aktuellen Werte this.x etc.
   //Dadurch passt die Hitbox wieder zur aktuellen Position.

}// Ende Klasse Coin
