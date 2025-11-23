class Keyboard{
    private int keys;
    private String color="white";

    public void Keyboard(int keys){
        this.keys = keys;
    }

    public int getKeys() {
        return keys;
    }

    public void setKeys(int keys) {
        this.keys = keys;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void pressed(){
        System.out.println("Keyboard Pressed!");
    }

    public void throwIt(){
        System.out.println("Hit with keyboard");
        keys=67;
    }
}

class Demo{
    public static void main(String[] args) {
        System.out.println("Hello, world!");

        Keyboard obj;
        obj = new Keyboard();
        obj.pressed();
        obj.throwIt();
        System.out.println(obj.getKeys());
        System.out.println(obj.getColor());
    }

    
}