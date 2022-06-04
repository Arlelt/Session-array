public double[] bhaskara(int a, int b, int c)
{
    double delta = Math.Pow(b, 2) - 4 * a * c;
    double[] x = new double[2];
    x[0] = (-b + Math.Sqrt(delta)) / 2 * a;
    x[1] = (-b - Math.Sqrt(delta)) / 2 * a;
    return x;
}

public void PrintarArray(double[] numero){
    foreach(int item in numero){
        Console.Write($"{item} ");
    }
}

public void main()
{
    try
    {
        Console.WriteLine("insira o valor de a");
        int a = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("insira o valor de ");
        int b = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("insira o valor de c");
        int c = Convert.ToInt32(Console.ReadLine());
        double[] x = bhaskara(a, b, c);
        PrintarArray(x);
    }
    catch (Exception ex)
    {
        Console.WriteLine("TÁ ERRADO");
        Console.WriteLine(ex.Message);
    }
}

main();