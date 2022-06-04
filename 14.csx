public int[] tabuada (int num) {
    int[] a = new int [11];
    for (int i = 0; i <=10; i++) {
        a[i] = num * i; 
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
        Console.WriteLine("Insira um número");
        int a = Convert.ToInt32(Console.ReadLine());
        int[] x = tabuada(a);
        PrintarArray(x);
    } catch (Exception ex) {
        Console.WriteLine ("TÁ ERRADO");
        Console.WriteLine(ex.Message);
    }
}

main ();