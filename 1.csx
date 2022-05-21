public void PrintarArray(int[] numero)
{

    foreach (int item in numero)
    {
        Console.Write($"{item} ");
    }

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

        PrintarArray(b);

    }

    catch (Exception ex)
    {
        Console.WriteLine("Deu erro kkkj");
        Console.WriteLine(ex.Message);

    }
}

main();

