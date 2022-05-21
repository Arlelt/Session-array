public int[] sequenciaArray (int inicio, int limite){
    int[] arrai = new int [limite - inicio + 1];
    int falso=0;
    for(int i = limite; i>=inicio; i--){
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
        Console.Write("Digite o valor de inicio do Array: ");
        int inicio = Convert.ToInt32(Console.ReadLine());
        Console.Write("Digite o valor de inicio do Array: ");
        int limite = Convert.ToInt32(Console.ReadLine());
        int[] x = sequenciaArray(inicio, limite);
        PrintarArray(x);
    }
    catch(Exception ex){
        Console.Write(ex.Message);
    }
}

main();
