public class Heap {
    private Node[] heapArray;
    private int maxSize;
    private int currentSize;

    public Heap(int size) {
        maxSize = size;
        currentSize = 0;
        heapArray = new Node[size];
    }

    public boolean isEmpty() {
        return currentSize == 0;
    }

    public boolean insert(int key) {
        // if heap full, return false
        if (currentSize == maxSize) {
            return false;
        }

        Node newNode = new Node(key); // make a new node
        heapArray[currentSize] = newNode; // put in array
        trickleUp(currentSize++); // trickle it up

        return true; // successfully inserted
    }

    public void change(int index, int newValue) {
        int oldValue = heapArray[index].getKey(); // save old value
        heapArray[index].setKey(newValue); // change to new value

        if (oldValue < newValue) { // if raised
            trickleUp(index); // trickle it up
        } else { // if lowered
            trickleDown(index); // trickle it down
        }
    }

    public void trickleUp(int index) {
        int parent = (index - 1) / 2; // parent of last node
        Node bottom = heapArray[index]; // save bottom node

        // while not root and bottom > parent
        while (index > 0 && heapArray[parent].getKey() < bottom.getKey()) {
            heapArray[index] = heapArray[parent]; // move parent down
            index = parent; // move up
            parent = (parent - 1) / 2;
        }

        heapArray[index] = bottom; // insert bottom node
    }

    // remove item with max key
    public Node remove() {
        Node root = heapArray[0]; // save root to a variable
        heapArray[0] = heapArray[--currentSize]; // root <- last item
        System.out.println(currentSize);
        System.out.println(heapArray[--currentSize].getKey());
        trickleDown(0); // trickle down the root
        return root; // return removed node
    }

    // trickle down
    public void trickleDown(int index) {
        int largerChild;
        Node top = heapArray[index]; // save root to a variable

        while (index < currentSize / 2) { // while node has at least one child
            int leftChild = 2 * index + 1; // left child index
            int rightChild = leftChild + 1; // right child index

            // compare between left & right child, then find larger child
            if (rightChild < currentSize && heapArray[leftChild].getKey() < heapArray[rightChild].getKey()) {
                largerChild = rightChild; // right child is larger
            } else {
                largerChild = leftChild; // left child is larger
            }

            // if top >= largerChild, then break
            if (top.getKey() >= heapArray[largerChild].getKey()) {
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

    public void displayHeap() {
        System.out.println("Heap Array: ");
        for (int i = 0; i < currentSize; i++) {
            if (heapArray[i] != null) {
                System.out.print(heapArray[i].getKey() + " | ");
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
            System.out.print(heapArray[j].getKey());
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

    public void displayArray() {
        for (int j = 0; j < maxSize; j++) {
            System.out.print(heapArray[j].getKey() + " ");
        }
        System.out.println("");
    }
} // akhir class Heap