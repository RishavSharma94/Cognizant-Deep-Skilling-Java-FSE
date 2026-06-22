interface Document {
    void open();
}

class WordFile implements Document {
    public void open() {
        System.out.println("Word file opened");
    }
}

class PdfFile implements Document {
    public void open() {
        System.out.println("PDF file opened");
    }
}

class ExcelFile implements Document {
    public void open() {
        System.out.println("Excel file opened");
    }
}

abstract class DocumentFactory {
    abstract Document createDocument();
}

class WordFactory extends DocumentFactory {
    Document createDocument() {
        return new WordFile();
    }
}

class PdfFactory extends DocumentFactory {
    Document createDocument() {
        return new PdfFile();
    }
}

class ExcelFactory extends DocumentFactory {
    Document createDocument() {
        return new ExcelFile();
    }
}

public class FactoryMethodPattern_Example {

    public static void main(String[] args) {

        DocumentFactory factory;

        factory = new WordFactory();
        Document d1 = factory.createDocument();
        d1.open();

        factory = new PdfFactory();
        Document d2 = factory.createDocument();
        d2.open();

        factory = new ExcelFactory();
        Document d3 = factory.createDocument();
        d3.open();
    }
}