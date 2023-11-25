package praktikum;

public class App {

    public static void main(String[] args) {
        int[] data = new int[10];
        for (int i = 0; i < data.length; i++) {
            data[i] = (int) (Math.random() * 100);
        }

        Heap heap = new Heap(data.length);

        System.out.println("Data sebelum diurutkan:");
        for (int i = 0; i < data.length; i++) {
            heap.insertAt(i, data[i]);
        }
        heap.displayArray();
        heap.displayHeap();

        System.out.println("Data setelah diurutkan:");
        // heap.HeapSort();
        // heap.displayArray();
        // heap.displayHeap();

        for (int i = 0; i < data.length; i++) {
            data[i] = heap.remove().getValue();
            System.out.print(data[i] + " ");
        }
    }

}
