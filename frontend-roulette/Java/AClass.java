import java.util.*;

class AClass{
    public static void main(String[] args) {
        Test();

    }

    public static void Test(){
        Map<Integer, String> map = new HashMap<>();
        map.put(101, "JS");
        map.put(101, "DS");
        map.put(102, "Java");
        map.put(103, "Java");

        System.out.println(map);
    } 
}