public int[] Contrario (int limite) {
    int[] a = new int[limite];
    int e = 0;
    for (int i = limite-1; i >= 0; i--){
        a[e] = i;
        e++;
    }
    return a;
}

public void PrintarArray(int[] numero){
    foreach(int item in numero){
        Console.Write($"{item} ");
    }
}

public void main(){
    try{
        Console.Write("Passe o valor do limite do Array: ");
        int a= Convert.ToInt32(Console.ReadLine());
        
        int[] x = Contrario(a);
        PrintarArray(x);
    }
    catch(Exception ex){
        Console.WriteLine(ex.Message);
        Console.WriteLine("Errorr");
    }
}
main();