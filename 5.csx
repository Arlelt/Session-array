public int[] sequenciaArray (int limite){
    int[] arrai = new int [limite];
    int falso=0;
    for(int i = limite; i>0; i--){
        arrai[falso] = i;
        falso++;
    }
    return arrai;
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
        int[] x = sequenciaArray(limite);
        PrintarArray(x);
    }
    catch(Exception ex){
        Console.Write(ex.Message);
    }
}

main();
