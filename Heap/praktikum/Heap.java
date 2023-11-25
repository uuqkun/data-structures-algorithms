package praktikum;

class Heap {

    private int maxSize;
    private int currentSize;
    private Node[] heapArray;

    public Heap(int maxSize) {
        this.maxSize = maxSize;
        this.currentSize = 0;
        this.heapArray = new Node[maxSize];
    }

    public void insertAt(int index, int value) {
        if (currentSize == maxSize) {
            System.out.println("Heap is full");
            return;
        }

        Node newNode = new Node(value);
        heapArray[index] = newNode;
        currentSize++;

        trickleUp(index);
    }

    public void trickleUp(int index) {
        int parent = (index - 1) / 2;
        Node currentNode = heapArray[index];

        while (index > 0 && currentNode.getValue() > heapArray[parent].getValue()) {
            heapArray[index] = heapArray[parent];
            index = parent;
            parent = (index - 1) / 2;
        }

        heapArray[index] = currentNode;
    }

    public void trickleDown(int index) {
        int largerChild;
        Node top = heapArray[index]; // save root to a variable

        while (index < currentSize / 2) { // while node has at least one child
            int leftChild = 2 * index + 1; // left child index
            int rightChild = leftChild + 1; // right child index

            // compare between left & right child, then find larger child
            if (rightChild < currentSize && heapArray[leftChild].getValue() < heapArray[rightChild].getValue()) {
                largerChild = rightChild; // right child is larger
            } else {
                largerChild = leftChild; // left child is larger
            }

            // if top >= largerChild, then break
            if (top.getValue() >= heapArray[largerChild].getValue()) {
                break;
            }

            // move largerChild up
            heapArray[index] = heapArray[largerChild];

            // move down
            index = largerChild;
        }

        // insert top to the last index
        heapArray[index] = top;
    }

    public void displayArray() {
        for (int i = 0; i < currentSize; i++) {
            System.out.print(heapArray[i].getValue() + " ");
        }
        System.out.println();
    }

    public void HeapSort() {
        for (int i = (currentSize - 1) / 2; i >= 0; i--) {
            trickleDown(i); // trickle it down
        }

        for (int i = currentSize - 1; i >= 0; i--) {
            swap(heapArray[0], heapArray[i]);
            trickleDown(0);
        }
    }

    public Node remove() {
        Node root = heapArray[0];
        heapArray[0] = heapArray[--currentSize];
        trickleDown(0);
        return root;
    }

    private void swap(Node node1, Node node2) {
        int temp = node1.getValue();
        node1.setValue(node2.getValue());
        node2.setValue(temp);
    }

    public void displayHeap() {
        System.out.println("Heap Array: ");
        for (int i = 0; i < currentSize; i++) {
            if (heapArray[i] != null) {
                System.out.print(heapArray[i].getValue() + " | ");
            } else {
                System.out.println("--");
            }
        }
        System.out.println(" ");

        for (int i = 0; i < currentSize; i++) {
            System.out.print(i + "  | ");
        }

        System.out.println("");
        int nBlanks = 32;
        int itemsPerRow = 1;
        int column = 0;
        int j = 0;
        String dots = "...............................";
        System.out.println(dots + dots);
        while (currentSize > 0) {
            if (column == 0) {
                for (int k = 0; k < nBlanks; k++) {
                    System.out.print(' ');
                }
            }
            System.out.print(heapArray[j].getValue());
            if (++j == currentSize) {
                break;
            }
            if (++column == itemsPerRow) {
                nBlanks /= 2;
                itemsPerRow *= 2;
                column = 0;
                System.out.println();
            } else {
                for (int k = 0; k < nBlanks * 2 - 2; k++) {
                    System.out.print(' ');
                }
            }
        }
        System.out.println("\n" + dots + dots);
    }
}
