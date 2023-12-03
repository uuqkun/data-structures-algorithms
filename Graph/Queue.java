class Queue {
    private int maxSize;
    private int[] queArray;
    private int front;
    private int rear;
    private int nItems;

    public Queue(int size) {
        this.maxSize = size;
        queArray = new int[maxSize];
        front = 0;
        rear = -1;
        nItems = 0;
    }

    public void displayAntrian() {

        int temp = this.front;

        for (int i = 0; i <= rear; i++) {
            System.out.print(queArray[front++]);
            if (front == maxSize) {
                front = 0;
            }
            System.out.print(", ");
        }
        System.out.println();
        front = temp;

    }

    public void insert(int value) {
        if (!isFull()) {
            queArray[++rear] = value;
            nItems++;
        } else {
        }
    }

    public int remove() {
        int temp = queArray[front];
        queArray[front] = 0;
        front++;

        if (front == maxSize) {
            front = 0;
        }
        nItems--;
        System.out.println(temp + " keluar Antrian");
        return temp;

    }

    public int peekFront() {
        return queArray[front];
    }

    public boolean isEmpty() {
        return (nItems == 0);
    }

    public boolean isFull() {
        return (nItems == maxSize);
    }

    public int size() {
        return nItems;
    }
}