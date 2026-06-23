import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;

public class AAATest {

    int a;
    int b;

    @Before
    public void setUp() {
        a = 10;
        b = 5;
        System.out.println("Setup executed");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }

    @Test
    public void testAddition() {

        int result = a + b;

        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {

        int result = a - b;

        assertEquals(5, result);
    }
}S