public int menorNumero (int[] array) {
    int a = 2147483647;
    foreach (int item in array) {
        if (item < a) 
            a = item;
    }
    return a;
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

        int x = menorNumero(b);
        Console.WriteLine($"O menor número é {x}");

    }

    catch (Exception ex)
    {
        Console.WriteLine("Deu erro kkkj");
        Console.WriteLine(ex.Message);

    }
}

main();