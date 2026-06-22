class Logger {

    private static Logger instance;

    private Logger() {
        System.out.println("Logger Initialized");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void showMessage(String text) {
        System.out.println("Message: " + text);
    }
}

public class SingletonPattern_Example {

    public static void main(String[] args) {

        Logger log1 = Logger.getInstance();
        Logger log2 = Logger.getInstance();

        log1.showMessage("First Log");
        log2.showMessage("Second Log");

        if (log1 == log2) {
            System.out.println("Single instance is used");
        } else {
            System.out.println("Multiple instances created");
        }
    }
}