public double MediaNumeros (int[] array) {
    double a = 0;
    double b = 0;
    foreach (int item in array) {
        a = a + item;
        b++;
    }

    double x = a/b;
    return x;
}

public void main()
{
    try
    {
        Console.WriteLine("Passe quantos valores: ");
        int a = Convert.ToInt32(Console.ReadLine());
        int[] b = new int[a];
            Console.WriteLine("Passe os valores do array: ");
        for (int i = 0; i < a; i++){
            b[i] = Convert.ToInt32(Console.ReadLine());

        }

        double x = MediaNumeros(b);
        Console.WriteLine($"A média dos números é {x}");

    }

    catch (Exception ex)
    {
        Console.WriteLine("Deu erro kkkj");
        Console.WriteLine(ex.Message);

    }
}

main();