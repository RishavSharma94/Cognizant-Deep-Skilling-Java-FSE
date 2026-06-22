import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    Product(int id, String name, String category) {
        this.productId = id;
        this.productName = name;
        this.category = category;
    }
}

public class ECommerceSearchFunction_Example {

    static Product linearSearch(Product[] arr, String key) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].productName.equalsIgnoreCase(key)) {
                return arr[i];
            }
        }
        return null;
    }

    static Product binarySearch(Product[] arr, String key) {
        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            int mid = (start + end) / 2;

            int cmp = arr[mid].productName.compareToIgnoreCase(key);

            if (cmp == 0) {
                return arr[mid];
            } else if (cmp < 0) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {

        Product[] items = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Watch", "Accessories"),
                new Product(104, "Phone", "Electronics")
        };

        Product res1 = linearSearch(items, "Watch");
        if (res1 != null) {
            System.out.println("Linear Search Found: " + res1.productName);
        }

        Arrays.sort(items, Comparator.comparing(p -> p.productName));

        Product res2 = binarySearch(items, "Watch");
        if (res2 != null) {
            System.out.println("Binary Search Found: " + res2.productName);
        }
    }
}