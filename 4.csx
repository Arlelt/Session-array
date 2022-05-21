public int[] sequenciaArrray(int limite){
    int[] a = new int[limite];
    for(int i = 0; i<limite; i++){
        a[i] = i + 1;

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
        Console.Write("Digite o valor do Array: ");
        int limite = Convert.ToInt32(Console.ReadLine());
        int[] x = sequenciaArrray(limite);
        PrintarArray(x);
    }
    catch(Exception ex){
        Console.Write(ex.Message);
    }
}

main();
