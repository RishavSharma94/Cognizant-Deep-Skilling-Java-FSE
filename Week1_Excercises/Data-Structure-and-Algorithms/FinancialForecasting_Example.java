public class FinancialForecasting_Example {

    static double futureValue(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValue(presentValue * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {

        double initialAmount = 10000;
        double growthRate = 0.1;
        int time = 5;

        double result = futureValue(initialAmount, growthRate, time);

        System.out.println("Future Value: " + result);
    }
}