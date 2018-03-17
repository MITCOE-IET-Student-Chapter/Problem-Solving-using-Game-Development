function Snake(x, y) {

    this.x = x;
    this.scale = 20
    this.y = y;
    this.xSpeed = 0;
    this.ySpeed = 1

    this.w = 20

    this.tail = []

    this.show = function () {

        fill(255)
        rect(this.x, this.y, this.w, this.w)

        for (var i = 0; i < this.tail.length; i++) {

        }

    }

    this.update = function () {

        this.x += this.xSpeed * this.scale
        this.y += this.ySpeed * this.scale

        if (this.x > width) {

            this.x = 0

        } else if (this.x < 0) {

            this.x = width

        }

        if (this.y > height) {

            this.y = 0

        } else if (this.y < 0) {
            

            this.y = height

        }

    }

    this.direction = function(xspeed, yspeed) {

        this.xSpeed = xspeed;
        this.ySpeed = yspeed;

    }

}