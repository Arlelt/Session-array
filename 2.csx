public int[] CriarSequencia(int limite){
    int[] sequencia= new int[limite];
    for(int i = 0; i<limite; i++){
        sequencia[i]= i;
    }
    return sequencia;
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
        
        int[] x = CriarSequencia(a);
        PrintarArray(x);
    }
    catch(Exception ex){
        Console.WriteLine(ex.Message);
        Console.WriteLine("Errorr");
    }
}
main();