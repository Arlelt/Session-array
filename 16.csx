public int[] asci (string texto) {
    int[] a = new int [texto.Length];
    for (int i = 0; i < texto.Length; i++) {
        a[i] = (int)texto[i];
    }
    return a;
}

public void PrintarArray(int[] numero){
    foreach(int item in numero){
        Console.Write($"{item} ");
    }
}

public void main () {
    try {
        Console.WriteLine("Insira um texto");
        string a = Console.ReadLine();
        int[] x = asci(a);
        PrintarArray(x);
    } catch (Exception ex) {
        Console.WriteLine("TÁ ERRADO");
        Console.WriteLine(ex.Message);
    }
}

main ();