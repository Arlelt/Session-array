public int SegundoMaiorNumero (int[] array) {
    int a = -2147483647;
    int b = -2147483647;
    foreach (int item in array) {
        if (item > a) 
            a = item;
    }

    foreach (int item in array) {
        if (b < item && item < a)
            b = item;
    }
    return b;
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

        int x = SegundoMaiorNumero(b);
        Console.WriteLine($"O segundo maior número é {x}");

    }

    catch (Exception ex)
    {
        Console.WriteLine("Deu erro kkkj");
        Console.WriteLine(ex.Message);

    }
}

main();