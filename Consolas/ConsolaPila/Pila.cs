using System.Collections.Generic;

namespace ConsolaPila
{
    public class Pila
    {
        static void main items;

        public Pila()
        {
            items = new List<string>();
        }

        public void Push(string item)
        {
            items.Add(item);
        }

        public string Pop()
        {
            var indiceDelUltimo = items.Count - 1;
            var ultimoItem = items[indiceDelUltimo];
            items.RemoveAt(indiceDelUltimo);

            return ultimoItem;
        }
    }
}
