public class App {
    public static void main(String[] args) {
        Heap theHeap = new Heap(35);
        theHeap.insert(70);
        theHeap.insert(40);
        theHeap.insert(50);
        theHeap.insert(20);
        theHeap.insert(60);
        theHeap.insert(100);
        theHeap.insert(80);
        theHeap.insert(30);
        theHeap.insert(10);
        theHeap.insert(90);
        theHeap.insert(55);
        theHeap.insert(65);
        theHeap.insert(75);
        theHeap.displayHeap();
        theHeap.change(12, 76);
        theHeap.displayHeap();
    }
}
